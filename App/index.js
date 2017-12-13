import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store.js'
import App from './containers/App';

const store = configureStore();

const BrollyTaskClient = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default BrollyTaskClient;