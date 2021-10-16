import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api'

export const fetchDescription = createAsyncThunk(
  'description/get',
  async (_, { rejectWithValue }) => {
    try {
        const { data } = await API.getDescription();
        return data.description;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
)

export const postDescription = createAsyncThunk(
    'description/post',
  async (description, { rejectWithValue }) => {
    try {
      const {data} = await API.postDescription(description)
      return data.description;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
)