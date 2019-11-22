import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";

import rootReducer from './reducers/index.js';
import App from './containers/App.js';
import joinRoomMiddleware from "./middlewares/joinRoom"
import rotatePieceMiddleware from "./middlewares/rotatePiece"
import movePieceMiddleware from "./middlewares/movePiece"
import './assets/style.css';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        joinRoomMiddleware,
        rotatePieceMiddleware,
        movePieceMiddleware,
        //window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //window.__REDUX_DEVTOOLS_EXTENSION__(),
    ));

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/:room[:player]" component={App}/>
                <Route path="/" component={App}/>
            </Switch>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);