import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { firebaseReducer, getFirebase } from 'react-redux-firebase'
import thunk from  'redux-thunk'

import history from '../routes/history'

import auth from './reducers/authReducer'
import * as utils from './reducers/utilReducer'

const initialState = {}

const middlewares = [
    routerMiddleware(history),
    thunk.withExtraArgument(getFirebase)
]

const store = createStore (
    combineReducers({
        auth,
        ...utils,
        firebase: firebaseReducer,
        router: connectRouter(history),        
    }),
    initialState,
    compose (
        applyMiddleware(...middlewares)
    )
)

export default store