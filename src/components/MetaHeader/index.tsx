'use client';

import { useEffect } from 'react';

type Props = {
  title: string;
  description: string;
  includeAppName?: boolean;
};

export default function MetaHeader({
  title,
  description,
  includeAppName = true,
}: Props) {
  useEffect(() => {
    if (title)
      document.title = `${title}${includeAppName ? ' | ' + (process.env.NEXT_PUBLIC_APP_NAME || 'Fuze Store') : ''}`;

    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description, includeAppName]);

  return null;
}
