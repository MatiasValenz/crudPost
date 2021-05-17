import {
  GET_ALL_POST,
  ADD_POST,
  DELETE_POST,
  GET_ALL_POST_ERROR,
  ADD_POST_ERROR,
  DELETE_POST_ERROR,
  FILTER_POST,
} from "../actions/types";

const initialState = {
  posts: [],
  filteredPosts: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
        filteredPosts: action.payload,
      };

    case GET_ALL_POST_ERROR:
      return {
        ...state,
        posts: [],
        filteredPosts: [],
        error: action.payload,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        filteredPosts: [...state.posts, action.payload],
      };

    case ADD_POST_ERROR:
      return {
        ...state,
        posts: [],
        filteredPosts: [],
        error: action.payload,
      };

    case DELETE_POST:
      const postFilters = state.posts.filter(
        (posts) => posts.id !== action.payload
      );
      return {
        ...state,
        posts: postFilters,
        filteredPosts: postFilters,
      };

    case DELETE_POST_ERROR:
      return {
        ...state,
        posts: [],
        filteredPosts: [],
        error: action.payload,
      };

    case FILTER_POST:
      let newPosts = Object.assign({}, state);
      const name = action.payload;

      let filteredPostsByName = state.posts.filter((post) =>
        post.name.toLowerCase().includes(name)
      );

      if (name !== "") {
        newPosts.filteredPosts = filteredPostsByName;
      } else {
        newPosts.filteredPosts = state.posts;
      }

      return newPosts;

    default:
      return state;
  }
};
export default reducer;
