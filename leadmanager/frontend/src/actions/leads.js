import axios from 'axios';

import { GET_LEADS } from './types';

export const getLeads = async () => dispatch => {
  try {
    const res = await axios.get('/api/leads');
    dispatch({
      type: GET_LEADS,
      payload: res.data
    });
  } catch(err) {
    console.log(err);
  };
};