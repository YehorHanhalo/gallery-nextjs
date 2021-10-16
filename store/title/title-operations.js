import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api'

export const fetchTitle = createAsyncThunk(
  'title/get',
  async (_, { rejectWithValue }) => {
    try {
        const { data } = await API.getTitle();
        return data.title;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
)

export const postTitle = createAsyncThunk(
    'title/post',
  async (title, { rejectWithValue }) => {
    try {
      const {data} = await API.postTitle(title)
      return data.title;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
)