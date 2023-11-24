'use client';

/**
 * @module AppContext
 * @category Contexts
 *
 */

import { Dispatch, SetStateAction, createContext } from 'react';

export interface IAppContext {
  showDrawer: boolean;
  setShowDrawer: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContext>({
  showDrawer: false,
  setShowDrawer: () => {},
});
