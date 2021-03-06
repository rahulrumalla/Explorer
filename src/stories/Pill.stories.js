import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Pill, Text } from 'components';

storiesOf('Pill', module).add('All Pills', () => (
  <div>
    <Text type="H3">Rounded Pills</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '250px'
        }}
      >
        <Pill>HTML</Pill>
        <Pill>CSS</Pill>
        <Pill>React</Pill>
        <Pill>Javascript</Pill>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <Text type="H3">Rectangle Pills</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '250px'
        }}
      >
        <Pill type="rectangle">HTML</Pill>
        <Pill type="rectangle">CSS</Pill>
        <Pill type="rectangle">React</Pill>
        <Pill type="rectangle">Javascript</Pill>
      </div>
    </div>

    <br />
    <hr />

    <Text type="H3">Pills with Close Button</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '250px'
        }}
      >
        <Pill close onCloseClick={action('clicked')}>
          HTML
        </Pill>
        <Pill close onCloseClick={action('clicked')}>
          CSS
        </Pill>
        <Pill close onCloseClick={action('clicked')}>
          React
        </Pill>
        <Pill close onCloseClick={action('clicked')}>
          Javascript
        </Pill>
      </div>
    </div>

    <br />
    <hr />

    <Text type="H3">Pills Transparent</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex',
        backgroundColor: 'blue',
        height: '60px',
        paddingTop: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '250px'
        }}
      >
        <Pill>HTML</Pill>
        <Pill>CSS</Pill>
        <Pill>React</Pill>
        <Pill>Javascript</Pill>
      </div>
    </div>

    <br />
    <hr />

    <Text type="H3">Playing with Colors and sizes</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '250px'
        }}
      >
        <Pill noBorder backgroundColor="blue" textColor="white">
          HTML
        </Pill>
        <Pill noBorder backgroundColor="purple" textColor="white">
          CSS
        </Pill>
      </div>
    </div>

    <br />
    <hr />

    <Text type="H3">Icons & Network</Text>
    <br />
    <br />
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '250px'
        }}
      >
        <Pill textColor="black">
          <span style={{ marginRight: '10px', color: '#6FC78D' }}>&#9679;</span>Main
          Ethereum Network
        </Pill>
        <Pill textColor="black">
          <span style={{ marginRight: '10px', color: '#FBAA31' }}>&#9679;</span>Rinkeby
          Network
        </Pill>
      </div>
    </div>
  </div>
));
