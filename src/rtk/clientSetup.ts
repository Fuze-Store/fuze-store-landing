'use client';

import { setupListeners } from '@reduxjs/toolkit/query';
import { store } from './configureStore';

if (typeof window !== 'undefined') {
  setupListeners(store.dispatch);
}
