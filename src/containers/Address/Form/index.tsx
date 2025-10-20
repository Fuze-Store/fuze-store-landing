/**
 * @module AddressForm
 * @category Forms
 *
 */

import { FormControl, Select, TextField } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { countries } from '@/enums/country.enum';

import { FormInputs } from '@/containers/Address/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';

/**
 * Address Form
 *
 * @category Forms
 *
 */
const AddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <>
      <SectionContainer>
        <Label htmlFor="street" error={!!errors.street}>
          Street *
        </Label>
        <TextField
          type="text"
          id="street"
          required
          fullWidth
          {...register('street')}
          error={!!errors.street}
        />
        <FieldErrorMessage name="street" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="neighborhood" error={!!errors.neighborhood}>
          Neighborhood *
        </Label>
        <TextField
          type="text"
          id="neighborhood"
          required
          fullWidth
          {...register('neighborhood')}
          error={!!errors.neighborhood}
        />
        <FieldErrorMessage name="neighborhood" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="city" error={!!errors.city}>
          City *
        </Label>
        <TextField
          id="city"
          required
          fullWidth
          {...register('city')}
          error={!!errors.city}
        />
        <FieldErrorMessage name="city" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="province" error={!!errors.province}>
          Province *
        </Label>
        <TextField
          type="text"
          id="province"
          required
          fullWidth
          {...register('province')}
          error={!!errors.province}
        />
        <FieldErrorMessage name="province" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="postal-code" error={!!errors.postalCode}>
          Postal Code
        </Label>
        <TextField
          type="text"
          id="postal-code"
          required
          fullWidth
          {...register('postalCode')}
          error={!!errors.postalCode}
        />
        <FieldErrorMessage name="postalCode" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <FormControl fullWidth>
          <Label id="label-country" htmlFor="country" error={!!errors.country}>
            Country *
          </Label>
          <Select
            labelId="label-country"
            id="country"
            native
            {...register('country')}
            error={!!errors.country}
            // value={age}
            // label="Age"
            // onChange={handleChange}
            // sx={{ maxHeight: 400 }}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FieldErrorMessage name="country" errors={errors} />
      </SectionContainer>
    </>
  );
};

export default memo(AddressForm);
