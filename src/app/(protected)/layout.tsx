import { paths } from '@/enums/path.enum';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(paths.login);
  }

  return children;
}
