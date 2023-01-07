
import {legacy_createStore} from 'redux'
import { reducer } from './Reducer'

const initialize ={
    users : JSON.parse(localStorage.getItem('users'))||[],
    loggedInUser : null,
}

const reducers =(state=initialize ,action )=>{
    switch(action.type){
        

        case "REGISTER":
            return {
                ...state,
                users:[...state.users,action.payload]
            }
            case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
            case "OTP":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}



let Store=legacy_createStore(reducer);

let store =legacy_createStore(reducers)
export{Store}
export default store;



