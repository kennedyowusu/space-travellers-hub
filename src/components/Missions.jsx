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
  return (
    <Table striped bordered hover>
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
            <td>{id}</td>
            <td>{missionName}</td>
            <td>{description}</td>
            <td>
              {reserved ? (
                <Badge variant="primary">Active Member</Badge>
              ) : (
                <Badge variant="secondary">NOT A MEMBER</Badge>
              )}
            </td>
            <td>
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
            <td />
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
};
export default MissionsTable;
