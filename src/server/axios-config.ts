import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  auth: {
    username: `${process.env.API_USERNAME}`,
    password: `${process.env.API_PASSWORD}`,
  },
});
