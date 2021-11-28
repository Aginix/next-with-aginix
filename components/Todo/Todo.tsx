import { Fragment } from 'react';
import { TodoFragment } from '@generated/graphql'

export interface TodoProps {
  todo: TodoFragment;
}

function Todo({ todo }: TodoProps) {
  return (
    <li>{todo.title}</li>
  )
}

export default Todo;