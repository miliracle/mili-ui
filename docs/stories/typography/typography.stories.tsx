import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'centered',
  }
} satisfies Meta;

export default meta;

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const styles = {
  table: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
  },
  row: {
    display: 'flex',
    width: '100%',
  },
  cell1: {
    flexBasis: '20%',
    padding: '10px',
  },
  cell2: {
    flexBasis: '80%',
    padding: '10px',
  },
};

export const Example = () => {
  return (
    <div style={styles.table}>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <h1 className='mili-heading'>H1</h1>
        </div>
        <div style={styles.cell2}>
          <h1 className='mili-heading'>{content}</h1>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <h2 className='mili-heading'>H2</h2>
        </div>
        <div style={styles.cell2}>
          <h2 className='mili-heading'>{content}</h2>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <h3 className='mili-heading'>H3</h3>
        </div>
        <div style={styles.cell2}>
          <h3 className='mili-heading'>{content}</h3>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <p className='mili-subtitle'>Subtitle</p>
        </div>
        <div style={styles.cell2}>
          <p className='mili-subtitle'>{content}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <p className='mili-body-large'>Body Large</p>
        </div>
        <div style={styles.cell2}>
          <p className='mili-body-large'>{content}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <p className='mili-body-regular'>Body Regular</p>
        </div>
        <div style={styles.cell2}>
          <p className='mili-body-regular'>{content}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <p className='mili-caption'>Caption</p>
        </div>
        <div style={styles.cell2}>
          <p className='mili-caption'>{content}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
        <p className='mili-caption'>Link</p>
        </div>
        <div style={styles.cell2}>
          <p><a className='mili-link'>{content}</a></p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell1}>
          <p className='mili-body-regular'>Link Small</p>
        </div>
        <div style={styles.cell2}>
          <p><a className='mili-link-small'>{content}</a></p>
        </div>
      </div>
    </div>
  )
};

Example.storyName = 'Example';