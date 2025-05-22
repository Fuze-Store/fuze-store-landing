'use client';

import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPublic } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { ApiErrorResponse } from '@/types';
import { PlanResponse } from '@/types/plan';

const useGetPlanList = () =>
  useQuery<PlanResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [CACHE_TAG.PLANS],
    queryFn: async (): Promise<PlanResponse> => {
      const response = await axiosPublic.get<PlanResponse>(
        endpoints.subscriptionPlan.list,
      );
      return response.data;
    },
    throwOnError: (error) => {
      toast.error(error.response?.data.message);
      return true;
    },
  });

export default useGetPlanList;
