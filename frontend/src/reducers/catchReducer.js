import { FETCH_CATCHES, NEW_CATCH, FETCH_ALL_CATCHES } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATCHES:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_ALL_CATCHES:
      return {
        ...state,
        items: action.payload,
      };

    case NEW_CATCH:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
