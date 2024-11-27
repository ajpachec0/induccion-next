import { createContactAction } from "@/action/contact-form.action";
import React, { Fragment } from "react";

interface Props {
  nombre: string;
  edad: number;
}

export const PruebaTest = ({ edad, nombre }: Props) => {
  const handleClick = async () => {
    console.log("Click");
    const { data, message, status } = await createContactAction();
    console.log(data);
    console.log(message);
    console.log(status);
  };

  return (
    <Fragment>
      <h1>Prueba</h1>

      <p>
        {nombre} {edad}
      </p>

      <form
        action="
      "
      >
        <label htmlFor="">Telefono</label>
        <input type="text" placeholder="telefono" />
      </form>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
    </Fragment>
  );
};
