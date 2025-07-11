// app/docs/[...slug]/page.tsx
import MDXRenderer from '@/MDXRenderer';
import { compileMDX } from '@/utils/mdx';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string[] };
};

export default async function Page({ params }: Props) {
  const slugPath = params.slug.join('/');

  try {
    const { code } = await compileMDX(slugPath);
    return <MDXRenderer code={code} />;
  } catch (err) {
    console.error(err);
    return notFound(); // 🔥 Show Next.js 404 page
  }
}
