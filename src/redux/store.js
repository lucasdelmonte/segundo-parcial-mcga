import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer } from './reducers/productsReducer';
import { providersReducer } from './reducers/providersReducer';

export const store = createStore(
  //productsReducer,
  providersReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);
