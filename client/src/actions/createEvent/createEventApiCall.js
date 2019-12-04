import axios from "axios";

import {
  attemptCreateEventSuccessfully,
  attemptCreateEventFailed
} from "./attemptCreateEvent";

import { HOST, EVENT_URI } from "../../constant";

import { setTokenToLocalStorage } from "../../utils";

import { USER_ID } from "../../constant";

// Register
export const attemptCreateEvent = userData => dispatch => {
  axios
    .post(`${HOST}${EVENT_URI}`, userData)
    .then(res => {
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.insertId);

      dispatch(attemptCreateEventSuccessfully(res.data));
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      dispatch(attemptCreateEventFailed(err));
    });
};