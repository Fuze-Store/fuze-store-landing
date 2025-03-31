/**
 * List of confirmation provider types
 *
 * @module ProviderConfirmationTypes
 * @category Types
 *
 */

import type { DialogConfirmationProps } from '@/components/DialogConfirmation/types';
import type { ReactNode } from 'react';

export interface IConfirmationContext {
  showConfirmation: (
    props?: Omit<DialogConfirmationProps, 'open'>,
  ) => Promise<boolean>;
}

export type ConfirmationProviderProps = Omit<
  DialogConfirmationProps,
  'open'
> & {
  children: ReactNode;
};

export type PromiseInfo = {
  resolve: (value: boolean | PromiseLike<boolean>) => void;
};
