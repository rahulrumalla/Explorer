import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Chip, Text } from 'components';

storiesOf('Chip', module).add('All Chips', () => (
  <div>
    <Text style="H3">Rounded Chips</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px'
        }}
      >
        <Chip>HTML</Chip>
        <Chip>CSS</Chip>
        <Chip>React</Chip>
        <Chip>Javascript</Chip>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <Text style="H3">Rectangle Chips</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px'
        }}
      >
        <Chip style="rectangle">HTML</Chip>
        <Chip style="rectangle">CSS</Chip>
        <Chip style="rectangle">React</Chip>
        <Chip style="rectangle">Javascript</Chip>
      </div>
    </div>

    <br />
    <hr />

    <Text style="H3">Chips with Close Button</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px'
        }}
      >
        <Chip style="round" close onCloseClick={action('clicked')}>
          HTML
        </Chip>
        <Chip style="round" close onCloseClick={action('clicked')}>
          CSS
        </Chip>
        <Chip style="round" close onCloseClick={action('clicked')}>
          React
        </Chip>
        <Chip style="round" close onCloseClick={action('clicked')}>
          Javascript
        </Chip>
      </div>
    </div>

    <br />
    <hr />
  </div>
));