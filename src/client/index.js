import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import App from './components/App.js';

const store = createStore(rootReducer);

// setInterval(function() {console.log('test')}, 1000);

// document.addEventListener('keydown', (event) =>
//     console.log(event)
// );

render(
   <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);