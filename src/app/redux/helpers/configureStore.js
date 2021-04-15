import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '../reducers/root';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, 
        composeWithDevTools(
        applyMiddleware(
            thunk,
            logger
        )
    ));

    let persistor = persistStore(store);

    return { store, persistor };
}