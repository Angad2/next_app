import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
const BASE_URL = process.env.BASE_URL;

export const userClientQuery = token => {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const cache = new InMemoryCache()

  const httpLink = new HttpLink({
    uri: `${BASE_URL}/graphql`, //relay endpoint for graphql mutation
    fetch,
  })

  const userClientEngine = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  })
  return userClientEngine
}
