import {
  GET_ALL_POST,
  GET_BYID_POST,
  POST_POST,
  PUT_POST,
  DELETE_POST,
  POST_COMMENT,
  PUT_COMMENT,
  DELETE_DESTROY_COMMENT,
  DELETE_LOGIC_COMMENT,
  GET_ALL_USER,
  GET_BYID_USER,
} from "./action";
const initialState = {
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload.reverse(),
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
