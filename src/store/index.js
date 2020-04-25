import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';
import reducers from "./reducers";

const middleware = [logger];
const enhancers = applyMiddleware(...middleware);

const store = process.env.NODE_ENV === 'development' ? createStore(reducers, composeWithDevTools(enhancers)) : createStore(reducers);

export default store;
