import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api'

export const fetchPaginatedPhotos = createAsyncThunk(
  'photo/getPaginated',
  async ({ page, setPageAmount }, { rejectWithValue }) => {
    try {
        const { data } = await API.getAllPhotos(page);
        setPageAmount(data.pages)
        return data.photos;
    } catch (error) {
      return rejectWithValue(error.response);
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
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
)

export const deleteAllPhotos = createAsyncThunk(
    'photo/deleteAll',
  async ({ successNotification }, { rejectWithValue }) => {
    try {
      await API.deleteAllPhotos()
      successNotification()
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
)