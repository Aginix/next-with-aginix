import { useMemo } from 'react'
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink, NormalizedCacheObject, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { createInMemoryClient } from './cache'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
export const GRAPHQL_URL_PROP_NAME = 'GRAPHQL_URL'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined = undefined;

function createApolloClient() {

  const URI = process.env.NEXT_PUBLIC_APP_URL + '/api/graphql'

  const httpLink = new HttpLink({
    uri: URI,
    credentials: 'include',
    // headers: headers,
  });

  const authLink = setContext((_, { headers }) => {
    return new Promise((resolve) => resolve(true))
  })

  const link = split(({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition';
  }, authLink.concat(httpLink));

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: link,
    connectToDevTools: true,
    cache: createInMemoryClient(),
  })
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}