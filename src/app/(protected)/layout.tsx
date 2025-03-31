'use client';

import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isAuthenticated } = useAuthContext();
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return <Error statusCode={404} />;
  // }

  return children;
}
