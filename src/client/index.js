import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tetrisApp from './reducers/index.js'
import App from './components/App.js';
import createTetri from './actions/createTetri.js';

function handleKeyEvent() {
    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            store.dispatch(createTetri('tetri'));
        }
        else {
            store.dispatch({type: 'test'});
        }
    });
}

const store = createStore(tetrisApp);

store.subscribe(() => console.log(store.getState()));

handleKeyEvent();

render(
   <Provider store={store}>
        < App/>,
    </Provider>,
    document.getElementById('root')
);