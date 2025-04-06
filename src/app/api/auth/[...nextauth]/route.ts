import { paths } from '@/enums/path.enum';
import { LoginResponse } from '@/types/login';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';
import { NextApiHandler } from 'next';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';

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

        const { data: res } = await axiosPrivate.post<LoginResponse>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoints.auth.login}`,
          { email: credentials.email, password: credentials.password },
          { headers: { 'Content-Type': 'application/json' } },
        );

        if (res.data.accessToken) {
          return {
            id: res.data.user.id, // Ensure this maps to a valid user ID
            name: res.data.user.info?.fullName,
            email: res.data.user.email,
            token: res.data.accessToken,
          };
        }

        throw new Error('Invalid email or password');
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: user.token,
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
  secret: process.env.NEXTAUTH_SECRET,
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
