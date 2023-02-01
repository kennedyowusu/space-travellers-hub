export const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
export const FETCH_MISSIONS_ERROR = 'FETCH_MISSIONS_ERROR';
export const JOIN_MISSION = 'JOIN_MISSION';
export const LEAVE_MISSION = 'LEAVE_MISSION';

export const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  missions,
});

export const fetchMissionsError = (error) => ({
  type: FETCH_MISSIONS_ERROR,
  error,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const fetchMissions = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchMissionsSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchMissionsError(error));
    });
};

const initialState = {
  missions: [],
  error: null,
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS_SUCCESS:
      return {
        ...state,
        missions: action.missions,
        error: null,
      };
    case FETCH_MISSIONS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missionsReducer;

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchMissions = createAsyncThunk('MISSIONS/FETCHMISSIONS', async () => {
//   const response = await axios.get('https://api.spacexdata.com/v3/missions');
//   if (response.status !== 200) {
//     throw new Error('Failed to fetch missions');
//   }
//   const missions = response.data.map((mission) => ({
//     id: mission.mission_id,
//     missionName: mission.mission_name,
//     description: mission.description,
//   }));
//   return missions;
// });

// const initialState = {
//   missions: [],
// };

// const missionSlice = createSlice({
//   name: 'missions',
//   initialState,
//   reducers: {
//     reserveMission: (state, action) => {
//       const mission = state.missions.find((m) => m.mission_id === action.payload);
//       mission.reserved = true;
//     },
//     cancelMission: (state, action) => {
//       const mission = state.missions.find((m) => m.mission_id === action.payload);
//       mission.reserved = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchMissions.fulfilled, (state, { payload }) => ({
//       ...state,
//       missions: [...payload],
//     }));
//   },
// });

// export const { reserveMission, cancelMission } = missionSlice.actions;

// export default missionSlice.reducer;
