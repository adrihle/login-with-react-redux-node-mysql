import { UPLOADED } from '../constants/action-types'

const uploadUser = (state = {}, action) => {
    switch (action.type){
        case UPLOADED:
            return state = action.payload
        default:
            return state
    }
}

export default uploadUser