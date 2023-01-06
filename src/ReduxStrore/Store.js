
import {legacy_createStore} from 'redux'
import { reducer } from './Reducer'



let Store=legacy_createStore(reducer);
export{Store}

