import { PokemonGrid } from "@/components/pokemon-grid";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
	// load data
  const pokemonList = await getPokemonList()
	// smid data in i klient komponent

	// Text input: filter pokemon her
	// Text input -> "use client" skal have adgang til useState for at håndtere inputtet
	// Når text er inputtet -> søg på input igennem pokemon dataen (api'en)
	// ("use client") PokemonGrid -> (Text input, viser alle cards som matcher søgeresultatet)

	// Får dataen om pokemons fra en "server component"

  // smid data til PokeGrid

  //TODO
  // 1. lav PokemonGrid (og andre komponenter)
  // 2. load pokemondata (151 pokemoner)
  // 3. smid dataen ind i PokeGrid og vis alle pokemon fra API kald

	return (
    <PokemonGrid pokemonList={pokemonList} />


	);
}
