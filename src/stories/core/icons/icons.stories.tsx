import React from 'react'
import cx from 'classnames'
import type { Meta } from '@storybook/react';
import { IconSize, Icons } from '../../../components/icons';
import { Classes } from '../../../core';

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
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column" as "column",
    width: 100,
  }
};

export const IconList = () => {
  return (
    <div className={cx('mili')} style={styles.wrapper}>
      <div style={styles.gridStyle}>
        <div style={styles.gridItem}>
          <Icons.Accept size={IconSize.LARGE} />
          <p className={Classes.CAPTION}>Accept</p>
        </div>
        <div style={styles.gridItem}>
          <Icons.AddCircle size={IconSize.LARGE} />
          <p className={Classes.CAPTION}>AddCircle</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.AddPlus size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>AddPlus</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.ArrowDown size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>ArrowDown</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.ArrowLeft size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>ArrowLeft</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.ArrowRight size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>ArrowRight</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.ArrowUp size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>ArrowUp</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Attachment size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Attachment</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.BookmarkOutline size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>BookmarkOutline</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.BookmarkSaved size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>BookmarkSaved</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Buy size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Buy</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Calendar size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Calendar</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.ChangePassword size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>ChangePassword</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Check size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Check</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Close size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Close</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Contract size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Contract</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.CursorPointer size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>CursorPointer</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Decline size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Decline</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Delete size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Delete</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Dividends size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Dividends</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Download size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Download</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Edit size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Edit</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.EyeOff size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>EyeOff</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.EyeOn size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>EyeOn</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Filter size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Filter</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Grid size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Grid</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.InfoCircle size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>InfoCircle</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.List size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>List</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Loader size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Loader</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.LogOut size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>LogOut</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Minus size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Minus</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.More size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>More</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Notification size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Notification</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Pending size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Pending</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Reclaim size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Reclaim</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Refresh size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Refresh</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Search size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Search</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Sell size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Sell</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Shares size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Shares</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.SortDecrease size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>SortDecrease</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.SortIncrease size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>SortIncrease</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Support size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Support</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.Transfer size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>Transfer</p>
        </div>
        <div style={styles.gridItem}>
            <Icons.User size={IconSize.LARGE} />
            <p className={Classes.CAPTION}>User</p>
        </div>

      </div>
      
    </div>
  )
};

IconList.storyName = 'Icon List';