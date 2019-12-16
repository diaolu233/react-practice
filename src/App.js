import React from 'react';
import Index from "./router/Index"
import "assets/styles/resets.css"
import "assets/styles/common.css"
import "assets/icon.css";
import { Provider } from "react-redux"
import store from "./redux/store"
import {BrowserRouter as Route} from "react-router-dom"
function App() {
  return (
   
    <Route>
      <Provider store={store}>

        <Index></Index>
      </Provider>
    
    </Route>
   
  );
}

export default App;
