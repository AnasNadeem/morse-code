import React, { useState, useEffect } from 'react';
import './App.css';

function MorseCode(){
  const [text, fullText] = useState('');

  function covertCode(textInp){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const morseDict = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

    morseValue = ""
    for(let i=0;i<textInp.length;i++){
      letter = text[i]
      for(const letter of alphabet){
        morseValue+=morseDict[i]
        console.log(morseDict[i])
      }
    }

    return morseValue;
  }


  return (
    <div>
      <label>Enter text below:</label>
      <input type="text" id="textInp" onChange={() => fullText(textInp.value)}></input>
      <h2>Output</h2>
      <p id="outputPara">{(text) => convertCode(text)}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      This is Morse code translator app.
      <MorseCode />
    </div>
  );
}

export default App;