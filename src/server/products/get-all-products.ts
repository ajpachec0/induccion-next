import { apiProducts } from "../axios-product-config";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await apiProducts
    .get("/product")
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return [];
    });

  return res;
};

export interface Product {
  createdAt: string;
  name: string;
  description: string;
  image: string;
  code: string;
  id: string;
}
