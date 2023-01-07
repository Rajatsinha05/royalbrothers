import { Book, Get_Data } from "./ActionType";

function SetData(dispacth,data){
// console.log(data)


dispacth({


    type:Get_Data,
    payload:data
})
}

function Bookservice(dispacth){

dispacth({

    type:Book
})
}

export {SetData,Bookservice}