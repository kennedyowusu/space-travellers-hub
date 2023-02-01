export const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
export const FETCH_MISSIONS_ERROR = 'FETCH_MISSIONS_ERROR';

export const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  missions,
});

export const fetchMissionsError = (error) => ({
  type: FETCH_MISSIONS_ERROR,
  error,
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
    default:
      return state;
  }
};

export default missionsReducer;
