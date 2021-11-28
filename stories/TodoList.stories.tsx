import { TodoFragment } from '@generated/graphql';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { lorem, datatype } from 'faker';
import React from 'react';

import { TodoList } from '../components/todo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Todo/TodoList',
  component: TodoList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TodoList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const EmptyTodoList = Template.bind({});
EmptyTodoList.args = {
  todos: [],
};

export const SampleTodoList = Template.bind({});
SampleTodoList.args = {
  todos: Array(5)
    .fill('')
    .map<TodoFragment>((_, idx) => ({
      id: idx,
      title: lorem.sentence(),
      checked: !!datatype.number(2),
    })),
};
