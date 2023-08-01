"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

// <PokemonGrid pokemonlist={data fra apikald her} />

interface PokemonGridProps {
    pokemonList: Pokemon[]
    // pokemonlist kan sættes til any hvis fejl sker, igen :')
}

export function PokemonGrid({ pokemonList } : PokemonGridProps ) {
	const [searchText, setSearchText] = useState("");

	return (
		<>
			<div>
				<h3 className="text-2xl py-6 text-center">
					Search for your Pokémon!
				</h3>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="pokemonName">Pokémon Name</Label>
					<Input
						type="text"
						value={searchText}
                        autoComplete="off"
						id="pokemonName"
						placeholder="Charizard, Pikachu, etc."
                        onChange={(e) => setSearchText(e.target.value)}
					></Input>
				</div>
                <h3 className="text-3xl pt-12 pb-6 text-center">
                    Search results
                </h3>
			</div>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left ">
			{pokemonList.map((pokemon : pokemon[]) => {
                return (
                    <PokemonCard name={pokemon.name} />
                )
            })}
		</div>
		</>
	);
}
