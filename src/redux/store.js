import thunk from 'redux-thunk';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReduser from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReduser, 
  composeEnhancers(applyMiddleware(thunk))
);

export default store;