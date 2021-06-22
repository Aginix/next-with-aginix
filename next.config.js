module.exports = () => {
  return {
    reactStrictMode: true,
    env: {
      GRAPHQL_URL: process.env.GRAPHQL_URL,
    }
  }
}