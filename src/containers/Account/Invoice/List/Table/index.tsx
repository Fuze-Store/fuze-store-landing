'use client';

import { Invoice } from '@fuze-store/fuze-store-shared';
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
} from '@mui/material';
import { memo } from 'react';

import TableItem from '@/containers/Account/Invoice/List/Table/Item';

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

type Props = {
  invoices?: Invoice[];
  TableContainerProps?: Partial<TableContainerProps>;
};

const TableList = ({ invoices = [], TableContainerProps }: Props) => {
  return (
    <TableContainer {...TableContainerProps}>
      <Table size="small" sx={{ minWidth: 700 }} aria-label="customized table">
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
            <TableItem invoice={invoice} key={invoice.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(TableList);
