import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Spinner from '../components/Spinner';

const Profile = () => {
  const { missions, isLoading } = useSelector((state) => ({ ...state.space }));

  const joinedMission = missions.filter((mission) => mission.joined === true);

  console.log(joinedMission);

  if (isLoading === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="d-flex gap-3">
      <Table>
        <thead>
          <tr>
            <th>My missions</th>
          </tr>
        </thead>
        <tbody>
          {
            joinedMission && joinedMission.map((mission) => (
              <tr key={mission.mission_id}>
                <td>
                  {mission.mission_name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <th>Rockets</th>
          </tr>
        </thead>
        <tbody>
          {
            joinedMission && joinedMission.map((mission) => (
              <tr key={mission.mission_id}>
                <td>
                  {mission.mission_name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
