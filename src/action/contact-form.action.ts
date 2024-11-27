"use server";

export const createContactAction = async () => {
  console.log("Hello, world! desde contacto action");

  const fetchPokemos = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await fetchPokemos.json();
  console.log(data);

  return {
    message: "Fui llamado desde el action",
    data: data,
    status: 200,
  };
};
