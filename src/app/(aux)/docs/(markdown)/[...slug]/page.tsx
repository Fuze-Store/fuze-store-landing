// app/docs/[...slug]/page.tsx
import MDXRenderer from '@/MDXRenderer';
import { compileMDX } from '@/utils/mdx';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slugPath = params.slug.join('/');

  try {
    const { frontmatter } = await compileMDX(slugPath);

    let title = `${process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store'} Documentation`;
    if (frontmatter?.title) {
      title = `${frontmatter.title} | ${title}`;
    }
    const description = frontmatter?.description ?? 'Fuze Store Documentation';
    const keywords: string[] = frontmatter?.keywords ?? [];
    const canonical =
      frontmatter?.canonical ??
      `${process.env.NEXT_PUBLIC_BASE_URL}/docs/${slugPath}`;

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
    };
  } catch {
    return {
      title: 'Page Not Found',
      description: 'This documentation page does not exist.',
    };
  }
}

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
