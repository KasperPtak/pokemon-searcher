import { getPokemon } from "@/lib/pokemonAPI";

import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
// pokemonName klikket -> skift side
// localhost:3000/pikachu
// pokemonName = "pikachu" -> vis pikachu side

export default async function PokemonPage({
	params,
}: {
	params: { pokemonName: string };
}) {
	// søg på "object destructuring"

	const { pokemonName } = params;
	//
	//

	const pokemonObject = await getPokemon(pokemonName);

	console.log(pokemonObject);

	return (
		<>
			<h1 className="text-4xl text-bold pt-4">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) }    
            </h1>

			<div className="m-4" style={{ position: "relative", width: '300px', height: '300px' }} >
				<PokemonImage
					image={
						pokemonObject.sprites.other["official-artwork"].front_default
					}
					name={pokemonName}
				/>
			</div>
            <h3>
                Weight: { pokemonObject.weight }
            </h3>
            <div className="flex-col" >
                    {pokemonObject.stats.map( (statsObject : any) => {
                        const statName = statsObject.stat.name;
                        const statValue = statsObject.base_stat
                        
                        return (
                            <div className="flex items-stretch" style={{ width: "500px" }} key={statName} >
                                <h3 className="p-3 w-2/4" >
                                    {statName}: {statValue}
                                </h3>
                                <Progress className="w-2/4 m-auto" value={statValue} />
                            </div>
                        )
                    })}
            </div>
		</>
	);
}
