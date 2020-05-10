import { FETCH_CATCHES, NEW_CATCH } from './types';
import axios from 'axios';

export const fetchCatches = () => dispatch => {
  //HA VALAMI ELBASZÓDIK EZT NÉZD MEG ELŐSZÖR!!!!
    axios.get('http://localhost:3001/catches?id=101')
      .then((catches) =>
        dispatch({
          type: FETCH_CATCHES,
          payload: catches
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };
