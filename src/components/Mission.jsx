import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Table, Badge, Button } from 'react-bootstrap';
import {
  joinMission,
  leaveMission,
} from '../redux/missions/missions';

const MissionsTable = ({ missions }) => {
  const dispatch = useDispatch();

  let missionData = <p>Loading...</p>;
  if (
    missions
    && missions.length > 0
  ) {
    missionData = (
      <Table striped bordered>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            missionName,
            id,
            description,
            reserved,
          }) => (
            <tr key={id}>
              <td>{missionName}</td>
              <td>{description}</td>
              <td className="col-md-1 text-center" style={{ verticalAlign: 'middle' }}>
                {reserved ? (
                  <Badge bg="info">Active Member</Badge>
                ) : (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                )}
              </td>
              <td className="col-lg-2 text-center" style={{ verticalAlign: 'middle' }}>
                {reserved ? (
                  <Button variant="outline-danger" onClick={() => dispatch(leaveMission(id))}>
                    Leave Mission
                    {' '}
                  </Button>
                ) : (
                  <Button
                    variant="outline-secondary"
                    onClick={() => dispatch(joinMission(id))}
                  >
                    Join Mission
                    {' '}
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  return missionData;
};

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  })).isRequired,
};

export default MissionsTable;
