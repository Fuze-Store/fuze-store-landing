/**
 * @module AccountSlice
 * @category RTK Reducers
 *
 */

import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/rtk/reducers';
import type {
  PayloadResetAccountFields,
  PayloadUpdateAccountFields,
  RTKAccountState,
} from '@/types/account';
import type { PayloadAction } from '@reduxjs/toolkit';

export const KEY = 'Account';

export const initialState: RTKAccountState = {
  emailResendDate: { unix: null },
};

const accountSlice = createSlice({
  name: KEY,
  initialState,
  reducers: {
    updateAccountFields: (
      state: RTKAccountState,
      action: PayloadAction<PayloadUpdateAccountFields>,
    ) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),
    resetAccountFields: (
      state: RTKAccountState,
      action: PayloadAction<PayloadResetAccountFields>,
    ) => {
      if (action?.payload && action.payload.length > 0) {
        const newState = {} as Partial<RTKAccountState>;
        action.payload.forEach((field) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          newState[field] = initialState[field];
        });
        return { ...state, ...newState };
      }
      return initialState;
    },
  },
});

export const { updateAccountFields, resetAccountFields } = accountSlice.actions;

export const selectAccountState = (state: RootState) => state[KEY];

export const { reducer } = accountSlice;
export default accountSlice.reducer;
