import { combineReducers } from 'redux'

import Projects from './reducer_projects'

const rootReducer = combineReducers({
  projects: Projects,
});

export default rootReducer;
