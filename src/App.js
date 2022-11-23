import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Listena } from "./Listena";
import Listen from "./Listen";
import Listentwo from "./Listentwo";


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {(() => {
        if (currentForm === "login") {
          return (
            <Login onFormSwitch={toggleForm} />
          )
        } else if (currentForm === "register") {
          return (
            <Register onFormSwitch={toggleForm} />
          )
        } else {
          return (
            // {Listen}
            <Listena onFormSwitch={toggleForm} />
          )
        }
      })()}

    </div>
  );

  // return (
  //   <div className="App">
  //     {
  //       currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  //     }
  //   </div>
  // );
}

export default App;
