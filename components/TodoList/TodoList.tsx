import { TodoFragment } from '@generated/graphql';
import { List } from '@mui/material';

import Todo from '@components/Todo';
import { TodoProps } from '@components/Todo/Todo';

export interface TodoListProps {
  todos: TodoFragment[];
  onToggle?: TodoProps['onToggle'];
}

function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <List dense>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </List>
  );
}

export default TodoList;
