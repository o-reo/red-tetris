import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tetrisApp from './reducers/index.js'
import App from './components/App.js';

const store = createStore(tetrisApp);

render(
   <Provider store={store}>
        < App/>
    </Provider>,
    document.getElementById('root')
);