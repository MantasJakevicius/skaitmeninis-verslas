import { combineReducers } from 'redux';
import Information from './information';

const rootReducer = combineReducers({
  design: Information
});

export default rootReducer;
