import axios from "axios";

export const axiosUser = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export const axiosArticles = axios.create({
  baseURL: "http://localhost:3001/api/articles/",
});
