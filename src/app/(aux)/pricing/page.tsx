import { Metadata } from 'next';

import PricingPage from '@/containers/Pricing/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Pricing | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Explore our POS plans tailored for every business size.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <PricingPage />;
}
