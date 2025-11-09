'use client';

import {
  Stack,
  styled,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEventHandler } from 'react';

import useGetInvoiceList from '@/containers/Account/Invoice/hooks/useGetInvoiceList';
import { paths } from '@/helpers/page.helper';

import SectionContainer from '@/components/SectionContainer';
import BasicDatePicker from '@/containers/Account/Invoice/List/Filter';
import TableList from '@/containers/Account/Invoice/List/Table';

const HeaderTableHead = styled(TableHead)(({ theme }) => ({
  '&::after': {
    content: "''",
    display: 'block',
    height: theme.spacing(2) /* space between thead and tbody */,
  },
}));

const HeaderTableRow = styled(TableRow)(({ theme }) => ({
  '& th:first-child, & td:first-child': {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  '& th:last-child, & td:last-child': {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  '& td, & th': {
    borderBottom: 0,
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 100],
  },
}));

const HeaderTableCell = styled(TableCell)(() => ({
  fontWeight: 700,
}));

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageStr = searchParams.get('page');
  const perPageStr = searchParams.get('perPage');
  const queryStatuses = searchParams.get('statuses');
  const queryStartDate = searchParams.get('startDate');
  const queryEndDate = searchParams.get('endDate');
  const page = pageStr ? parseInt(pageStr) : 1;
  const perPage = perPageStr ? parseInt(perPageStr) : 10;

  const { data: response } = useGetInvoiceList({
    page,
    perPage,
    statuses: queryStatuses ?? undefined,
    startDate: queryStartDate ?? undefined,
    endDate: queryEndDate ?? undefined,
  });

  const paginatedInvoices = response?.data;
  const invoices = paginatedInvoices?.items;

  const onPageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    const params = new URLSearchParams({
      page: (page + 1).toString(),
      perPage: perPage.toString(),
    });
    router.replace(`${paths.accountInvoice}?${params.toString()}`);
  };

  const onRowsPerPageChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const params = new URLSearchParams({
      page: '1',
      perPage: event.target.value,
    });
    router.replace(`${paths.accountInvoice}?${params.toString()}`);
  };

  return (
    <Container maxWidth="lg" disableGutters>
      <SectionContainer px={2}>
        <Stack>
          <BasicDatePicker />
        </Stack>
      </SectionContainer>

      <SectionContainer>
        <TableList
          invoices={invoices}
          TableContainerProps={{ sx: { px: 2 } }}
        />
      </SectionContainer>

      <SectionContainer>
        <TablePagination
          component="div"
          count={paginatedInvoices?.total ?? 0}
          page={(paginatedInvoices?.page || page) - 1}
          showFirstButton
          showLastButton
          onPageChange={onPageChange}
          rowsPerPage={paginatedInvoices?.perPage || perPage}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </SectionContainer>
    </Container>
  );
}
