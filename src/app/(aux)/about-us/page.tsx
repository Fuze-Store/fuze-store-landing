import { Metadata } from 'next';

import AboutUsPage from '@/containers/AboutUs/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `About Us | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description =
    'Learn more about Fuze Store and our mission to empower businesses.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <AboutUsPage />;
}
