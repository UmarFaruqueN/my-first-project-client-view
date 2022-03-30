import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
     <Provider store={Store}>
          <React.StrictMode>
               <BrowserRouter>
                    <App />
               </BrowserRouter>
          </React.StrictMode>
     </Provider>,
     document.getElementById("root")
);
