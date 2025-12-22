import { Metadata } from 'next';
import { Suspense } from 'react';

import RegisterPage from '@/containers/Register/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Register | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Create a new account for Fuze Store.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/register`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterPage />
    </Suspense>
  );
}
