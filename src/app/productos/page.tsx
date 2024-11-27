import { getAllProducts } from "@/server/products/get-all-products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ProductosPage() {
  const products = await getAllProducts();

  return (
    <section className="w-[600px] grid gap-4 place-items-center my-16">
      <Link href="/crear-producto">
        <Button>Crear producto</Button>
      </Link>

      <div className="grid lg:grid-cols-3 gap-4 my-16">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.createdAt}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/productos/${product.id}`}>
                <Button>Ver producto</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Link href="/">
        <Button className="text-xl">Home</Button>
      </Link>
    </section>
  );
}
