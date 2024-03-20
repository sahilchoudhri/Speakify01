import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";




function App() {

  const[textToCopy , setTextToCopy] = useState();

  const[isCopied , setCopied] = useClipboard(textToCopy , {
    successDuration: 1000
  });

  const [darkMode, setDarkMode] = useState(false);
  const startListening = () => 
  {
     SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  }
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) 
  {
    return null;
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    
      <div className= {`container ${darkMode ? 'dark-mode' : ''}`}>

        <h2  >SPEEKIFY</h2>
        {/* <p> A React Hook that converts speech from your microphone into text and makes it available to your componets</p> */}
        <p>Experience the power of speech-to-text conversion with our cutting-edge ReactJS project. Simply speak into your microphone and watch as your words are transformed into text in real-time. Whether you're dictating notes, transcribing interviews, or simply exploring the possibilities of voice technology, our project makes it easy and intuitive. Get started now and unlock a new dimension of productivity!</p>


        <div className='main-content' onClick={() => setTextToCopy(transcript)} >
           {transcript} 
        </div>

        <div className='btn-style'>

        <button onClick={setCopied}>
          {isCopied ? 'Copied!' : 'Copy to clipboard'}
          </button>
           <button onClick={startListening}>Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>

        <div className='dark-mode-toggle' onClick={toggleDarkMode}>
        {
          darkMode ? <MdOutlineLightMode background-color='#333' text='#fff' />  : <MdOutlineDarkMode background-color= 'fff' text='#333' />
        }
        </div>
      </div>
  );
}

export default App;
