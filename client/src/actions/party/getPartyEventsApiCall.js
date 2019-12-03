import axios from 'axios';

import {
  attemptGetPartyEventsSuccessfully,
  attemptGetPartyEventsFailed
} from './attemptGetPartyEventsAction';

import { HOST, PARTY_URI } from '../../constant';

// Register
export const attemptGetPartyEvents = partyData => dispatch => {
  axios
    .get(`${HOST}${PARTY_URI}`, partyData)
    .then(res => {
      console.log('attempt get events callAPI');
      console.log(res.data);
      const payload = dispatch(attemptGetPartyEventsSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetPartyEventsFailed(err));
    });
};