import { GET_LEADS } from '../actions/types';

const INITIAL_STATE = {
  leads: []
};

export default function(state = INITIAL_STATE, action ) {
  switch(action.type) {
    case GET_LEADS:
      return { ...state, leads: action.payload };
    default:
      return state;
  };
};