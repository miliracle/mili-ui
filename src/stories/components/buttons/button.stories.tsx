import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonType } from '../../../components/buttons';
import { Icons } from '../../../components/icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className='mili'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    leftIcon: {
      control: {
        disable: true,
      },
    },
    rightIcon: {
      control: {
        disable: true,
      },
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonType: ButtonType.PRIMARY,
    children: 'Button text',
    isDisabled: false,
    onPress: () => alert('Button pressed!'),
  },
};

export const Secondary: Story = {
  args: {
    buttonType: ButtonType.SECONDARY,
    children: 'Button text',
    leftIcon: <Icons.Accept />,
    isDisabled: false,
    onPress: () => alert('Button pressed!'),
  },
};

export const Tertiary: Story = {
  args: {
    buttonType: ButtonType.TERTIARY,
    children: 'Button text',
    isDisabled: false,
    onPress: () => alert('Button pressed!'),
  },
};

export const Text: Story = {
  args: {
    buttonType: ButtonType.TEXT,
    children: 'Button text',
    rightIcon: <Icons.Accept />,
    isDisabled: false,
    onPress: () => alert('Button pressed!'),
  },
};

export const Disabled: Story = {
  args: {
    buttonType: ButtonType.PRIMARY,
    children: 'Button text',
    isDisabled: true,
    onPress: () => alert('Button pressed!'),
  },
};