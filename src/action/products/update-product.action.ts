"use server";
import { apiProducts } from "@/server/axios-product-config";
import { ActionProductValues } from "@/validations/create-product-validation";

export const updateProductAction = async (values: ActionProductValues) => {
  const body = {
    id: values.id,
    createdAt: values.createdAt,
    description: values.description,
    name: values.name,
    code: values.codigo,
    image: values.image,
  };

  try {
    const res = await apiProducts
      .put(`/product/${values.id}`, body)
      .then((res) => res.data)
      .catch((error) => error);

    console.log("res", res);

    return {
      data: res,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: error,
    };
  }
};
