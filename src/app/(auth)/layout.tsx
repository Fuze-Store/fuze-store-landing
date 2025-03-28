'use client';

import { useAuthContext } from '@/containers/Auth/Context/Context';
import { paths } from '@/enums/path.enum';
// Import the functions you need from the SDKs you need
import { redirect } from 'next/navigation';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated } = useAuthContext();

  console.log('isLoading', isLoading);

  if (isAuthenticated) {
    redirect(paths.account);
  }

  if (isLoading) {
    return null;
  }

  return children;
}
