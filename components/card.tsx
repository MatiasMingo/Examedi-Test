import React from 'react'

export type ProkemonProps = {
  id: number;
  name: string;
  abilities: string[]; 
  image: string;
}

const Card: React.FC<{pokemon: ProkemonProps}> = ({ pokemon }) => {
  return (
    <div>
        <img src={pokemon.image}/>
        <h3>{pokemon.id}</h3>
        <h3>{pokemon.name}</h3>
        <h3>{pokemon.abilities}</h3>
    </div>
  )
}

export default Card