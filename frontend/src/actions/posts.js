import * as api from "../api";
import {
  GET_ALL_POST,
  ADD_POST,
  DELETE_POST,
  GET_ALL_POST_ERROR,
  ADD_POST_ERROR,
  DELETE_POST_ERROR,
  FILTER_POST,
} from "./types";

//Get all posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: GET_ALL_POST, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_ALL_POST_ERROR, payload: error.message });
  }
};

//Create new post

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.addPost(post);

    dispatch({ type: ADD_POST, payload: data.body.newPost });
  } catch (error) {
    dispatch({ type: ADD_POST_ERROR, payload: error.response.data.error });
  }
};

//Delete post

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.removePost(id);

    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: DELETE_POST_ERROR, payload: error.message });
  }
};

//Filter post
export const filterPost = (name) => (dispatch) => {
  dispatch({ type: FILTER_POST, payload: name });
};
