'use client';

import React from 'react';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';

export default function Layout({ children }: { children: React.ReactNode }) {
  const _query = useGetAccount();

  return children;
}
