import { configureStore } from '@reduxjs/toolkit';
import spaceReducer from './space/spaceSlice';
import rocketSlice from './Rockets/rockets';

const store = configureStore({
  reducer: {
    space: spaceReducer,
    rockets: rocketSlice,
  },
});

export default store;
