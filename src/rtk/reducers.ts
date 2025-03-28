/**
 * Application reducers
 * Combine all reducers in this file and export the combined reducers.
 *
 * @module Reducer
 * @category Utils
 *
 */

import { combineReducers } from '@reduxjs/toolkit';

import GlobalReducer, { KEY as KEY_GLOBAL } from '@/rtk/global/slice';

export const AppReducer = combineReducers({
  [KEY_GLOBAL]: GlobalReducer,
});

export type RootState = ReturnType<typeof AppReducer>;
export default AppReducer;
