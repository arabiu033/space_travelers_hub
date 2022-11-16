import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/space/spaceSlice';

let fetch = true;

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetch) {
      dispatch(getMissions());
      fetch = false;
    }
  }, [dispatch]);

  const { missions, isLoading } = useSelector((state) => ({ ...state.space }));
  // console.log('Missions: ', missions);
  if (isLoading === 'loading') {
    return <div className="loading">Loading ...</div>;
  }

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
              <td><span className="member">Not a member</span></td>
              <td><button className="join-btn" type="button">Join Mission</button></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default Missions;
