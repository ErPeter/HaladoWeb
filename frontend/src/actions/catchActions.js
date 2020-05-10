import { FETCH_CATCHES, NEW_CATCH } from './types';

export const fetchCatches = () => (dispatch) => {
  fetch('http://localhost:3001/catches?id=101')
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
