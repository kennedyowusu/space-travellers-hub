import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

// Action
const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (post, { dispatch }) => {
    const response = await fetch(URL);
    const data = await response.json();
    const missions = Object.keys(data).map((id) => ({
      mission_id: id,
      mission_name: data[id][0].mission_name,
      description: data[id][0].description,
    }));
    dispatch({
      type: FETCH_MISSIONS,
      payload: missions,
    });
    return missions;
  },
);

const initialState = {
  missions: [],
};

const missionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMissions.fulfilled, (state, action) => ({
    ...state, missions: action.payload,
  }));
});
export default missionsReducer;
