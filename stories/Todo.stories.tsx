import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Todo from '../components/Todo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Todo/TodoItem',
  component: Todo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Todo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

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
