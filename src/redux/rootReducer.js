import { combineReducers } from 'redux';
import taskReducer from './reducers';

// Combine reducers in case you add more later
const rootReducer = combineReducers({
  task: taskReducer // For now, we only have the task reducer
});

export default rootReducer;
