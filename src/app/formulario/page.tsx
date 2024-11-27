import { ContactoForm } from "@/components/form/contact-form";

export default function FormularioPage() {
  return (
    <section className="h-screen flex justify-center items-center gap-4">
      <div className="grid gap place-items-center  rounded-md p-8 gap-4 shadow-xl bg-slate-50">
        <h1 className="text-4xl font-bold text-center text-indigo-600">
          Formulario de contacto
        </h1>
        <ContactoForm />
      </div>
    </section>
  );
}
