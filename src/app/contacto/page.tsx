"use client";

import { PruebaTest } from "@/components/prueba-form";

export default function ContactoPage() {
  console.log("Hello, world! desde contacto");

  return (
    <section>
      <h1>Contacto</h1>
      <PruebaTest nombre="Juan" edad={30} />
    </section>
  );
}
