/**
 * @module DownloadButton
 * @category Containers
 *
 */

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {
  Button,
  ButtonProps,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuItemProps,
} from '@mui/material';
import { memo, MouseEvent } from 'react';

import useDownloadInvoice from '@/containers/Account/Invoice/hooks/useDownloadInvoice';

export type Props = {
  invoiceId: string;
  buttonType?: 'menu' | 'button';
  onClick?: (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void;
  ButtonProps?: Partial<ButtonProps>;
  MenuItemProps?: Partial<MenuItemProps>;
};

/**
 * Reusable component
 *
 * @category Components
 *
 */
const DownloadButton = ({
  invoiceId,
  buttonType = 'button',
  onClick,
  MenuItemProps,
  ButtonProps,
}: Props) => {
  const { downloadInvoice, isPending } = useDownloadInvoice();

  const handleClick = () => {
    downloadInvoice(invoiceId);
  };

  if (buttonType === 'menu') {
    return (
      <MenuItem
        {...MenuItemProps}
        onClick={(event) => {
          onClick?.(event);
          MenuItemProps?.onClick?.(event);
          handleClick();
        }}
      >
        <ListItemIcon>
          <CloudDownloadIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Download</ListItemText>
      </MenuItem>
    );
  }

  return (
    <Button
      variant="contained"
      disableElevation
      startIcon={<CloudDownloadIcon />}
      loading={isPending}
      {...ButtonProps}
      onClick={handleClick}
    >
      Download
    </Button>
  );
};

export default memo(DownloadButton);
