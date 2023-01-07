import {  Get_Data } from "./ActionType";

let intial ={

bikes:[]


}

 export const reducer = (state = intial, action) => {


    console.log(action)
    switch (action.type) {
        case Get_Data:
            return {
                 bikes:[...action.payload]


            }
        default:
            return state
    }
}