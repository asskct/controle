import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { firebaseReducer, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import thunk from  'redux-thunk'

import history from '../routes/history'
import firebase from '../config/firebase'
import auth from './reducers/authReducer'
import plantel from './reducers/plantelReducer'
import * as utils from './reducers/utilReducer'

const initialState = {}

const middlewares = [
    routerMiddleware(history),
    thunk.withExtraArgument({ getFirebase, getFirestore })
]

const store = createStore (
    combineReducers({
        auth,
        plantel,               
        firebase: firebaseReducer,
        router: connectRouter(history),
        ...utils,      
    }),
    initialState,
    compose (
        applyMiddleware(...middlewares),
        reduxFirestore(firebase)
    )
)

export default store