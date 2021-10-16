

import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './title/title-reducer';
import descriptionReducer from './description/description-reducer';
import photoReducer from './photo/photo-reducer';

export const store = configureStore({
  reducer: {
    title: titleReducer,
    description: descriptionReducer,
    photo: photoReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});