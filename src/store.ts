import { createStore, combineReducers } from 'redux';
import { accountReducer } from 'reducer/account';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  account: accountReducer,
});

const store = createStore(rootReducer);
export default store;
