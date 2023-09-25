import type { Meta, StoryObj } from '@storybook/react';
import { Colors, IconSize, Icons } from '../../../../src';

const meta = {
  title: 'Core/Icons/Icon',
  component: Icons.Accept,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: {
      options: [IconSize.SMALL, IconSize.STANDARD, IconSize.LARGE],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Icons.Accept>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accept: Story = {
  args: {
    color: Colors.PRIMARY,
    size: IconSize.STANDARD,
  },
};

