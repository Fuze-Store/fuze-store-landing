import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MDXRenderer from '@/MDXRenderer';
import TermsAndConditionsPage from '@/containers/Terms/Page';
import { getMDXContent } from '@/utils/mdx';

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

export default async function Page() {
  let code: string | null = null;
  try {
    const result = await getMDXContent('terms-and-conditions');
    code = result.code;
  } catch (err) {
    console.error(err);
    return notFound(); // 🔥 Show Next.js 404 page
  }
  return (
    <TermsAndConditionsPage>
      <MDXRenderer code={code} />
    </TermsAndConditionsPage>
  );
}
