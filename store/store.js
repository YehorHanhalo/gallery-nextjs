import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import titleReducer from './title/title-reducer';
import descriptionReducer from './description/description-reducer';
import photoReducer from './photo/photo-reducer';

const rootReducer = combineReducers({
    title: titleReducer,
    description: descriptionReducer,
    photo: photoReducer,
  })

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = { ...state, ...action.payload }
      if (state.count) {
        nextState.count = state.count
      }
      return nextState
    } else {
      return rootReducer(state, action)
    }
}

const makeStore = () => configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development'
});

export const wrapper = createWrapper(makeStore, {debug: true});