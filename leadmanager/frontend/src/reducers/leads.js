import { GET_LEADS, DELETE_LEAD } from '../actions/types';

const INITIAL_STATE = {
  leads: []
};

export default function(state = INITIAL_STATE, action ) {
  switch(action.type) {
    case GET_LEADS:
      return { ...state, leads: action.payload };
    case DELETE_LEAD:
      return { ...state, leads: state.leads.filter(lead => lead.id !== action.id )}
    default:
      return state;
  };
}; 