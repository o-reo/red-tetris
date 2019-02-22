import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import App from './components/App.js';
import LogUser from './containers/LogUser';
import logUserMiddleware from "./middlewares/logUser"
import rotatePieceMiddleware from "./middlewares/rotatePiece"
import movePieceMiddleware from "./middlewares/movePiece"
import './assets/style.css';

const store = createStore(rootReducer,
    applyMiddleware(logUserMiddleware,
                    rotatePieceMiddleware,
                    movePieceMiddleware,
                    ));

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/:room[:player]" component={ App }/>
                <Route path="/" component={ LogUser }/>
            </Switch>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);