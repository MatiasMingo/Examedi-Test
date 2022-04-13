import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { pokemons } from './data';

async function main() {
    await prisma.pokemon.createMany({
        data: pokemons,
      });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });