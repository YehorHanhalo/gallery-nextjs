import { createReducer , combineReducers} from '@reduxjs/toolkit';
import * as operations from './photo-operations'

const { fetchPaginatedPhotos, postPhoto, deleteAllPhotos } = operations

/* ---------------Title_REDUCER---------------------- */
const initialState = []
const photos = createReducer(initialState, {
    [fetchPaginatedPhotos.fulfilled]: (_, { payload }) => payload,
    [postPhoto.fulfilled]: (state) => state,
    [deleteAllPhotos.fulfilled]: () => initialState,
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
  photos,
  loading,
  error,
});
