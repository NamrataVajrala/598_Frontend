import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Listen } from "./Listen";
import { useScript } from './useScript';
// import { useEffect } from "react";


// export const Listena = (props) => {
    

//     return (
//         <div className="auth-form-container">
//             <h2>Listen</h2>
//             <textarea name="textarea" id="rxData" disabled></textarea>
//             <br></br>
//             <button id="captureStart">Start Listening</button>
//             <button id="captureStop" hidden>Stop capturing</button>
//             {useScript("ggwave.js")}
//             {useScript("listening.js")}

            
//          </div>
//     )
// }

// var __html = require('./all.html');
// var template = { __html: __html };
export const Listena = (props) => {

    return(
        <div></div>
        // <div dangerouslySetInnerHTML={ {__html: template} } />
    //   <div dangerouslySetInnerHTML={template} />
    );
  };

// var htmlContent = require('./all.html');

// // or you can also write
// // import htmlContent from 'path/to/html/file.html');


// export function MyComponent() {
//     return (
//         <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
//     );
// }