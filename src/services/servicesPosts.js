import { PROPERTIES } from "../utils/properties";
//import { getData, postData, deleteData, putData } from "../genericFetch/generciFetch"
import { getData, postData, putData } from "../genericAxios/genericAxios";

async function getPosts() {
  return await getData(PROPERTIES.BASE_URL + "/posts");
}

async function getDetailPost(id) {
  return await getData(PROPERTIES.BASE_URL + `/posts/${id}`);
}

async function createPost(data) {
  return await postData(PROPERTIES.BASE_URL + `/posts`, data);
}

async function editPost(id, data) {
  return await putData(PROPERTIES.BASE_URL + `/posts/${id}`, data);
}

async function deletePosts() {}

async function deletePost() {}

export {
  getPosts,
  getDetailPost,
  createPost,
  deletePost,
  deletePosts,
  editPost,
};
