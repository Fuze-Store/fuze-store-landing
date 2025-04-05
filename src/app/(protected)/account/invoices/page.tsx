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

import useGetInvoiceList from '@/containers/Account/Invoice/hooks/useGetInvoiceList';
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Page() {
  const { data: response } = useGetInvoiceList({ page: 1, perPage: 10 });

  const paginatedInvoices = response?.data;
  const invoices = response?.data;
  console.log(invoices);
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
                {paginatedInvoices?.items.map((invoice) => (
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
          count={100}
          page={1}
          showFirstButton
          showLastButton
          onPageChange={() => {}}
          rowsPerPage={10}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </>
  );
}
