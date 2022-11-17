import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/styles/rocket.module.css';
import { reserve, unreserve, fetchRockets } from '../redux/space/rocketSlice';
import Spinner from '../components/Spinner';

let fetch = true;
const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetch) {
      dispatch(fetchRockets());
      fetch = false;
    }
  });

  const { rockets, loading } = useSelector((state) => ({ ...state.rockets }));

  if (loading === 'Loading Api') {
    return <Spinner />;
  }

  return (
    rockets?.map((rocket) => (
      <div key={rocket.id} className={styles.grid}>
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
        <div>
          <h3>{rocket.rocket_name}</h3>
          <p>
            {rocket.reserved && (<span>Reserved  </span>)}
            {rocket.description}
          </p>
          {!rocket.reserved && (
            <button type="button" onClick={() => dispatch(reserve(rocket.id))}>Reserve Rocket</button>
          )}
          {rocket.reserved && (
            <button type="button" onClick={() => dispatch(unreserve(rocket.id))} className={styles.unreserve}>Uneserve Rocket</button>
          )}
        </div>
      </div>
    ))
  );
};

export default Rockets;
