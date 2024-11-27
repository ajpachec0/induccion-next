import Image from "next/image";

export default async function PokemonPage() {
  const fetchCharizardPokemon = await fetch(
    "https://pokeapi.co/api/v2/pokemon/charizard"
  );

  const data = await fetchCharizardPokemon.json();

  console.log(data.name, "Salamence");

  return (
    <section>
      <h1>Pokemon</h1>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <Image
            src={data.sprites.front_default}
            alt={data.name}
            width={96}
            height={96}
          />
        </div>
      )}
    </section>
  );
}
