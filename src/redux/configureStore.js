import { configureStore } from '@reduxjs/toolkit';
import spaceReducer from './space/spaceSlice';

const store = configureStore({
  reducer: {
    space: spaceReducer,
  },
});

export default store;
