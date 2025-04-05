/**
 * @module RtkApiTypes
 * @category Types
 *
 */

export type ValueOf<T> = T[keyof T];

export type ApiSuccessResponse = {
  success: boolean;
  message: string;
};

export type ApiErrorResponse = {
  success: boolean;
  message: string;
  status?: string | number;
  errors: Record<string, string[]> | null;
};

export type AxiosErrorResponse = {
  code: string;
  status?: string | number;
  message: string;
  data?: ApiErrorResponse;
};

export type StringArray<T> = {
  [K in keyof T]: T[K] extends object ? StringArray<T[K]> : string[];
};

export type ListResponse<T> = {
  items: T;
  total: number;
  page: number;
  perPage: number;
  lastPage: number;
};

export type FilterParams = {
  searchText?: string;
  page: number;
  perPage: number;
  lastPage?: number;
  onChangeSearchText?: (text?: string) => void;
  // onPaginationChange?: OnChangeFn<PaginationState>;
};
