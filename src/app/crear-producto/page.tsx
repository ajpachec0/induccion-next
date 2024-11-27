import { ProductForm } from "@/components/products/create/product-form";

export default async function CreatePage() {
  return (
    <section className="h-screen flex justify-center items-center gap-4 w-[700px]">
      <div className="grid gap place-items-center  rounded-md p-8 gap-4 shadow-xl bg-slate-100 ">
        <h1 className="text-3xl font-bold text-slate-900">Crear producto</h1>
        <ProductForm />
      </div>
    </section>
  );
}
