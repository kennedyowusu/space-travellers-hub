import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const MissionsTable = ({ missions }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Mission ID</th>
        <th>Mission Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td>{mission.mission_id}</td>
          <td>{mission.mission_name}</td>
          <td>{mission.description}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default MissionsTable;
