import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { applyMiddleware, createStore, Store } from "redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

export const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  root,
);
