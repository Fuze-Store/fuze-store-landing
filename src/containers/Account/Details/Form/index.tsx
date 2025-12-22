/**
 * @module AccountDetailsForm
 * @category Forms
 *
 */

import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormInputs } from '@/containers/Account/Details/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';
import { countries } from '@/enums/country.enum';

type Props = {
  loading?: boolean;
};

/**
 * AccountDetails Form
 *
 * @category Forms
 *
 */
const AccountDetailsForm = ({ loading = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <>
      <SectionContainer>
        <Label htmlFor="username" error={!!errors.username}>
          Username *
        </Label>
        <TextField
          type="text"
          id="username"
          required
          fullWidth
          disabled={loading}
          {...register('username')}
          error={!!errors.username}
        />
        <FieldErrorMessage name="username" errors={errors} />

        <Box mt={2}>
          <Typography component="p" variant="caption" color="textSecondary">
            * Username must be at least 6 characters.
          </Typography>
          <Typography component="p" variant="caption" color="textSecondary">
            * Username must be a lowercase.
          </Typography>
          <Typography component="p" variant="caption" color="textSecondary">
            * Username must be alphanumeric, dot, underscore only.
          </Typography>
        </Box>
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="first-name" error={!!errors.firstName}>
          First Name *
        </Label>
        <TextField
          type="text"
          id="first-name"
          required
          fullWidth
          disabled={loading}
          {...register('firstName')}
          error={!!errors.firstName}
        />
        <FieldErrorMessage name="firstName" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="last-name" error={!!errors.lastName}>
          Last Name *
        </Label>
        <TextField
          type="text"
          id="last-name"
          required
          fullWidth
          disabled={loading}
          {...register('lastName')}
          error={!!errors.lastName}
        />
        <FieldErrorMessage name="lastName" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="mobile-number" error={!!errors.mobile}>
          Mobile Number
        </Label>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Box>
            <Select
              inputProps={{
                id: 'country-code',
                ...register('mobile.countryCode'),
              }}
              error={!!errors.mobile?.countryCode}
              disabled={loading}
              defaultValue="PH"
              sx={{ width: 150 }}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.code} ({country.phone})
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ flex: 1 }}>
            <TextField
              autoComplete="tel"
              inputMode="numeric"
              fullWidth
              {...register('mobile.number')}
              disabled={loading}
              error={!!errors.mobile?.number}
            />
          </Box>
        </Stack>
        <FieldErrorMessage name="mobile.number" errors={errors} />
        <FieldErrorMessage name="mobile.countryCode" errors={errors} />
      </SectionContainer>
    </>
  );
};

export default memo(AccountDetailsForm);
