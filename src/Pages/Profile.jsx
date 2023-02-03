import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <div className="profile-page">
        <div className="join">
          <h2 className="mission-title">My Missions</h2>
          <ul className="mission-list">
            {reservedMissions.map((mission) => (
              <li className="list-items" key={mission.mission_id}>
                {mission.missionName}
              </li>
            ))}
          </ul>
        </div>
        <div className="join">
          <h2 className="rocket-title">My Rockets</h2>
          <ul className="rocket-list">
            {reservedRockets.map((rocket) => (
              <li className="list-items" key={rocket.id}>
                {rocket.rocketName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
