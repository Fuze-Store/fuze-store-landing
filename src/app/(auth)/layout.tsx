'use client';

import { redirect } from 'next/navigation';
import * as React from 'react';

import { paths } from '@/enums/path.enum';
import useSession from '@/hooks/useSession';

export default function Layout({ children }: React.PropsWithChildren) {
  const { data: session } = useSession();

  if (session) {
    redirect(paths.account);
  }

  return children;
}
