import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import reducers from '../reducers/index';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    reducers
  },
  middleware: [thunk, logger]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


