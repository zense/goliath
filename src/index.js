import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';

const client = new ApolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes history={ browserHistory } />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
