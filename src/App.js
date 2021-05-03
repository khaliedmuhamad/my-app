import React, {useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from 'react-redux';
import store from './store/Store.js';

import { Nav } from "./components/nav/Nav";
function App() {
const [toggle, setToggle] = useState('light');
  const toggler =() => {
    toggle === 'light' ? setToggle("dark") : setToggle("light")
  }

  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className={toggle}>
        <Nav />
        <button className='btn btn-toggle' onClick={toggler}>
          {toggle}
          <span>{" "}
          <i class={
            toggle === 'light' ? "fas fa-sun"
            : "fas fa-moon"
            }></i>
          </span>
          </button> 
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
