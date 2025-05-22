import axios from 'axios';
import { NextApiHandler } from 'next';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

import { paths } from '@/enums/path.enum';
import { SocialProvider } from '@/enums/socialProviders.enum';
import { LoginResponse } from '@/types/login';
import endpoints from '@/utils/endpoints';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Laravel JWT',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing email or password');
        }

        try {
          const { data: res } = await axios.post<LoginResponse>(
            endpoints.auth.login,
            { email: credentials.email, password: credentials.password },
            {
              headers: { 'Content-Type': 'application/json' },
              baseURL: process.env.API_BASE_URL,
            },
          );

          if (res.data.accessToken) {
            return {
              id: res.data.user.id, // Ensure this maps to a valid user ID
              name: res.data.user.info?.fullName,
              email: res.data.user.email,
              token: res.data.accessToken,
              account: res.data.user,
            };
          }
        } catch (err) {
          console.error(err);
          throw new Error(
            'Unable to process your request. Please try again later',
          );
        }

        throw new Error('Invalid email or password');
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'email public_profile',
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user?.token) {
        console.log('user', user);
        console.log('token', token);
        return { ...token, account: user.account, accessToken: user.token };
      }

      // For Social
      if (account?.provider === 'facebook' || account?.provider === 'google') {
        let provider: SocialProvider | null = null;
        if (account?.provider === 'facebook') {
          provider = SocialProvider.FACEBOOK;
        }
        if (account?.provider === 'google') {
          provider = SocialProvider.GOOGLE;
        }

        if (!provider) return token;

        const { data: response } = await axios.post<LoginResponse>(
          endpoints.social.login,
          { provider, accessToken: account.access_token },
          { baseURL: process.env.API_BASE_URL },
        );

        return {
          ...token,
          id: response.data.user.id,
          name: response.data.user.info?.fullName,
          email: response.data.user.email,
          accessToken: response.data.accessToken,
          account: response.data.user,
        };
      }

      return token;
    },
    session({ session, token }) {
      const updatedSession = {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          accessToken: token.accessToken as string,
        },
      };
      return updatedSession;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: paths.login,
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
