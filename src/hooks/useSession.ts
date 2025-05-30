/**
 * @module useAppDispatch
 * @category Hooks
 *
 */

import {
  SessionContextValue,
  useSession as useSessionNextAuth,
} from 'next-auth/react';

import { LoginDataResponse } from '@/types/login';
import { Session } from 'next-auth';

export type ExtendedSessionContextValue = Omit<SessionContextValue, 'data'> & {
  data: (Session & { fuze: LoginDataResponse }) | null;
};

const useSession = () => {
  const { data, ...rest } = useSessionNextAuth();
  return { ...rest, data } as ExtendedSessionContextValue;
};

export default useSession;
