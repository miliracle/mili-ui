import React from 'react'
import cx from 'classnames'
import type { Meta, StoryObj } from '@storybook/react';
import { IconSize, Icons } from '../../../../src/components/icons';
import { Classes } from '../../../../src';

const meta = {
  title: 'Core/Icons',
  parameters: {
    layout: 'centered',
  }
} satisfies Meta;

export default meta;

const styles = {
  wrapper: {
    maxWidth: 600,
  },
  gridStyle: {
    display: "flex",
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap",
    gridTemplateColumns: "repeat(10, 1fr)",
    gridGap: 20
  }
};

export const Example = () => {
  return (
    <div className={cx('mili')} style={styles.wrapper}>
      <div style={styles.gridStyle}>
        <div>
          <Icons.Accept size={IconSize.LARGE} />
        </div>
        <div>
          <Icons.AddCircle size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.AddPlus size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.ArrowDown size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.ArrowLeft size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.ArrowRight size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.ArrowUp size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Attachment size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.BookmarkOutline size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.BookmarkSaved size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Buy size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Calendar size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.ChangePassword size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Check size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Close size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Contract size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.CursorPointer size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Decline size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Delete size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Dividends size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Download size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Edit size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.EyeOff size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.EyeOn size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Filter size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Grid size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.InfoCircle size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.List size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Loader size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.LogOut size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Minus size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.More size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Notification size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Pending size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Reclaim size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Refresh size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Search size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Sell size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Shares size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.SortDecrease size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.SortIncrease size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Support size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.Transfer size={IconSize.LARGE} />
        </div>
        <div>
            <Icons.User size={IconSize.LARGE} />
        </div>

      </div>
      
    </div>
  )
};

Example.storyName = 'Example';