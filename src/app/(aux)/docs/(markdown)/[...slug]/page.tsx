import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src/markdown');

function getAllMdxFiles(dir: string, base = ''): { slug: string[] }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(base, entry.name);

    if (entry.isDirectory()) {
      return getAllMdxFiles(fullPath, relativePath);
    }

    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      const slugArray = relativePath
        .replace(/\.mdx$/, '')
        .replace(/\\/g, '/')
        .split('/');
      return [{ slug: slugArray }];
    }

    return [];
  });
}

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const slugPath = slug.join('/'); // e.g., ['blog', 'hello-world'] → 'blog/hello-world'
  const { default: Post } = await import(`@/markdown/${slugPath}.mdx`);
  return <Post />;
}

export function generateStaticParams() {
  return getAllMdxFiles(contentDir);
}

export const dynamicParams = false;
