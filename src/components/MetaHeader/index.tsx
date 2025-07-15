'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

type Props = {
  title: string;
  description?: string;
  includeAppName?: boolean;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://fuze-store.com';

export default function MetaHeader({
  title,
  description,
  includeAppName = true,
}: Props) {
  const pathname = usePathname();
  const fullDescription =
    description ?? 'Fuze Store - Your POS and Store Management Solution';
  const fullTitle = `${title}${includeAppName ? ` | ${process.env.NEXT_PUBLIC_APP_NAME ?? 'Fuze Store'}` : ''}`;
  const canonicalUrl = `${BASE_URL}${pathname}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  );
}
