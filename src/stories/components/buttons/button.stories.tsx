import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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

const commonArgs = {
  children: 'Button text',
  onPress(e) {
    action('onPress')(e);
  },
  onPressStart(e) {
    action('onPressStart')(e);    
  },
  onPressEnd(e) {
    action('onPressEnd')(e);    
  },
  onPressChange(isPressed) {
    action('onPressChange')(isPressed);
  },
  onPressUp(e) {
    action('onPressUp')(e);    
  }
};

export const Example: Story = {
  args: {
    buttonType: ButtonType.PRIMARY,
    isDisabled: false,
    ...commonArgs,
  },
};
