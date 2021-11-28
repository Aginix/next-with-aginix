import { TodoFragment, useGetTodoListQuery, useUpdateTodoMutation } from '@generated/graphql';
import { CircularProgress, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

import TodoList from '@components/TodoList';

function IndexPage() {
  const [updateFn, { loading: updating }] = useUpdateTodoMutation();
  const { data, loading: fetching } = useGetTodoListQuery({
    nextFetchPolicy: 'cache-first',
  });

  const todos = data?.todos || [];

  const handleToggle = (todo: TodoFragment, checked: boolean) => {
    updateFn({
      variables: {
        todoId: todo.id,
        data: {
          checked: {
            set: checked,
          },
        },
      },
    });
  };

  if (fetching) {
    return <div>Loading...</div>;
  }

  const done = data?.todos.filter((todo) => todo.checked);

  return (
    <Box pt={4} pb={4}>
      <Container maxWidth="sm">
        <Typography variant="h5">
          Todo List ({done?.length || 0}/{todos.length}) {updating ? <CircularProgress size={14} color="info" /> : null}
        </Typography>
        <Box maxHeight="90vh" overflow="scroll">
          <TodoList todos={todos} onToggle={handleToggle} />
        </Box>
      </Container>
    </Box>
  );
}

export default IndexPage;
