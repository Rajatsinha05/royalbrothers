
import {legacy_createStore,combineReducers} from 'redux'
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

let combine=combineReducers({reducer,reducers})



let store =legacy_createStore(combine)

export default store;



