import { fork } from 'redux-saga/effects'
import { watchAddNewUser } from './upload-user-saga'

export default function* rootSaga(){
    yield fork(watchAddNewUser)
}