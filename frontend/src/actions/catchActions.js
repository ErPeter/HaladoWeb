import { FETCH_CATCHES, NEW_CATCH } from "./types";

export const fetchCatches = () => (dispatch) => {
  fetch("http://localhost:3001/catches?id=101")
    .then((res) => res.json())
    .then((catches) =>
      dispatch({
        type: FETCH_CATCHES,
        payload: catches,
      })
    );
};

export const createCatch = (catchData) => (dispatch) => {
  fetch("http://localhost:3001/catches?id=101", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(catchData),
  })
    .then((res) => res.json())
    .then((newCatch) =>
      dispatch({
        type: NEW_CATCH,
        payload: newCatch,
      })
    );
};
