'use client';

import { useAuthContext } from '@/containers/Auth/Context/Context';
// Import the functions you need from the SDKs you need
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated } = useAuthContext();

  console.log('isLoading', isLoading);

  // if (isAuthenticated) {
  //   redirect(paths.account);
  // }

  // if (isLoading) {
  //   return null;
  // }

  return children;
}
