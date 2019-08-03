import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';
import { createReducer } from '../../app/common/Util/reducerUtils';

const intitialState = {
  data: 42
};

const incrementCounter = state => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = state => {
  return { ...state, data: state.data - 1 };
};

export default createReducer(intitialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});

// const testReducer = (state = intitialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };

//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };

//     default:
//       return state;
//   }
// };
