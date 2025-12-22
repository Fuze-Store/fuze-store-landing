/**
 * @module RtkApiTypes
 * @category Types
 *
 */
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

export type ValueOf<T> = T[keyof T];

export type AxiosErrorResponse = {
  code: string;
  status?: string | number;
  message: string;
  data?: ApiErrorResponse;
};

export type StringArray<T> = {
  [K in keyof T]: T[K] extends object ? StringArray<T[K]> : string[];
};

export type FilterParams = {
  searchText?: string;
  page: number;
  perPage: number;
  lastPage?: number;
  onChangeSearchText?: () => void;
};
