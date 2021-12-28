import { TodoFragment } from '@/generated/graphql';
import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { VFC } from 'react';

export interface TodoListItemProps {
  todo: TodoFragment;
  onToggle?: (todo: TodoFragment, checked: boolean) => void;
}

const TodoListItem: VFC<TodoListItemProps> = ({ todo, onToggle }) => {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem disablePadding dense divider>
      <ListItemButton role={undefined} onClick={() => onToggle?.(todo, !todo.checked)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.checked}
            tabIndex={-1}
            disableRipple
            size="small"
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={todo.title}
          primaryTypographyProps={{
            sx: {
              textDecoration: todo.checked ? 'line-through' : undefined,
              color: (theme) => (todo.checked ? theme.palette.text.secondary : undefined),
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
