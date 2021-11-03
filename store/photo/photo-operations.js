import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api'

export const fetchPaginatedPhotos = createAsyncThunk(
  'photo/getPaginated',
  async ({ page, setPageAmount }, { rejectWithValue }) => {
    try {
        const { data } = await API.getAllPhotos(page);
        setPageAmount && setPageAmount(data.pages)
        return data.photos;
    } catch ({ response: { data, status }}) {
      return rejectWithValue({ data, status });
    }
  }
)

export const postPhoto = createAsyncThunk(
    'photo/post',
  async ({formData, successNotification, setPageAmount }, { rejectWithValue }) => {
    try {
      await API.postPhoto(formData)
      successNotification()
      setPageAmount(prev => prev + 1)
    } catch ({ response: { data, status }}) {
      return rejectWithValue({ data, status });
    }
  }
)

export const deleteAllPhotos = createAsyncThunk(
    'photo/deleteAll',
  async ({ successNotification }, { rejectWithValue }) => {
    try {
      await API.deleteAllPhotos()
      successNotification()
    } catch ({ response: { data, status }}) {
      return rejectWithValue({ data, status });
    }
  }
)