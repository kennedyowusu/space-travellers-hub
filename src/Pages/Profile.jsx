import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <h1>My Profile</h1>
      <div className="profile">
        <div className="join">
          <h2>My Missions</h2>
          <ul>
            {reservedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.missionName}</li>
            ))}
          </ul>
        </div>
        <div className="reserve">
          <h2>My Rockets</h2>
          <ul>
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.rocketName}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
