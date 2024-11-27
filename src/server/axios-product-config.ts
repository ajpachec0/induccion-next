import axios from "axios";

export const apiProducts = axios.create({
  baseURL: `${process.env.API_PRODUCT_BASE_URL}`,
});
