import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";

import rootReducer from './Store/Reducers/index.js';
import Home from './app/Home';
import Game from './app/Room';
import joinRoomMiddleware from "./Store/Middlewares/JoinRoom"
import rotatePieceMiddleware from "./Store/Middlewares/RotatePiece"
import movePieceMiddleware from "./Store/Middlewares/MovePiece"
import './assets/style.css';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        joinRoomMiddleware,
        rotatePieceMiddleware,
        movePieceMiddleware,
    ));

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/:room[:player]" component={Game}/>
                <Route path="/" component={Home}/>
            </Switch>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);