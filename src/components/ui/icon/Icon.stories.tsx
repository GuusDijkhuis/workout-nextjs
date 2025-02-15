import { Meta, StoryObj } from '@storybook/react';
import {Icon} from '@/components/ui/icon/Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    color: 'dark',
    name: 'chevron-right',
    size: 'lg'
  },
};