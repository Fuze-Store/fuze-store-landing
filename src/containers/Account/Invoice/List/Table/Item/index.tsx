'use client';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Button,
  IconButton,
  Menu,
  Stack,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { memo, useState } from 'react';

import { paths } from '@/helpers/page.helper';
import { formatDate, Invoice } from '@fuze-store/fuze-store-shared';

import DownloadButton from '@/containers/Account/Invoice/DownloadButton';
import PayButton from '@/containers/Account/Invoice/PayButton';

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

type Props = {
  invoice: Invoice;
};

const TableItem = ({ invoice }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledTableRow key={invoice.id}>
      <StyledTableCell>
        <Typography fontWeight={700}>{invoice.invoiceNumber}</Typography>
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
        <Stack direction="row" spacing={0.5}>
          <Button
            sx={{ minWidth: 120 }}
            LinkComponent={Link}
            href={paths.accountInvoiceDetails.replace('[id]', invoice.id)}
          >
            View Details
          </Button>

          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{ paper: { sx: { minWidth: 240 } } }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
          >
            <DownloadButton
              buttonType="menu"
              invoiceId={invoice.id}
              onClick={handleClose}
            />
            <PayButton
              buttonType="menu"
              invoice={invoice}
              onClick={handleClose}
            />
          </Menu>
        </Stack>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default memo(TableItem);
