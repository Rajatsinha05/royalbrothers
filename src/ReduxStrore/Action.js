import { Book, Get_Data } from "./ActionType";

function SetData(dispacth,data){

dispacth({


    type:Get_Data,
    paload:data
})
}

function Bookservice(dispacth){

dispacth({

    type:Book
})
}

export {SetData,Bookservice}