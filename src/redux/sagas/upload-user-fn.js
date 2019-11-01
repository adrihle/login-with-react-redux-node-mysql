import axios from 'axios'

const url = 'http://localhost:4000/login'

export function* uploadNewUser(newUser){

    return yield (axios.post(url, newUser))
    
    
}

