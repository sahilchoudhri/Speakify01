import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';



function App() {

  const[textToCopy , setTextToCopy] = useState();

  const[isCopied , setCopied] = useClipboard(textToCopy , "trascript");

  const startListening = () => 
  {
     SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  }
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) 
  {
    return null;
  }
  return (
    <div className="App">

      <div className='container '>

        <h2 >Speech To Text Converter Project</h2>
        <p> A React Hook that converts speech from your microphone into text and makes it available to your componets</p>

        <div className='main-content' onClick={() => setTextToCopy(transcript)}>
           {transcript} 
        </div>

        <div className='btn-style'>

        <button onClick={setCopied}>
           Was it copied? (isCopied ? "Yes!👍🏻" : "No 👎🏻") </button>
          <button onClick={startListening}> Start Listening </button>
          <button onClick={SpeechRecognition.stopListening}> Stop Listening </button>
      
        </div>

      </div>


    </div>
  );
}

export default App;
