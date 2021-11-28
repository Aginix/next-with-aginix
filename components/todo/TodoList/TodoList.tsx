import { TodoFragment } from '@generated/graphql';
import { List } from '@mui/material';

import TodoListItem from '../TodoListItem';
import { TodoListItemProps } from '../TodoListItem/TodoListItem';

export interface TodoListProps {
  todos: TodoFragment[];
  onToggle?: TodoListItemProps['onToggle'];
}

function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <List dense>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </List>
  );
}

export default TodoList;
