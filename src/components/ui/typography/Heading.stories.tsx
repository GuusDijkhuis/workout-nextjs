import { Meta, StoryObj } from '@storybook/react';

import {Heading} from '@/components/ui/typography/Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    className: {
      table: {
        disable: true
      }
    }
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    size: 'xl',
    italic: false,
    underline: false,
    children: 'hallo',
  },
};