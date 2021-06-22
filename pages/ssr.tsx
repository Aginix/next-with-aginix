import { GetHelloDocument, useGetHelloQuery } from "../src/generated/graphql"
import { addApolloState, initializeApollo } from "../src/libs/apollo"

export default function Ssr() {
  const { data } = useGetHelloQuery();

  return <pre>{JSON.stringify(data)}</pre>
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GetHelloDocument,
  })

  return addApolloState(apolloClient, {
    props: {}
  })
}
