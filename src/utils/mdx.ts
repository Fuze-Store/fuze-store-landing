import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export async function compileMDX(slugPath: string) {
  const fullPath = path.join(process.cwd(), 'src/docs', `${slugPath}.mdx`);

  // ✅ Check if file exists first
  if (!fs.existsSync(fullPath)) {
    throw new Error(`MDX file not found: ${slugPath}`);
  }

  const source = fs.readFileSync(fullPath, 'utf8');

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.dirname(fullPath),
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkBreaks,
        remarkGfm,
      ];
      return options;
    },
  });

  return { code, frontmatter };
}

export async function getMDXContent(slugPath: string) {
  const fullPath = path.join(process.cwd(), 'src/markdown', `${slugPath}.mdx`);

  // ✅ Check if file exists first
  if (!fs.existsSync(fullPath)) {
    throw new Error(`MDX file not found: ${slugPath}`);
  }

  const source = fs.readFileSync(fullPath, 'utf8');

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.dirname(fullPath),
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkBreaks,
        remarkGfm,
      ];
      return options;
    },
  });

  return { code, frontmatter };
}
