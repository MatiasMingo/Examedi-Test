import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next'
import Card from '../components/card'


const Home: NextPage = (props) => {
  const pokemons = props.pokemons;
  let num_load = 1;

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex-Examedi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-blue-500 hover:bg-blue-200" onClick={() => buttonHandler()}>
            Sorpréndeme
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {pokemons?.map((pokemon, i) => (         
              <Card pokemon={pokemon} key={i}/>
              )
            )
          }
        </div>
        <button className="bg-blue-500 hover:bg-blue-700" onClick={() => buttonHandler()}>
          Cargar más pokemon
        </button>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPokemons = await prisma.pokemon.findMany();
  return { 
    props: { 
      pokemons: allPokemons, 
    }, 
  };
}


export default Home;