import { DeleteProductButton } from "@/components/products/delete/delete-product-button";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/server/products/get-product-by-id";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductIdPage({ params }: Props) {
  const id = (await params).id;

  console.log(id);

  const product = await getProductById(id);

  console.log(product, "producto final");

  return (
    <section className="w-[1000px] grid gap-4 place-items-center my-16 shadow-xl p-6 bg-stone-200">
      <div className="w-full flex justify-between items-center gap-4">
        <div>
          <Link href="/productos">
            <Button className="text-xl" variant={"outline"}>
              Volver
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href={`/editar-producto/${product.id}`}>
            <Button>Editar</Button>
          </Link>

          <DeleteProductButton id={product.id} />
        </div>
      </div>
      <h1 className="text-4xl text-indigo-600 text-center font-bold">
        {product.name} - {product.code}
      </h1>

      <div className="grid gap-4 place-items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-md"
        />

        <p className="text-lg text-center">{product.description}</p>
      </div>
    </section>
  );
}
