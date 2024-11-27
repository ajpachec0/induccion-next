import { UpdateProductForm } from "@/components/products/update/update-product-form";
import { getProductById } from "@/server/products/get-product-by-id";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditarProductoPage({ params }: Props) {
  const id = await params.id;

  const productData = await getProductById(id);

  console.log(productData, "producto final");

  return (
    <section className="h-screen flex justify-center items-center gap-4 w-[700px]">
      <div className="grid gap place-items-center  rounded-md p-8 gap-4 shadow-xl bg-slate-100 ">
        <h1 className="text-3xl font-bold text-slate-900">Editar producto</h1>
        <UpdateProductForm data={productData} />
      </div>
    </section>
  );
}
