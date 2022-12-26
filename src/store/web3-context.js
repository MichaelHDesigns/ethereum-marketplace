import React from 'react';
import ReactDOM from 'react-dom';

const Web3Context = React.createContext({
  account: null,
  networkId: null,
  loadAccount: () => {},
  loadNetworkId: () => {}
});

export default Web3Context;
