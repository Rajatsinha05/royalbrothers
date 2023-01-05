import {legacy_createStore as  createStore} from  'redux';
const initialize ={
    users : JSON.parse(localStorage.getItem('users'))||[],
    loggedInUser : null,
}

const reducer =(state=initialize ,action)=>{
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

export default createStore(reducer);