import { Fragment } from 'react';
import { TodoFragment } from '@generated/graphql'
import Todo from '@components/Todo';

export interface TodoListProps {
  todos: TodoFragment[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <Fragment>
      {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </Fragment>
  )
}

export default TodoList;