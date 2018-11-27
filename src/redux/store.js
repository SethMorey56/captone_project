import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

let rootReducer = combineReducers({
    form: intake
})

let middleware = [ thunk, logger ]

export default () => createStore(rootReducer, applyMiddleware(...middleware))