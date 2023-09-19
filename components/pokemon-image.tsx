"use client"
import Image from "next/image";

export function PokemonImage({ image } : { image: string, name: string } ) {
    return (
        <Image
        // src={pokemonObject.sprites.front_default} pixel/ingame billede
        src={image}
        alt={"Billede af" + name}
        priority
        fill
        style={{"objectFit": "contain"}}
        className="transition-opacity opacity-0 duration-[2s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
/>

        )

}