import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

const MarketplaceContext = React.createContext({
  contract: null,
  offerCount: null,
  offers: [],
  userFunds: null,
  mktIsLoading: true,
  loadContract: () => {},
  loadOfferCount: () => {},
  loadOffers: () => {},
  updateOffer: () => {},
  addOffer: () => {},
  loadUserFunds: () => {},
  setMktIsLoading: () => {}
});

export default MarketplaceContext;
