import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { searchApi } from './graph/api';
import { userApi } from './user/api';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [searchApi.reducerPath]: searchApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(searchApi.middleware)
      .concat(userApi.middleware),
});
export type Store = ReturnType<typeof store.getState>;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
