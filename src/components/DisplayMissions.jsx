import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import MissionsTable from './Missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      {missions ? (
        <MissionsTable missions={missions} />
      ) : (
        <p>Loading missions...</p>
      )}
    </>
  );
};

export default Missions;
