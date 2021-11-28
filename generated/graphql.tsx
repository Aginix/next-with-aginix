import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTodo = {
  __typename?: 'AggregateTodo';
  _count?: Maybe<TodoCountAggregate>;
  _avg?: Maybe<TodoAvgAggregate>;
  _sum?: Maybe<TodoSumAggregate>;
  _min?: Maybe<TodoMinAggregate>;
  _max?: Maybe<TodoMaxAggregate>;
};

export type Hello = {
  __typename?: 'Hello';
  text: Scalars['String'];
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _avg?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createManyTodo: AffectedRowsOutput;
  deleteTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteManyTodo: AffectedRowsOutput;
  updateManyTodo: AffectedRowsOutput;
  upsertTodo: Todo;
};


export type MutationCreateTodoArgs = {
  data: TodoCreateInput;
};


export type MutationCreateManyTodoArgs = {
  data: Array<TodoCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteTodoArgs = {
  where: TodoWhereUniqueInput;
};


export type MutationUpdateTodoArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};


export type MutationDeleteManyTodoArgs = {
  where?: Maybe<TodoWhereInput>;
};


export type MutationUpdateManyTodoArgs = {
  data: TodoUpdateManyMutationInput;
  where?: Maybe<TodoWhereInput>;
};


export type MutationUpsertTodoArgs = {
  where: TodoWhereUniqueInput;
  create: TodoCreateInput;
  update: TodoUpdateInput;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _avg?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Hello;
  todo?: Maybe<Todo>;
  findFirstTodo?: Maybe<Todo>;
  todos: Array<Todo>;
  aggregateTodo: AggregateTodo;
  groupByTodo: Array<TodoGroupBy>;
};


export type QueryTodoArgs = {
  where: TodoWhereUniqueInput;
};


export type QueryFindFirstTodoArgs = {
  where?: Maybe<TodoWhereInput>;
  orderBy?: Maybe<Array<TodoOrderByWithRelationInput>>;
  cursor?: Maybe<TodoWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TodoScalarFieldEnum>>;
};


export type QueryTodosArgs = {
  where?: Maybe<TodoWhereInput>;
  orderBy?: Maybe<Array<TodoOrderByWithRelationInput>>;
  cursor?: Maybe<TodoWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TodoScalarFieldEnum>>;
};


export type QueryAggregateTodoArgs = {
  where?: Maybe<TodoWhereInput>;
  orderBy?: Maybe<Array<TodoOrderByWithRelationInput>>;
  cursor?: Maybe<TodoWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByTodoArgs = {
  where?: Maybe<TodoWhereInput>;
  orderBy?: Maybe<Array<TodoOrderByWithAggregationInput>>;
  by: Array<TodoScalarFieldEnum>;
  having?: Maybe<TodoScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type TodoAvgAggregate = {
  __typename?: 'TodoAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TodoAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type TodoCountAggregate = {
  __typename?: 'TodoCountAggregate';
  id: Scalars['Int'];
  title: Scalars['Int'];
  _all: Scalars['Int'];
};

export type TodoCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type TodoCreateInput = {
  title?: Maybe<Scalars['String']>;
};

export type TodoCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TodoGroupBy = {
  __typename?: 'TodoGroupBy';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  _count?: Maybe<TodoCountAggregate>;
  _avg?: Maybe<TodoAvgAggregate>;
  _sum?: Maybe<TodoSumAggregate>;
  _min?: Maybe<TodoMinAggregate>;
  _max?: Maybe<TodoMaxAggregate>;
};

export type TodoMaxAggregate = {
  __typename?: 'TodoMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TodoMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type TodoMinAggregate = {
  __typename?: 'TodoMinAggregate';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TodoMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type TodoOrderByWithAggregationInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  _count?: Maybe<TodoCountOrderByAggregateInput>;
  _avg?: Maybe<TodoAvgOrderByAggregateInput>;
  _max?: Maybe<TodoMaxOrderByAggregateInput>;
  _min?: Maybe<TodoMinOrderByAggregateInput>;
  _sum?: Maybe<TodoSumOrderByAggregateInput>;
};

export type TodoOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export enum TodoScalarFieldEnum {
  Id = 'id',
  Title = 'title'
}

export type TodoScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TodoScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TodoScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TodoScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringNullableWithAggregatesFilter>;
};

export type TodoSumAggregate = {
  __typename?: 'TodoSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TodoSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type TodoUpdateInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type TodoUpdateManyMutationInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type TodoWhereInput = {
  AND?: Maybe<Array<TodoWhereInput>>;
  OR?: Maybe<Array<TodoWhereInput>>;
  NOT?: Maybe<Array<TodoWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringNullableFilter>;
};

export type TodoWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TodoFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, 'id' | 'title'>
);

export type GetTodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoListQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & TodoFragment
  )> }
);

export const TodoFragmentDoc = gql`
    fragment Todo on Todo {
  id
  title
}
    `;
export const GetTodoListDocument = gql`
    query GetTodoList {
  todos {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useGetTodoListQuery__
 *
 * To run a query within a React component, call `useGetTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoListQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, options);
      }
export function useGetTodoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, options);
        }
export type GetTodoListQueryHookResult = ReturnType<typeof useGetTodoListQuery>;
export type GetTodoListLazyQueryHookResult = ReturnType<typeof useGetTodoListLazyQuery>;
export type GetTodoListQueryResult = Apollo.QueryResult<GetTodoListQuery, GetTodoListQueryVariables>;