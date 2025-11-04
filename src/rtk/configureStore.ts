/**
 * Setup reducer
 *
 * @module ConfigureStore
 * @category Utils
 *
 */

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '@/rtk/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();
    return middleware;
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export { store };
