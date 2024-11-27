"use server";
import { api } from "@/server/axios-config";
import { ContactFormValues } from "@/validations/contact-form-validation";
import axios from "axios";

export const newUserAction = async (values: ContactFormValues) => {
  console.log(values);

  //   const res = axios
  //     .post("https://jsonplaceholder.typicode.com/posts", values)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return err;
  //     });

  //   return {
  //     data: res,
  //     message: "Usuario creado",
  //   };

  try {
    const res = await api.post("/posts", values);

    console.log("Usuario creado correctamente");

    return {
      data: res.data,
      message: "Usuario creado",
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      message: "Error al crear usuario",
    };
  }
};
