
import './App.css';
import React, { useState, useEffect } from 'react';

const drumPads = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Apoen-HH',
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Kick-n-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]

function App() {
  const [active, setActive] = useState('')
  
  function handleKeyPress(event){
    playSound(event.key.toUpperCase())
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function playSound(selector){
    const audio = document.getElementById(selector);
    setActive(selector);
    // setTimeout((() => setActive(false)), 200);
    audio.play();
  }

  return (
    <div className="App">
     <div id='drum-machine'>
        <div id='drum-pads'>
          {drumPads.map((drumPad) => (
            <div 
            className={`drum-pad ${active}`} 
            id={drumPad.id}
            onClick={() => {playSound(drumPad.keyTrigger)}}
            key={drumPad.id}
            >
              {drumPad.keyTrigger}
              <audio
              className='clip'
              id={drumPad.keyTrigger}
              src={drumPad.url}
              ></audio>
              </div>
          ))}
        </div>
        <div id='controller'>
        <div id="display">
        <h2>
          {active}
        </h2>
      </div>
        </div>
     </div>
    </div>
  );
}

export default App;
