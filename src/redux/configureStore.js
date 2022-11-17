import { configureStore } from '@reduxjs/toolkit';
import spaceReducer from './space/spaceSlice';
import rocketSlice from './space/rocketSlice';

const store = configureStore({
  reducer: {
    space: spaceReducer,
    rockets: rocketSlice,
  },
});

export default store;
