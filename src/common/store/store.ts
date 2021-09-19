import { createStore, combineReducers } from 'redux';
import { authReducer } from 'reducers/auth';
import { modalReducer } from 'reducers/modal';

const rootReducer = combineReducers({
  authReducer,
  modalReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
