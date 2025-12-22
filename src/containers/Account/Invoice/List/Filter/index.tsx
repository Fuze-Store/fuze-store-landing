'use client';

import { SubscriptionInvoiceStatus } from '@/enums/subscription.enum';
import { paths } from '@/helpers/page.helper';
import { formatDate } from '@fuze-store/fuze-store-shared';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useMemo, useState } from 'react';

export default function InvoiceListFilter() {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const [statuses, setStatuses] = useState<string[]>([]);
  const [endDate, setEndDate] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<string | undefined>();

  const queryStatuses = searchParams.get('statuses');
  const queryStartDate = searchParams.get('startDate');
  const queryEndDate = searchParams.get('endDate');

  const now = new Date();

  useEffect(() => {
    if (queryStatuses) {
      setStatuses(queryStatuses.split(','));
    }

    if (queryStartDate) {
      setStartDate(queryStartDate);
    }

    if (queryEndDate) {
      setEndDate(queryEndDate);
    }
  }, []);

  const hasFilter = useMemo(
    () => queryStatuses || queryStartDate || queryEndDate,
    [queryStatuses, queryStartDate, queryEndDate],
  );

  const handleChange = (event: SelectChangeEvent<typeof statuses>) => {
    const {
      target: { value },
    } = event;

    setStatuses(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    // Get all field values and set it query params
    event?.preventDefault();

    const query: Record<string, string> = {};

    if (statuses) query.statuses = statuses.join(',');
    if (startDate) query.startDate = startDate as string;
    if (endDate) query.endDate = endDate as string;

    if (
      startDate &&
      endDate &&
      new Date(startDate as string) > new Date(endDate as string)
    ) {
      // Swap dates if start date is after end date
      query.startDate = endDate as string;
      query.endDate = startDate as string;

      setStartDate(endDate);
      setEndDate(startDate);
    }

    const queryString = new URLSearchParams(query).toString();
    navigate.push(`${paths.accountInvoice}?${queryString}`);
  };

  const handleClear = () => {
    setStatuses([]);
    setStartDate(undefined);
    setEndDate(undefined);
    navigate.push(paths.accountInvoice);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack direction="row" flexWrap="wrap">
          <FormControl
            sx={{
              minWidth: 200,
              pb: 2,
              px: 1,
              width: { xs: '100%', sm: 'auto' },
            }}
            size="small"
          >
            <InputLabel id="invoice-status-label">Status</InputLabel>
            <Select
              labelId="invoice-status-label"
              id="invoice-status"
              onChange={handleChange}
              size="small"
              multiple
              name="statuses"
              value={statuses}
              input={<OutlinedInput label="Status" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {Object.values(SubscriptionInvoiceStatus).map((status) => (
                <MenuItem key={status} value={status}>
                  <Checkbox checked={statuses.includes(status)} />
                  <ListItemText primary={status} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Stack direction="row" flexWrap="wrap">
            <Box pb={2} px={1} sx={{ flex: { xs: 1, sm: 'initial' } }}>
              <DatePicker
                label="Start Date"
                format="yyyy-MM-dd"
                value={startDate ? new Date(startDate) : null}
                onChange={(value) =>
                  setStartDate(
                    value ? formatDate(value, 'yyyy-MM-dd') : undefined,
                  )
                }
                maxDate={endDate ? new Date(endDate) : now}
                slotProps={{
                  textField: {
                    size: 'small',
                    name: 'start-date',
                    sx: { width: { xs: '100%', sm: 160 } },
                    InputProps: {
                      endAdornment: startDate ? (
                        <IconButton
                          size="small"
                          edge="end"
                          onClick={() => setStartDate(undefined)}
                          sx={{ ml: 1 }}
                        >
                          <ClearIcon fontSize="inherit" />
                        </IconButton>
                      ) : null,
                    },
                  },
                }}
              />
            </Box>

            <Box pb={2} px={1} sx={{ flex: { xs: 1, sm: 'initial' } }}>
              <DatePicker
                label="End Date"
                format="yyyy-MM-dd"
                value={endDate ? new Date(endDate) : null}
                onChange={(value) =>
                  setEndDate(
                    value ? formatDate(value, 'yyyy-MM-dd') : undefined,
                  )
                }
                minDate={startDate ? new Date(startDate) : undefined}
                maxDate={now}
                slotProps={{
                  textField: {
                    size: 'small',
                    name: 'end-date',
                    sx: { width: { xs: '100%', sm: 160 } },
                    InputProps: {
                      endAdornment: endDate ? (
                        <IconButton
                          size="small"
                          edge="end"
                          onClick={() => setEndDate(undefined)}
                          sx={{ ml: 1 }}
                        >
                          <ClearIcon fontSize="inherit" />
                        </IconButton>
                      ) : null,
                    },
                  },
                }}
              />
            </Box>
          </Stack>

          <Stack direction="row" px={1} spacing={1}>
            <Box pb={1}>
              <Button
                type="submit"
                sx={{ minWidth: 120 }}
                variant="contained"
                disableElevation
              >
                Search
              </Button>
            </Box>
            <Box pb={1}>
              <Button
                sx={{ minWidth: 120 }}
                variant="outlined"
                disableElevation
                disabled={!hasFilter}
                color="error"
                onClick={handleClear}
              >
                Clear
              </Button>
            </Box>
          </Stack>
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}
