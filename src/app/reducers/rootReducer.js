import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReduces';

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
