import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import * as React from 'react';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { paths } from '@/enums/path.enum';

export default async function Layout({ children }: React.PropsWithChildren) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(paths.account);
  }

  return children;
}
