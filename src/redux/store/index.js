import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialiceSagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(initialiceSagaMiddleware))
)

initialiceSagaMiddleware.run(rootSaga)

export default store

