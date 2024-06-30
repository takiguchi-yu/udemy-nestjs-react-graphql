import { getClient } from "@/lib/urqlClient";
import { gql } from '@urql/next';

const PokemonsQuery = gql`
  query {
    pokemons(limit: 5) {
      id
      name
    }
  }
`;


export default async function Home() {

  const result = await getClient().query(PokemonsQuery, {});

  return (
    <main>
      <h1>This is rendered as part of an RSC</h1>
      <ul>
        {result.data.pokemons.map((x: any) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </main>
  );
}
