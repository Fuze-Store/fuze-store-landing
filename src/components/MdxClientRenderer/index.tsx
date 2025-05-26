'use client';

import { Box, CircularProgress } from '@mui/material';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';

export default function MdxClientRenderer({ slug }: { slug: string }) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null,
  );

  useEffect(() => {
    const fetchMdx = async () => {
      const res = await fetch(`/docs/${slug}.mdx`);
      const mdxText = await res.text();
      const mdx = await serialize(mdxText);
      setMdxSource(mdx);
    };

    fetchMdx();
  }, [slug]);

  if (!mdxSource)
    return (
      <Box p={8} textAlign="center">
        <CircularProgress />
      </Box>
    );

  return <MDXRemote {...mdxSource} />;
}
