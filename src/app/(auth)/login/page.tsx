import { Metadata } from 'next';

import LoginPage from '@/containers/Login/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Login | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Log in to your Fuze Store account.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <LoginPage />;
}
