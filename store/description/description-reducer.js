import { createReducer , combineReducers} from '@reduxjs/toolkit';
import * as operations from './description-operations'

const { fetchDescription, postDescription } = operations

/* ---------------Description_REDUCER---------------------- */
const initialState = ''
const description = createReducer(initialState, {
   [fetchDescription.fulfilled]: (_, { payload }) => payload,
   [postDescription.fulfilled]: (_, { payload }) => payload,
});

/* ---------------LOAD_REDUCER---------------------- */
const toggleLoading = (state) => !state;
const reducerLoadingObj = Object.values(operations)
    .reduce((accObj, operation) =>
        ({ ...accObj, [operation.fulfilled]: toggleLoading, [operation.rejected]: toggleLoading, [operation.pending]: toggleLoading }), {});
const loading = createReducer(false, reducerLoadingObj);

/* ---------------ERROR_REDUCER---------------------- */
const reducerErrorObj = Object.values(operations)
    .reduce((accObj, operation) => {
        const setError = (_, { payload }) => {
            if (payload) {
                const { status, config, request, statusText } = payload;
                return `Error ${status}. Can't ${config.method} by ${request.responseURL}. ${statusText}`;
            }
            return 'Error. No connection with Server';
        };
        const resetError = () => null;
        return ({ ...accObj, [operation.rejected]: setError, [operation.pending]: resetError });
    }, {});
const error = createReducer(null, reducerErrorObj);

export default combineReducers({
  description,
  loading,
  error,
});
