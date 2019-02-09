import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import App from './containers/App.js';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

const store = createStore(rootReducer);

render(
   <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);