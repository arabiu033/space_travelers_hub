import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../redux/space/spaceSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const { missions, isLoading } = useSelector((state) => ({ ...state.space }));
  console.log('Missions: ', missions);
  if (isLoading === 'loading') {
    return <div className="loading">Loading ...</div>;
  }

  const join = (id) => {
    dispatch(joinMission(id));
  };

  const leave = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join/Leave</th>
        </tr>
      </thead>
      <tbody>
        {
          missions && missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="member">
                {mission.joined && (
                <p className="active-member">Active Member</p>
                )}
                {!mission.joined && (
                <p className="not-member">NOT A MEMBER</p>
                )}
              </td>
              <td className="btn">
                {mission.joined && (
                <button className="leave" type="button" onClick={() => leave(mission.mission_id)}>Leave Mission</button>
                )}
                {!mission.joined && (
                <button className="join" type="button" onClick={() => join(mission.mission_id)}>Join Mission</button>
                )}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default Missions;
