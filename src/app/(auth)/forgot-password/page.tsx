import { Metadata } from 'next';

import ForgotPasswordPage from '@/containers/ForgotPassword/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Forgot Password | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Reset your Fuze Store password.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/forgot-password`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <ForgotPasswordPage />;
}
