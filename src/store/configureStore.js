import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
      typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() : f => f
    )
  );
}

export default configureStore;
