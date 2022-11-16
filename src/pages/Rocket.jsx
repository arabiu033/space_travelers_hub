import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/Rockets/rockets';
import styles from '../assets/styles/rocket.module.css';

let fetch = true;
const Rockets = () => {
  console.log('fetched: ', fetch);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetch) {
      dispatch(fetchRockets());
      fetch = false;
    }
  }, [dispatch]);

  const { rockets } = useSelector((state) => ({ ...state.rockets }));
  return (
    rockets.map((rocket) => (
      <div key={rocket.id} className={styles.grid}>
        <img src={rocket.flickr_images[0]} alt="rocket" />
        <div>
          <h3>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    ))
  );
};

export default Rockets;
