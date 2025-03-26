'use client';

// Import the functions you need from the SDKs you need
import { usePathname } from 'next/navigation';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // TODO: Add Auth checker logic

  return children;
}
