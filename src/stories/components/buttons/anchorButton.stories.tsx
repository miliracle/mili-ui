import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AnchorButton, ButtonType } from '../../../components/buttons';
import { Icons } from '../../../components/icons';

const meta = {
  title: 'Components/Buttons/AnchorButton',
  component: AnchorButton,
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
    isDisabled: { type: 'boolean', description: 'Whether the button is disabled.' },
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
    href: {
      type: 'string',
      description: 'The URL that the hyperlink points to.',
    },
    target: {
      type: 'string',
      description: 'Specifies where to display the linked URL.',
    },
  }
} satisfies Meta<typeof AnchorButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    buttonType: ButtonType.PRIMARY,
    href: 'https://www.google.com',
    target: '_blank',
    children: 'Anchor Button',
  },
};
