// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { Table, Badge, Button } from 'react-bootstrap';

// const MissionsTable = ({ missions, joinMission, leaveMission }) => {
//   const [missionMembers, setMissionMembers] = useState(missions.map((mission)
//  => mission.reserved));
//   const dispatch = useDispatch();

//   const handleJoinMission = (missionIndex) => {
//     setMissionMembers((prevMembers) => {
//       const newMembers = [...prevMembers];
//       newMembers[missionIndex] = true;
//       return newMembers;
//     });
//     dispatch(joinMission(missions[missionIndex].mission_id));
//   };

//   const handleLeaveMission = (missionIndex) => {
//     setMissionMembers((prevMembers) => {
//       const newMembers = [...prevMembers];
//       newMembers[missionIndex] = false;
//       return newMembers;
//     });
//     dispatch(leaveMission(missions[missionIndex].mission_id));
//   };

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Mission ID</th>
//           <th>Mission Name</th>
//           <th>Description</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {missions.map((mission, index) => (
//           <tr key={mission.mission_id}>
//             <td>{mission.mission_id}</td>
//             <td>{mission.mission_name}</td>
//             <td>{mission.description}</td>
//             <td>
//               {missionMembers[index] ? (
//                 <Badge variant="primary">Active Member</Badge>
//               ) : (
//                 <Badge variant="secondary">NOT A MEMBER</Badge>
//               )}
//             </td>
//             <td>

//               {missionMembers[index] ? (
//                 <Button variant="outline-danger" onClick={() => handleLeaveMission(index)}>
//                   Leave Mission
//                 </Button>
//               ) : (
//                 <Button variant="outline-secondary" onClick={() => handleJoinMission(index)}>
//                   Join Mission
//                 </Button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// MissionsTable.propTypes = {
//   missions: PropTypes.arrayOf(PropTypes.shape({
//     mission_id: PropTypes.string,
//     mission_name: PropTypes.string,
//     description: PropTypes.string,
//     reserved: PropTypes.bool,
//   })).isRequired,
//   joinMission: PropTypes.func.isRequired,
//   leaveMission: PropTypes.func.isRequired,
// };

// export default MissionsTable;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Table, Badge, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import { joinMission, leaveMission } from '../redux/missions/missions';

// const Missions = ({ missions, reserved }) => {
//   const dispatch = useDispatch();

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Mission ID</th>
//           <th>Mission Name</th>
//           <th>Description</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {missions.map((mission, id) => (
//           <tr key={mission.mission_id}>
//             <td>{mission.mission_id}</td>
//             <td>{mission.mission_name}</td>
//             <td>{mission.description}</td>
//             <td>
//               {reserved ? (
//                 <Badge variant="primary">Active Member</Badge>
//               ) : (
//                 <Badge variant="secondary">NOT A MEMBER</Badge>
//               )}
//             </td>
//             <td>

//               {reserved ? (
//                 <Button variant="outline-danger" onClick={() => dispatch(leaveMission(id))}>
//                   Leave Mission
//                 </Button>
//               ) : (
//                 <Button variant="outline-secondary" onClick={() => dispatch(joinMission(id))}>
//                   Join Mission
//                 </Button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// Missions.propTypes = {
//   missions: PropTypes.arrayOf(PropTypes.shape({
//     mission_id: PropTypes.string,
//     mission_name: PropTypes.string,
//     description: PropTypes.string,
//   })).isRequired,
//   reserved: PropTypes.bool.isRequired,
// };

// export default Missions;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Table, Badge, Button } from 'react-bootstrap';
import {
  joinMission,
  leaveMission,
} from '../redux/missions/missions';

const MissionsTable = ({
  missionName, id, description, reserved,
}) => {
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
      </tbody>
    </Table>
  );
};

MissionsTable.propTypes = {
  missionName: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default MissionsTable;
