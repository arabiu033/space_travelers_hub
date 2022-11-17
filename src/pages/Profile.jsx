import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Spinner from '../components/Spinner';

const Profile = () => {
  const { missions, isLoading } = useSelector((state) => ({ ...state.space }));
  const joinedMission = missions.filter((mission) => mission.joined === true);

  const { rockets } = useSelector((state) => ({ ...state.rockets }));
  const reserves = rockets.filter((roc) => roc.reserved);

  if (isLoading === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="mx-auto d-flex gap-5 align-items-start" style={{ width: '70%' }}>
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
            reserves && reserves.map((reserve) => (
              <tr key={reserve.id}>
                <td>
                  {reserve.rocket_name}
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
