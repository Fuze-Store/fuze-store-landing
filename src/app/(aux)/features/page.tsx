import { Metadata } from 'next';

import FeaturePage from '@/containers/Feature/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Features | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Discover the powerful features of Fuze Store.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/features`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <FeaturePage />;
}
