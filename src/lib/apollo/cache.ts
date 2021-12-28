import { InMemoryCache } from '@apollo/client';

export function createInMemoryClient() {
  return new InMemoryCache({ typePolicies: {} });
}
