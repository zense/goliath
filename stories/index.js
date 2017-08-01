import React from 'react';
import App from '../src/components/App/App'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('view Display', () => {
      return (
            <div className="shreyak">
                <App />
            </div>
      )
  })
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));