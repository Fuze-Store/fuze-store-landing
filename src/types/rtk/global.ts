/**
 * @module GlobalTypes
 * @category Types
 *
 */

import { ValueOf } from '@/types';

export type GlobalLoading = {
  show: boolean;
  message: string;
};
export interface IGlobalState {
  keyboardHeight: number;
  loading: GlobalLoading;
  showSessionExpiredPrompt: boolean;
}

export type PayloadUpdateGlobalFields = {
  key: keyof IGlobalState;
  value: Partial<ValueOf<IGlobalState>>;
};

export type PayloadResetGlobalFields = [keyof IGlobalState] | undefined;
