import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import "aos/dist/aos.css";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { DataProvider } from "./reducers/GlobalState";

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <DataProvider>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </DataProvider>,
  document.getElementById("root")
);