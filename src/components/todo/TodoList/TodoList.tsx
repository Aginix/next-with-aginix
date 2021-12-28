import { TodoFragment } from '@/generated/graphql';
import { List } from '@mui/material';
import { VFC } from 'react';

import TodoListItem from '../TodoListItem';
import { TodoListItemProps } from '../TodoListItem/TodoListItem';

export interface TodoListProps {
  todos: TodoFragment[];
  onToggle?: TodoListItemProps['onToggle'];
}

const TodoList: VFC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <List dense>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </List>
  );
};

export default TodoList;
