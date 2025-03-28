/**
 * Setup reducer
 *
 * @module ConfigureStore
 * @category Utils
 *
 */

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootReducer from '@/rtk/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();
    return middleware;
  },
  devTools: process.env.NODE_ENV === 'development',
});

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./reducers', () => store.replaceReducer(persistedReducer));
// }
/**
 * @see https://redux-toolkit.js.org/rtk-query/api/setupListeners
 *
 */
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export { store };
