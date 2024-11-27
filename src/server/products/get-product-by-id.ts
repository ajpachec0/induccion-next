import { apiProducts } from "../axios-product-config";
import { Product } from "./get-all-products";

export const getProductById = async (id: string): Promise<Product> => {
  const apiResponse = await apiProducts
    .get(`/product/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return {};
    });

  return apiResponse;
};
