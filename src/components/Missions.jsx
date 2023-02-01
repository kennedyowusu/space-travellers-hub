import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Table, Badge, Button } from 'react-bootstrap';

const MissionsTable = ({ missions, joinMission, leaveMission }) => {
  const [missionMembers, setMissionMembers] = useState(missions.map((mission) => mission.reserved));
  const dispatch = useDispatch();

  const handleJoinMission = (missionIndex) => {
    setMissionMembers((prevMembers) => {
      const newMembers = [...prevMembers];
      newMembers[missionIndex] = true;
      return newMembers;
    });
    dispatch(joinMission(missions[missionIndex].mission_id));
  };

  const handleLeaveMission = (missionIndex) => {
    setMissionMembers((prevMembers) => {
      const newMembers = [...prevMembers];
      newMembers[missionIndex] = false;
      return newMembers;
    });
    dispatch(leaveMission(missions[missionIndex].mission_id));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission ID</th>
          <th>Mission Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission, index) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_id}</td>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              {missionMembers[index] ? (
                <Badge variant="primary">Active Member</Badge>
              ) : (
                <Badge variant="secondary">NOT A MEMBER</Badge>
              )}
            </td>
            <td>

              {missionMembers[index] ? (
                <Button variant="outline-danger" onClick={() => handleLeaveMission(index)}>
                  Leave Mission
                </Button>
              ) : (
                <Button variant="outline-secondary" onClick={() => handleJoinMission(index)}>
                  Join Mission
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  })).isRequired,
  joinMission: PropTypes.func.isRequired,
  leaveMission: PropTypes.func.isRequired,
};

export default MissionsTable;
