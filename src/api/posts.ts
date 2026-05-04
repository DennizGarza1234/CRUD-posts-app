import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async () => (await axios.get(BASE_URL)).data;

export const createPost = async (post: any) =>
  (await axios.post(BASE_URL, post)).data;

export const updatePost = async (post: any) =>
  (await axios.put(`${BASE_URL}/${post.id}`, post)).data;

export const patchPost = async (post: any) =>
  (await axios.patch(`${BASE_URL}/${post.id}`, post)).data;

export const deletePost = async (id: number) =>
  (await axios.delete(`${BASE_URL}/${id}`)).data;
