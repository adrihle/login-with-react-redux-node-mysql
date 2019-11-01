import { takeLatest, put } from "redux-saga/effects";
import { UPLOAD_USER } from "../constants/action-types";
import { uploadNewUser } from './upload-user-fn'

function* addNewUser (action){
    try{
        const payload = yield uploadNewUser(action.payload)
        console.log(payload)
        yield put({ type: 'UPLOADED', payload })
    }catch(e){}
}

export function* watchAddNewUser(){
    yield takeLatest(UPLOAD_USER, addNewUser)
}

