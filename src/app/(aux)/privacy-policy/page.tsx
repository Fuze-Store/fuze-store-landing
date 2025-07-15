import { Metadata } from 'next';

import PrivacyPolicyPage from '@/containers/Privacy/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Privacy Policy | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description =
    'Explore our Privacy Policy for information on how we handle your data.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <PrivacyPolicyPage />;
}
