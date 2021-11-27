import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import * as Operations from './graphql';



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getHello(variables?: Operations.GetHelloQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Operations.GetHelloQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Operations.GetHelloQuery>(Operations.GetHelloDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHello');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;