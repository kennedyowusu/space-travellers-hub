import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, selectMission } from '../redux/missions/missions';
import MissionsTable from '../components/Missions';

export default function Books() {
  const missionData = useSelector(selectMission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionData.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionData]);

  return (
    <div>
      <MissionsTable missions={missionData} />
    </div>
  );
}
