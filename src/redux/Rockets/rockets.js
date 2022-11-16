import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRockets } from '../../api/index';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const res = await getRockets();
  return res.data;
});

const rocketSlice = createSlice({
  name: 'rocketInfo',
  initialState: {
    loading: 'init',
    rockets: [],
    status: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, loading: 'Loading Api' }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({ ...state, rockets: action.payload }))
      .addCase(fetchRockets.rejected, (state) => ({ ...state, loading: 'Failed to load Api.' }));
  },
});

export default rocketSlice.reducer;
