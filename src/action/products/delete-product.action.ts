"use server";

import { apiProducts } from "@/server/axios-product-config";

export const deleteProductAction = async (id: string) => {
  try {
    const response = await apiProducts
      .delete(`/product/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response.data;
      });

    return {
      success: response.success,
      message: response.message,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error al intentar eliminar el producto",
    };
  }
};
