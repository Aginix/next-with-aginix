import TodoList from "@components/TodoList"
import { useGetTodoListQuery } from "@generated/graphql"

function IndexPage() {
  const { data, loading } = useGetTodoListQuery();

  const todos = data?.todos || [];

  if (loading) {
    return <div>Loading...</div>
  }

  return <TodoList todos={todos} />
}

export default IndexPage