import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import App from './containers/App.js';
import CreateRoom from './components/CreateRoom';
import './assets/style.css';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/:room[:player]" component={ App }/>
                <Route path="/" component={ CreateRoom }/>
            </Switch>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);