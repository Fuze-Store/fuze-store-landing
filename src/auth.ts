// TODO: this is next-auth version 5
// import { LoginResponse } from '@/types/login';
// import * as Sentry from '@sentry/nextjs';
// import axios from 'axios';
// import NextAuth from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';
// import Facebook from 'next-auth/providers/facebook';
// import Google from 'next-auth/providers/google';
// import endpoints from './utils/endpoints';

// export const { auth, handlers, signIn, signOut } = NextAuth({
//   providers: [
//     Facebook({
//       clientId: process.env.AUTH_FACEBOOK_ID!,
//       clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
//     }),
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     Credentials({
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Missing email or password');
//         }

//         try {
//           const { data: res } = await axios.post<LoginResponse>(
//             endpoints.auth.login,
//             credentials,
//             {
//               headers: { 'Content-Type': 'application/json' },
//               baseURL: process.env.API_BASE_URL,
//             },
//           );

//           if (res.data.accessToken) {
//             return {
//               email: res.data.user.email,
//               id: res.data.user.id, // Ensure this maps to a valid user ID
//               token: res.data.accessToken,
//               expiresIn: res.data.expiresIn,
//               image: null,
//               name: res.data.user.info?.fullName,
//             };
//           }
//         } catch (err) {
//           Sentry.captureException(err);
//           console.error(err);
//           throw new Error(
//             'Unable to process your request. Please try again later',
//           );
//         }

//         throw new Error('Invalid email or password');
//       },
//     }),
//   ],
//   callbacks: {
//     // Callback for signing in
//     async signIn({ account, profile }) {
//       if (account?.provider === 'credentials') {
//         return true;
//       }

//       if (account?.provider === 'google') {
//         return !!(profile && profile.email_verified);
//       }

//       if (account?.provider === 'facebook') {
//         return true;
//       }

//       return true; // Only do above providers
//     },
//     // Construct JWT token
//     async jwt({ token, user, account, session }) {
//       //   console.log('jwt.token', token);
//       //   console.log('jwt.user', user);
//       //   console.log('jwt.account', account);
//       //   console.log('jwt.session', session);

//       if (
//         (account?.provider === 'facebook' || account?.provider === 'google') &&
//         account?.access_token
//       ) {
//         const { data: response } = await axios.post<LoginResponse>(
//           endpoints.social.login,
//           {
//             provider: account.provider.toUpperCase(),
//             accessToken: account.access_token,
//           },
//           { baseURL: process.env.API_BASE_URL },
//         );

//         return {
//           ...token,
//           laravelToken: response.data.accessToken,
//           laravelTokenExpires: new Date(response.data.expiresIn).toISOString(),
//           accessToken: account?.access_token,
//           id: response.data.user.id,
//           email: response.data.user.email,
//           name: response.data.user.info?.fullName ?? '',
//         };
//       }

//       if (user) {
//         console.log('token', token);
//         // token.accessToken = token.
//         token.laravelToken = user.token;
//         token.laravelTokenExpires = new Date(user.expiresIn).toISOString();
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//       }
//       return token;
//     },
//     // The constructed session from jwt()
//     async session({ session, token }) {
//       //   console.log('session.session', session);
//       //   console.log('session.token', token);

//       //   return session;

//       return {
//         ...session,
//         accessToken: token.accessToken,
//         user: {
//           id: token.id as string,
//           name: token.name as string | null | undefined,
//           email: token.email as string | null | undefined,
//           image: token.image,
//           laravelToken: token.laravelToken,
//           laravelTokenExpires: token.laravelTokenExpires,
//         },
//       };
//     },
//   },
//   debug: true,
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/login',
//   },
//   secret: process.env.AUTH_SECRET!,
// });
