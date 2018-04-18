import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, createNetworkInterface,ApolloProvider} from 'react-apollo';
import './index.css';
import Route from './App';
import registerServiceWorker from './registerServiceWorker';


const networkInterface= createNetworkInterface({
  //@override the uri
  uri: "https://localhost:3001/graphql" // have to put the server url over here or graphql endpoint
});
const client = new ApolloClient({
  networkInterface
});
const App=(
  <ApolloProvider client={client}>
    <Route>// 
  </ApolloProvider>
)

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
