import { createProductAction } from "@/action/products/create-product.action";
import {
  actionProductSchema,
  ActionProductValues,
} from "@/validations/create-product-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useCreateProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<ActionProductValues>({
    defaultValues: {
      codigo: "",
      createdAt: "",
      description: "",
      image: "",
      name: "",
    },
    resolver: zodResolver(actionProductSchema),
  });

  const onSubmit = async (values: ActionProductValues) => {
    setIsLoading(true);
    console.log(values);

    const { data, error } = await createProductAction(values);

    if (error) {
      console.error(error);
      setIsLoading(false);
      return;
    }

    console.log(data, "Soy el producto creado");
    router.push("/productos");

    setIsLoading(false);
  };

  return {
    form,
    isLoading,
    onSubmit,
  };
};
