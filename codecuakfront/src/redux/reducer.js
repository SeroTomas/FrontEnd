import { GET_POST,ADD_POST } from "./action";
const initialState = {
  post: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
