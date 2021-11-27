import '../styles/globals.css'
import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app'
import merge from 'deepmerge'
import { Fragment } from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <Fragment>
      <Head>
        <title>Next with Aginix</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Fragment>
  )
}
export default MyApp

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return merge(appProps, {
    pageProps: {
      GRAPHQL_URL: process.env.GRAPHQL_URL,
    }
  });
}