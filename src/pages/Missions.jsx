import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../redux/space/spaceSlice';
import Spinner from '../components/Spinner';

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

  if (isLoading === 'loading') {
    return <Spinner />;
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
                  <Badge bg="success" as="Button">Active Member</Badge>
                )}
                {!mission.joined && (
                  <Badge bg="secondary" as="Button">NOT A MEMBER</Badge>
                )}
              </td>
              <td className="btn">
                {mission.joined && (
                  <Button as="a" variant="outline-danger" onClick={() => leave(mission.mission_id)}>Leave Mission</Button>
                )}
                {!mission.joined && (
                <Button as="a" variant="outline-success" onClick={() => join(mission.mission_id)}>Join Mission</Button>
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
