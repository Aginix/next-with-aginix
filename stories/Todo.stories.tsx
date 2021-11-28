import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { TodoListItem } from '../components/todo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Todo/TodoItem',
  component: TodoListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TodoListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoListItem> = (args) => <TodoListItem {...args} />;

export const UncheckedTodo = Template.bind({});
UncheckedTodo.args = {
  todo: {
    id: 1,
    title: 'Todo Item',
    checked: false,
  },
};

export const CheckedTodo = Template.bind({});
CheckedTodo.args = {
  todo: {
    id: 1,
    title: 'Todo Item',
    checked: true,
  },
};
