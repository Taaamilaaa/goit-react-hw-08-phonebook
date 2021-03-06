import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux_/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from 'react-router-dom';
// import Loader from "react-loader-spinner";

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <Router>
         <App />
      </Router>  
      </PersistGate>
      </Provider>  
  </React.StrictMode>,
  document.getElementById("root")
);
