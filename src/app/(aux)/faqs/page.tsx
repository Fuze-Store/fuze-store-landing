import { Metadata } from 'next';

import FAQsPage from '@/containers/FAQs/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `FAQs | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Explore our frequently asked questions.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <FAQsPage />;
}
