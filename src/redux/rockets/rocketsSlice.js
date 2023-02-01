import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    if (response.status !== 200) {
      throw new Error('Failed to fetch rockets');
    }
    const rockets = response.data.map((rocket) => ({
      id: rocket.rocket_id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      images: rocket.flickr_images,
    }));
    return rockets;
  },
);

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find((r) => r.id === action.payload);
      rocket.reserved = true;
    },

    cancelRocket: (state, action) => {
      const rocket = state.rockets.find((r) => r.id === action.payload);
      rocket.reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, { payload }) => ({
      ...state,
      rockets: [...payload],
    }));
  },
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
