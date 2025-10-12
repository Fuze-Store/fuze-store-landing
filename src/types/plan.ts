import { ApiSuccessResponse } from '@/types';
import { Plan } from '@fuze-store/fuze-store-shared';

export type PlanResponse = ApiSuccessResponse & {
  data: Plan[];
};
