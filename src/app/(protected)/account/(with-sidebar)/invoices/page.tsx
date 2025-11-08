'use client';

import {
  Button,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEventHandler } from 'react';

import useGetInvoiceList from '@/containers/Account/Invoice/hooks/useGetInvoiceList';
import { paths } from '@/helpers/page.helper';
import { formatDate } from '@fuze-store/fuze-store-shared';

import SectionContainer from '@/components/SectionContainer';
import InvoiceDownloadButton from '@/containers/Account/Invoice/DownloadButton';
import BasicDatePicker from '@/containers/Account/Invoice/List/Filter';
import Link from 'next/link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
    <Container maxWidth="lg">
      <SectionContainer>
        <Stack>
          <BasicDatePicker />
        </Stack>
      </SectionContainer>

      <SectionContainer>
        <TableContainer>
          <Table
            size="small"
            sx={{ minWidth: 700 }}
            aria-label="customized table"
          >
            <HeaderTableHead>
              <HeaderTableRow>
                <HeaderTableCell>Name</HeaderTableCell>
                <HeaderTableCell>Period</HeaderTableCell>
                <HeaderTableCell align="right">Amount</HeaderTableCell>
                <HeaderTableCell>Status</HeaderTableCell>
                <HeaderTableCell>Action</HeaderTableCell>
              </HeaderTableRow>
            </HeaderTableHead>
            <TableBody>
              {invoices?.map((invoice) => (
                <StyledTableRow key={invoice.id}>
                  <StyledTableCell>
                    <Typography fontWeight={700}>
                      {invoice.invoiceNumber}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography>
                      {formatDate(invoice.billingEndDate, 'MMM dd, yyyy')}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography>{`${invoice?.currency} ${invoice.totalAmount.toFixed(2)}`}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>{invoice.status?.code}</StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        sx={{ minWidth: 120 }}
                        LinkComponent={Link}
                        href={paths.accountInvoiceDetails.replace(
                          '[id]',
                          invoice.id,
                        )}
                      >
                        View Details
                      </Button>
                      <InvoiceDownloadButton invoiceId={invoice.id} />
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionContainer>

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
    </Container>
  );
}
