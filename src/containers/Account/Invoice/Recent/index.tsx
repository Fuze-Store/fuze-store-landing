'use client';

import { memo } from 'react';

import useGetRecentInvoices from '@/containers/Account/Invoice/hooks/useGetRecentInvoices';

import TableList from '@/containers/Account/Invoice/List/Table';

const AccountRecentInvoices = () => {
  const { data: response } = useGetRecentInvoices();

  const invoices = response?.data.items ?? [];

  return <TableList invoices={invoices} />;
};

export default memo(AccountRecentInvoices);
