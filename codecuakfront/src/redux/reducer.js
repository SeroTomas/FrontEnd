import {
  GET_ALL_POST,
  GET_POST_BY_ID,
  PUT_POST,
  DELETE_POST,
  CLEAN_POST,
  POST_LIKE,
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
  CLEAN_USER_DETAIL,
  GET_COMMENTS,
} from "./action";

const initialState = {
  alluser: [],
  userData: {},
  userDetail: {},
  users: [],
  posts: {
    origin: "",
    id: "",
    name: "",
    image: "",
    count: null,
    next: "",
    arrayPosts: []
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POST:
      const { data, origin } = payload;

      if (data.previus && origin == state.posts.origin) {
        const { arrayPosts } = state.posts;
        const newPosts = arrayPosts.concat(data.results.socialposts ? data.results.socialposts : data.results)
        return {
          ...state,
          posts: {
            origin: origin,
            id: data.results.id,
            count: data.count,
            next: data.next,
            name: data.results.name,
            image: data.results.image,
            arrayPosts: newPosts
          }
        }
      }
      return {
        ...state,
        posts: {
          origin: origin,
          id: data.results.id,
          name: data.results.name,
          image: data.results.image,
          count: data.results.count,
          next: data.next,
          arrayPosts: data.results.socialposts ? data.results.socialposts : data.results,
        }
      }
    case DELETE_POST:
      const newPosts = state.posts.arrayPosts.filter(post => post.id !== payload)
      return {
        ...state,
        post: {
          origin: state.posts.origin,
          id: state.posts.id,
          name: state.posts.name,
          image: state.posts.image,
          count: state.posts.count - 1,
          next: state.posts.next,
          arrayPosts: newPosts
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
    case POST_LIKE:
      const { message, postId, userId } = payload;
      const { arrayPosts } = state.posts;
      const newArray = arrayPosts.map((post) => {
        if (post.id == postId) {
          console.log(post.likes)
          const h = {
            ...post,
            likes: (message === "El like se ha agregado") ? post.likes.concat(userId) : post.likes.filter((id) => id != userId)
          }
          console.log(h.likes)
          return h
        } else {
          return post;
        }
      });
      return {
        ...state,
        posts: { ...state.posts, arrayPosts: newArray }
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
        posts: {
          name: "",
          image: "",
          count: null,
          next: "",
          arrayPosts: []
        }
      };
    case CLEAN_USER_DETAIL:
      return {
        ...state,
        userDetail: {}
      }
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