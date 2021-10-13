import { createReducer , combineReducers} from '@reduxjs/toolkit';
import { editHeader } from './header-actions'

/* ---------------EDIT_Header_REDUCER---------------------- */
const initialState = 'Photo Gallery'
const edit = createReducer(initialState, {
   [editHeader]: (_, { payload }) => payload,
})

export default combineReducers({ edit });
