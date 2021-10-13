

import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './header/header-reducer';
import descriptionReducer from './description/description-reducer';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    description: descriptionReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});