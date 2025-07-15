import { Metadata } from 'next';

import HelpCenterPage from '@/containers/HelpCenter/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Help Center | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Explore our Help Center for resources and support.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/help-center`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <HelpCenterPage />;
}
