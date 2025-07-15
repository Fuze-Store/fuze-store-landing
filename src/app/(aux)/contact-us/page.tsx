import { Metadata } from 'next';

import ContactUsPage from '@/containers/ContactUs/Page';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Contact Us | ${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'}`;
  const description = 'Get in touch with us for any inquiries or support.';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`;

  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}

export default function Page() {
  return <ContactUsPage />;
}
