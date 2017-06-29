import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers';

const middlewares = [thunkMiddleware];

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares),
    );
}