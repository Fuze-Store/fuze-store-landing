import { ApiSuccessResponse } from '@/types';
import { Subscription } from '@fuze-store/fuze-store-shared';

export type SubcriptionResponse = ApiSuccessResponse & {
  data: Subscription;
};
