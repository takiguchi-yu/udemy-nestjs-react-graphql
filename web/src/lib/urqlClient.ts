import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { cookies } from "next/headers";

const makeClient = () => {
  const token = cookies().get("token")?.value || "";
  return createClient({
    url: "https://trygql.formidable.dev/graphql/basic-pokedex",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
      headers: {
        authorization: `Bearer ${token}`,
      },
    }),
  });
};

export const { getClient } = registerUrql(makeClient);
