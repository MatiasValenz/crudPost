import axios from "axios";
import { API } from "../config";

const url = "http://localhost:5000/api/post";

export const fetchPosts = () => axios.get(API + "/list");
export const addPost = (newPost) => axios.post(url + "/create", newPost);
export const removePost = (id) => axios.delete(url + "/delete/" + id);
