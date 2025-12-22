import { Metadata } from 'next';

import PrivacyPolicyPage from '@/containers/Privacy/Page';
import MDXRenderer from '@/MDXRenderer';
import { getMDXContent } from '@/utils/mdx';
import { notFound } from 'next/navigation';

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

export default async function Page() {
  let code: string | null = null;
  try {
    const result = await getMDXContent('privacy-policy');
    code = result.code;
  } catch (err) {
    console.error(err);
    return notFound(); // 🔥 Show Next.js 404 page
  }
  return (
    <PrivacyPolicyPage>
      <MDXRenderer code={code} />
    </PrivacyPolicyPage>
  );
}
