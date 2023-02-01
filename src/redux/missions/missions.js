import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    if (response.status !== 200) {
      throw new Error('Failed to fetch missions');
    }
    const missions = response.data.map((mission) => ({
      id: mission.mission_id,
      missionName: mission.mission_name,
      description: mission.description,
    }));
    return missions;
  },
);

const initialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find((m) => m.id === action.payload);
      mission.reserved = true;
    },

    leaveMission: (state, action) => {
      const mission = state.missions.find((m) => m.id === action.payload);
      mission.reserved = false;
    },

    activeMember: (state, action) => {
      const members = state.missions.find(
        (member) => member.id === action.payload,
      );
      members.reserved = true;
    },

    notActiveMember: (state, action) => {
      const members = state.missions.find(
        (member) => member.id === action.payload,
      );
      members.reserved = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, { payload }) => ({
      ...state,
      missions: [...payload],
    }));
  },
});

export const {
  joinMission, leaveMission, activeMember, notActiveMember,
} = missionsSlice.actions;

export const selectMission = (state) => state.missions.missions;

export default missionsSlice.reducer;
