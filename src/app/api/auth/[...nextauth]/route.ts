import * as Sentry from '@sentry/nextjs';
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
  // TODO: Remove this in production
  debug: true,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
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
            credentials,
            {
              headers: { 'Content-Type': 'application/json' },
              baseURL: process.env.API_BASE_URL,
            },
          );

          if (res.data) {
            return {
              id: res.data.user.id, // Ensure this maps to a valid user ID
              name: res.data.user.info?.fullName,
              email: res.data.user.email,
              token: res.data.accessToken,
              fuze: res.data,
            };
          }
        } catch (err) {
          Sentry.captureException(err);
          console.error(err);
          throw new Error(
            'Unable to process your request. Please try again later',
          );
        }

        throw new Error('Invalid email or password');
      },
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID!,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
      authorization: {
        url: 'https://www.facebook.com/v18.0/dialog/oauth',
        params: {
          client_id: process.env.AUTH_FACEBOOK_ID,
          scope: 'openid email',
          response_type: 'code',
        },
      },
      token: {
        url: 'https://graph.facebook.com/oauth/access_token',
        async request(context) {
          const url =
            `https://graph.facebook.com/oauth/access_token` +
            `?code=${context.params.code}` +
            `&client_id=${context.provider.clientId}` +
            `&redirect_uri=${context.provider.callbackUrl}` +
            `&client_secret=${context.provider.clientSecret}`;
          const response = await fetch(url);
          const tokens = await response.json();
          return { tokens };
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (
        (account?.provider === 'facebook' || account?.provider === 'google') &&
        account?.access_token
      ) {
        let provider;

        if (account.provider === 'facebook') {
          provider = SocialProvider.FACEBOOK;
        } else if (account.provider === 'google') {
          provider = SocialProvider.GOOGLE;
        }

        const { data: response } = await axios.post<LoginResponse>(
          endpoints.social.login,
          { provider, accessToken: account.access_token },
          { baseURL: process.env.API_BASE_URL },
        );

        return { ...token, fuze: response.data };
      }

      if (user) {
        // @ts-expect-error: Typescript
        token.fuze = user?.fuze;
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, fuze: token.fuze };
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

// import { handlers } from '@/auth';
// export const { GET, POST } = handlers;
