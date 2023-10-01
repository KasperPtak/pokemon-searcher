
const POKEMON_API = "https://pokeapi.co/api/v2/"

// getPokemonList -> hent alle 151 originale pokemon
export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=135&offset=251");
    const data = await response.json();
    return data.results;
    // Mulighed for at lave en typescript "interface" som definere diverse data der kommer fra API kaldet
    
}


// getPokemon -> få informationen fra en bestemt pokemon ud fra en string fx "Bulbasaur"
export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + 'pokemon/' + name)
    const data = await response.json();
    return data;
}

lokijlkj