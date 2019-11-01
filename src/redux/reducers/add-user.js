import { ADD_USER } from '../constants/action-types'

const addUser = (state= {}, action) => {
    switch (action.type){
        case ADD_USER:
            return state = action.payload
        default:
            return state
    }
}

export default addUser