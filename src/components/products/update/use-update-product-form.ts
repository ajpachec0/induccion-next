import { updateProductAction } from "@/action/products/update-product.action";
import { Product } from "@/server/products/get-all-products";
import {
  actionProductSchema,
  ActionProductValues,
} from "@/validations/create-product-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  data: Product;
}

export const useUpdateProductForm = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  console.log(data, "Soy el producto");

  const router = useRouter();

  const form = useForm<ActionProductValues>({
    defaultValues: {
      codigo: data.code,
      createdAt: data.createdAt,
      description: data.description,
      image: data.image,
      name: data.name,
      id: data.id,
    },
    resolver: zodResolver(actionProductSchema),
  });

  const onSubmit = async (values: ActionProductValues) => {
    setIsLoading(true);
    console.log(values);

    const { data, error } = await updateProductAction(values);

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
