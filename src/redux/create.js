/*
 * create redux structure out of here into store
 * and index.js will Provider with store
 */
import { createStore, compose, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
// import rootSaga from './sagas/rootSaga';

export default function createStoreWithMiddleware(initialState) {
  // const sagaMiddleware = createSagaMiddleware();
  const middleware = [];
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, enhancer);
  // sagaMiddleware.run(rootSaga);
  return store;
}
