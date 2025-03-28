/**
 * @module GlobalSlice
 * @category RTK Reducers
 *
 */

import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/rtk/reducers';
import {
  IGlobalState,
  PayloadResetGlobalFields,
  PayloadUpdateGlobalFields,
} from '@/types/rtk/global';
import type { PayloadAction } from '@reduxjs/toolkit';

export const KEY = 'Global';

export const initialState: IGlobalState = {
  keyboardHeight: 0,
  loading: { show: false, message: '' },
  showSessionExpiredPrompt: false,
};

const globalSlice = createSlice({
  name: KEY,
  initialState,
  reducers: {
    updateGlobalFields: (
      state: IGlobalState,
      action: PayloadAction<PayloadUpdateGlobalFields>,
    ) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),
    resetGlobalFields: (
      state: IGlobalState,
      action: PayloadAction<PayloadResetGlobalFields | undefined>,
    ) => {
      if (action?.payload && action.payload.length > 0) {
        const newState = {} as Partial<IGlobalState>;
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

export const { updateGlobalFields, resetGlobalFields } = globalSlice.actions;
export const selectGlobalState = (state: RootState) => state[KEY];
export const { reducer } = globalSlice;
export default globalSlice.reducer;
