import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './design/scss/main.scss';
import {Router, browserHistory} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/saga";
import {syncHistoryWithStore} from "react-router-redux";
import routes from "./routes";

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    BootstrapedElement
);
