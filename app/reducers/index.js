import clone        from 'clone';
import assign       from 'object-assign';
import {
  TOGGLE_COLOR,
  TOGGLE_GIF,
  SECRET_CODE,
} from '../constants/Constants';


const initialState = {
  color: 'red',
  data: {
    loading: false,
    objects: [],
  },
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_COLOR:
    return assign({}, state, {
      color: state.color === 'red' ? 'blue' : 'red',
    });

  case TOGGLE_GIF:
    return assign({}, state, {
      gifUrl: action.data,
  });

  case SECRET_CODE:
    return assign({}, state, {
      code: action.code,
  });

  default:
    return state;
  }
}
