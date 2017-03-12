import {createStore, combineReducers, applyMiddleware} from 'redux'
import {routerReducer, push} from 'react-router-redux'
// import reducers from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger()

const store = createStore(
    combineReducers({
        //...reducers,
        router: routerReducer
    }),
    applyMiddleware.apply(null, [logger])
)

export function getStore() {
    return store
}

export function goTo(route) {
    store.dispatch(push(route))
}