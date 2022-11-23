// // import React, { useState } from "react";
// // import logo from './logo.svg';
// // import './App.css';

// // function Listen(props) {
// //     // const [currentForm, setCurrentForm] = useState('login');
  
// //     // const toggleForm = (formName) => {
// //     //   setCurrentForm(formName);
// //     // }
  
// //     return (
// //       <div className="Listen">
// //         <p> hiiiiiii </p>
// //         {
// //         //   currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
// //         }
// //       </div>
// //     );
// //   }
  
// //   export default Listen;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const Listen = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Listen</h2>
//             <textarea name="textarea" id="rxData" disabled></textarea>
//             <br></br>
//             <button id="captureStart">Start Listening</button>
//             <button id="captureStop" hidden>Stop capturing</button>
            
//         </div>
//     )
// }

import React from 'react';
import { Helmet } from "react-helmet"
import Typekit from 'react-typekit';
// import { ggwave } from "./ggwave";
// import useScript from 'useScript';

class Listen extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
            
        </div>
//         <Helmet htmlAttributes>
// <html />
// <h2>Listen</h2>
//             <textarea name="textarea" id="rxData" disabled></textarea>
//             <br></br>
//             <button id="captureStart">Start Listening</button>
//             <button id="captureStop" hidden>Stop capturing</button>
            
//         </Helmet>

    );
  }
}

export default Listen;
