
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom'
//import store  from './ReduxStrore/reducer';
import store from './ReduxStrore/Store';

import { ChakraProvider } from '@chakra-ui/react';

import { Store } from './ReduxStrore/Store';

   


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


 
  <React.StrictMode>

    <ChakraProvider>
      <BrowserRouter>
    <Provider store={Store}>
   <Provider store={store}>
   
        <App />
   </Provider>
   </Provider>
      </BrowserRouter>
    </ChakraProvider>

  </React.StrictMode>

 

);










