import { createReducer , combineReducers} from '@reduxjs/toolkit';
import { editDescription } from './description-actions'

/* ---------------EDIT_Header_REDUCER---------------------- */
const initialState = 'A selection of the latest photos from our restaurant and some of our favorite dishes'
const edit = createReducer(initialState, {
   [editDescription]: (_, { payload }) => payload,
})

export default combineReducers({ edit });
