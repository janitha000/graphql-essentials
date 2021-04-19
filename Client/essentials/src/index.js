import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, split } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-common';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql'
})

const cache = new InMemoryCache();

const clientStateLink = withClientState({
  cache,
  defaults: {
    databaseName: 'sqllite'
  },
  resolvers: {}
})

const link = ApolloLink.from([clientStateLink, httpLink])

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
