
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { Store } from './ReduxStrore/Store';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

<Provider store={Store}>



    <BrowserRouter>
   
   <ChakraProvider>
    <App />
    
    </ChakraProvider>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>
);










