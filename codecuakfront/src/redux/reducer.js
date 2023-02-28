import {
  GET_ALL_POST,
  GET_POST_BY_ID,
  PUT_POST,
  DELETE_POST,
  CLEAN_POST,
  POST_COMMENT,
  PUT_COMMENT,
  DELETE_DESTROY_COMMENT,
  DELETE_LOGIC_COMMENT,
  GET_ALL_USER,
  GET_BYID_USER,
  GET_USERS_NAME,
  GET_USERS_ALPHA,
  GET_BYID_USER_DETAIL,
  GET_ALL_USER_ADMIN,
  GET_POSTS_BY_USER_ID,
} from "./action";

const initialState = {
  alluser: [],
  userData: {},
  userDetail: {},
  users: [],
  posts: {
    name: "",
    image: "",
    next: "",
    arrayPosts: []
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POST:
      if (payload.previus) {
        const { arrayPosts } = state.posts;
        const newPosts = arrayPosts.concat(payload.results.socialposts ? payload.results.socialposts : payload.results)
        return {
          ...state,
          posts: {
            name: payload.results.name,
            image: payload.results.image,
            next: payload.next,
            arrayPosts: newPosts
          }
        }
      }
      return {
        ...state,
        posts: {
          name: payload.results.name,
          image: payload.results.image,
          next: payload.next,
          arrayPosts: payload.results.socialposts ? payload.results.socialposts : payload.results,
        }
      }
    case GET_POST_BY_ID:
      return {
        ...state,
        posts: payload,
      };
    case GET_POSTS_BY_USER_ID:
      return {
        ...state,
        posts: payload,
      }
    case GET_ALL_USER:
      return {
        ...state,
        users: payload,

      };
    case GET_BYID_USER:
      return {
        ...state,
        userData: payload,
      };
    case GET_BYID_USER_DETAIL:
      return {
        ...state,
        userDetail: payload,
      };
    case GET_USERS_NAME:
      return {
        ...state,
        users: payload
      }
    case GET_USERS_ALPHA:
      return {
        ...state,
        users: payload
      }
    case CLEAN_POST:
      return {
        ...state,
        posts: { next: "", arrayPosts: [] },
      };
    case GET_ALL_USER_ADMIN:
      return {
        ...state,
        alluser: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;