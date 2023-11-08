import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonType } from '../../../components/buttons';
import { Icons } from '../../../components/icons';

const meta = {
  title: 'Components/Buttons/Button',
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
    actions: { argTypesRegex: '^on.*' }  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: [
          ButtonType.NONE,
          ButtonType.PRIMARY,
          ButtonType.SECONDARY,
          ButtonType.TERTIARY,
          ButtonType.TEXT,
        ],
        default: ButtonType.NONE,
      },
      description: 'The type of button to render.',
    },
    leftIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: <Icons.Accept color='white'/> },
      description: 'The icon to render on the left side of the button.',
    },
    rightIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: <Icons.Accept color='white'/> },
      description: 'The icon to render on the right side of the button.',
    },
    isDisabled: { type: 'boolean', description: 'Whether the button is disabled.' },
    autoFocus: { type: 'boolean', description: 'Whether the element should receive focus on render.' },
    children: {
      description: 'The content to render inside the button.',
    },
    onPress: {
      description: 'Handler that is called when the press is released over the target.',
    },
    onPressStart: {
      description: 'Handler that is called when a press interaction starts.',
    },
    onPressEnd: {
      description: 'Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.'
    },
    onPressChange: {
      description: 'Handler that is called when the press state changes.',
    },
    onPressUp: {
      description: 'Handler that is called when a press is released over the target, regardless of whether it started on the target or not.'
    },
    onFocus: { description: 'Handler that is called when the element receives focus.' },
    onBlur: { description: 'Handler that is called when the element loses focus.' },
    onFocusChange: { description: 'Handler that is called when the focus state changes.' },
    onKeyDown: { description: 'Handler that is called when a key is pressed down.' },
    onKeyUp: { description: 'Handler that is called when a key is released.' },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    buttonType: ButtonType.PRIMARY,
    isDisabled: false,
    children: 'Button text',
  },
};
