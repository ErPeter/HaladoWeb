import { FETCH_CATCHES, NEW_CATCH, FETCH_ALL_CATCHES } from './types';

export const fetchAllCatches = () => (dispatch) => {
  fetch('http://localhost:3001/catches')
    .then((res) => res.json())
    .then((catches) =>
      dispatch({
        type: FETCH_ALL_CATCHES,
        payload: catches,
      })
    )
    .catch(err => console.log(err))
};

export const fetchCatches = () => (dispatch) => {
  fetch('http://localhost:3001/catches?uid=101')
    .then((res) => res.json())
    .then((catches) =>
      dispatch({
        type: FETCH_CATCHES,
        payload: catches,
      })
    )
    .catch(err => console.log(err))
};

export const createCatch = newCatch => dispatch => {
  fetch('http://localhost:3001/catches', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newCatch)
  })
    .then(res => res.json())
    .then(catchToAdd =>
      dispatch({
        type: NEW_CATCH,
        payload: catchToAdd
      })
    )
    .catch(err => console.log(err))
};