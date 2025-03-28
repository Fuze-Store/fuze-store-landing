'use client';

import { useAuthContext } from '@/containers/Auth/Context/Context';
import Error from 'next/error';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Error statusCode={404} />;
  }

  return children;
}
