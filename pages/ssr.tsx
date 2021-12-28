import { GetTodoListDocument, GetTodoListQueryVariables, useGetTodoListQuery } from '@/generated/graphql';
import { addApolloState, initializeApollo } from '@/lib/apollo';

export default function Ssr() {
  const { data } = useGetTodoListQuery();

  return <pre>{JSON.stringify(data)}</pre>;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query<{}, GetTodoListQueryVariables>({
    query: GetTodoListDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}
