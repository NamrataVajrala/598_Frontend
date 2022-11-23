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
  
    // Initializing the state 
  }

//   componentDidMount() {
    // const script = document.createElement("script");
    // script.src = "ggwave.js";
    // script.async = true;
    // script.onload = () => this.scriptLoaded();
    // document.body.appendChild(script);

    // window.AudioContext = window.AudioContext || window.webkitAudioContext;
    //         window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

    //         var context = null;
    //         var recorder = null;

    //         // the ggwave module instance
    //         var ggwave = null;
    //         var parameters = null;
    //         var instance = null;

    //         // instantiate the ggwave instance
    //         // ggwave_factory comes from the ggwave.js module
    //         ggwave_factory().then(function(obj) {
    //             ggwave = obj;
    //         });

    //         var txData = document.getElementById("txData");
    //         var rxData = document.getElementById("rxData");
    //         var captureStart = document.getElementById("captureStart");
    //         var captureStop = document.getElementById("captureStop");

    //         // helper function
    //         function convertTypedArray(src, type) {
    //             var buffer = new ArrayBuffer(src.byteLength);
    //             var baseView = new src.constructor(buffer).set(src);
    //             return new type(buffer);
    //         }

    //         // initialize audio context and ggwave
    //         function init() {
    //             if (!context) {
    //                 context = new AudioContext({sampleRate: 48000});

    //                 parameters = ggwave.getDefaultParameters();
    //                 parameters.sampleRateInp = context.sampleRate;
    //                 parameters.sampleRateOut = context.sampleRate;
    //                 instance = ggwave.init(parameters);
    //             }
    //         }

    //         captureStart.addEventListener("click", function () {
    //             init();

    //             let constraints = {
    //                 audio: {
    //                     // not sure if these are necessary to have
    //                     echoCancellation: false,
    //                     autoGainControl: false,
    //                     noiseSuppression: false
    //                 }
    //             };

    //             navigator.mediaDevices.getUserMedia(constraints).then(function (e) {
    //                 mediaStream = context.createMediaStreamSource(e);

    //                 var bufferSize = 1024;
    //                 var numberOfInputChannels = 1;
    //                 var numberOfOutputChannels = 1;

    //                 if (context.createScriptProcessor) {
    //                     recorder = context.createScriptProcessor(
    //                             bufferSize,
    //                             numberOfInputChannels,
    //                             numberOfOutputChannels);
    //                 } else {
    //                     recorder = context.createJavaScriptNode(
    //                             bufferSize,
    //                             numberOfInputChannels,
    //                             numberOfOutputChannels);
    //                 }

    //                 recorder.onaudioprocess = function (e) {
    //                     var source = e.inputBuffer;
    //                     var res = ggwave.decode(instance, convertTypedArray(new Float32Array(source.getChannelData(0)), Int8Array));

    //                     if (res && res.length > 0) {
    //                         res = new TextDecoder("utf-8").decode(res);
    //                         rxData.value = res;
    //                     }

    //                 }

    //                 mediaStream.connect(recorder);
    //                 recorder.connect(context.destination);
    //             }).catch(function (e) {
    //                 console.error(e);
    //             });

    //             rxData.value = 'Listening ...';
    //             captureStart.hidden = true;
    //             captureStop.hidden = false;
    //         });

    //         captureStop.addEventListener("click", function () {
    //             if (recorder) {
    //                 recorder.disconnect(context.destination);
    //                 mediaStream.disconnect(recorder);
    //                 recorder = null;
    //             }

    //             rxData.value = 'The transmitted message will apear here!';
    //             captureStart.hidden = false;
    //             captureStop.hidden = true;
    //         });

    //         captureStop.click();

//   }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "listening.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="auth-form-container">
            {/* <h2>Listen</h2>
            <textarea name="textarea" id="rxData" disabled></textarea>
            <br></br>
            <button id="captureStart">Start Listening</button>
            <button id="captureStop" hidden>Stop capturing</button>
             */}

            
         </div>
    );
  }
}

export default Listen;
