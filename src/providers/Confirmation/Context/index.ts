/**
 * @module ConfirmationContext
 * @category Contexts
 *
 */

import { createContext, useContext } from 'react';

import type { IConfirmationContext } from '@/providers/Confirmation/types';

export const ConfirmationContext = createContext<IConfirmationContext>({
  showConfirmation: async () =>
    new Promise<boolean>((resolve) => resolve(false)),
});

export const useConfirmationContext = () => useContext(ConfirmationContext);

export default ConfirmationContext;
