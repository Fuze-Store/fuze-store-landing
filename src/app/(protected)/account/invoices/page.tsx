'use client';

import {
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
import { ChangeEventHandler } from 'react';

import useGetInvoiceList from '@/containers/Account/Invoice/hooks/useGetInvoiceList';
import { paths } from '@/enums/path.enum';
import { formatDate } from '@/helpers/date.helper';

import SectionContainer from '@/components/SectionContainer';
import InvoiceDownloadButton from '@/containers/Account/Invoice/DownloadButton';

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
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
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
  },
  '& th:last-child, & td:last-child': {
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
  },
  '& td, & th': {
    borderBottom: 0,
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 200],
  },
}));

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
}));

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageStr = searchParams.get('page');
  const perPageStr = searchParams.get('perPage');

  const page = pageStr ? parseInt(pageStr) : 1;
  const perPage = perPageStr ? parseInt(perPageStr) : 10;

  const { data: response } = useGetInvoiceList({ page, perPage });

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
    <>
      <SectionContainer px={3} sx={{ mb: 4 }}>
        <Typography variant="h4">Invoices</Typography>
      </SectionContainer>

      <Container sx={{ ml: { lg: 0 } }} maxWidth="lg">
        <SectionContainer>
          <TableContainer>
            <Table
              size="small"
              sx={{ minWidth: 700 }}
              aria-label="customized table"
            >
              <HeaderTableHead>
                <HeaderTableRow>
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
                      <Typography
                        fontWeight={700}
                      >{`${formatDate(invoice.billingStartDate, 'MMM dd, yyyy')} - ${formatDate(invoice.billingEndDate, 'MMM dd, yyyy')}`}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Typography>{`${invoice?.currency} ${invoice.totalAmount}`}</Typography>
                    </StyledTableCell>
                    <StyledTableCell>{invoice.status}</StyledTableCell>
                    <StyledTableCell>
                      <InvoiceDownloadButton invoiceId={invoice.id} />
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
    </>
  );
}
