import { LoginResponse } from '@/types/login';
import endpoints from '@/utils/endpoints';
import axios from 'axios';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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

        const response = await axios.post<LoginResponse>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoints.auth.login}`,
          { email: credentials.email, password: credentials.password },
          { headers: { 'Content-Type': 'application/json' } },
        );

        if (response.data.data.accessToken) {
          return response.data.data;
        }

        throw new Error('Invalid email or password');
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.accessToken = user.accessToken;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.accessToken = token.accessToken as string;
  //     return session;
  //   },
  // },
  pages: {
    signIn: '/login',
  },
  // secret: process.env.NEXTAUTH_SECRET,
};

// const handler = NextAuth(authOptions);
export default NextAuth(authOptions);
