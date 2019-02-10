import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import App from './containers/App.js';
import './assets/style.css';

const store = createStore(rootReducer);

render(
   <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);