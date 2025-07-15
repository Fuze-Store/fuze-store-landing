'use client';

import { redirect } from 'next/navigation';
import * as React from 'react';

import { paths } from '@/helpers/page.helper';
import useSession from '@/hooks/useSession';

export default function Layout({ children }: React.PropsWithChildren) {
  const session = useSession();

  if (session.status === 'authenticated') {
    redirect(paths.account);
  }

  return children;
}
