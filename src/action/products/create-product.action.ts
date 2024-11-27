"use server";
import { apiProducts } from "@/server/axios-product-config";
import { ActionProductValues } from "@/validations/create-product-validation";

export const createProductAction = async (values: ActionProductValues) => {
  const body = {
    // id: 17,
    createdAt: values.createdAt,
    description: values.description,
    name: values.name,
    code: values.codigo,
    image: values.image,
  };

  try {
    const res = await apiProducts
      .post("/product", body)
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
