import React from 'react'
import styles from '../styles/Card.module.css'

export type ProkemonProps = {
  id: number;
  name: string;
  abilities: string[]; 
  image: string;
}

const Card: React.FC<{pokemon: ProkemonProps}> = ({ pokemon }) => {
  return (
    <div className={styles.box} >
        <div className={styles.image_box}>
          <img src={pokemon.image}/>
        </div>
        <h3 className={styles.number}>N.º{pokemon.id}</h3>
        <h3 className={styles.name}>{pokemon.name}</h3>
        <h3> {pokemon.abilities.map((ability,index)=>{
              return <span className={styles.ability} key={index}>{ability} </span>
              }
            )
          } 
        </h3>
    </div>
  )
}

export default Card