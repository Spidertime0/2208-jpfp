import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import configureStore from './store';
import reducerCombiner from './reducers/reducerCombiner';
import { createStore } from "redux";

const store = configureStore()

//DELETE ME
Object.defineProperty(window, 'reduxStore', {
    get() {
      return store.getState();
    },
  });
//


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
            
)
