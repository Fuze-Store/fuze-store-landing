import { Metadata } from 'next';

import TermsAndConditionsPage from '@/containers/Terms/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Terms and Conditions | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description =
    'Review our Terms and Conditions for using Fuze Store services.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/terms-and-conditions`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <TermsAndConditionsPage />;
}
