"use client";
import { deleteProductAction } from "@/action/products/delete-product.action";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  id: string;
}

export const DeleteProductButton = ({ id }: Props) => {
  console.log("id", id);

  const router = useRouter();

  const handleDelete = async () => {
    await deleteProductAction(id);

    router.push("/productos");
  };

  return (
    <Button
      variant={"destructive"}
      onClick={handleDelete}
      className="flex items-center gap-2"
    >
      <Trash2 />
    </Button>
  );
};
