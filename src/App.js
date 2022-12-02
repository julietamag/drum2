
import './App.css';
import React, { useState, useEffect } from 'react';

const drumPads = [
  {
    borderColor: '#8874BF',
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chanchito Hermoso',
    url: "./resources/audio/chanchito_hermoso.mp3"
  },
  {
    borderColor: '#6223BD',
    keyCode: 87,
    keyTrigger: 'W',
    id: 'OiOiOi',
    url: './resources/audio/OIoi1.mp3'
  },
  {
    borderColor:'#5141D1',
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Testraño Porito',
    url: "./resources/audio/testrañoPorito.mp3"
  },
  {
    borderColor: '#057AEB',
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Te Full Amo',
    url: "./resources/audio/teFullAmo.mp3"
  },
  {
    borderColor: '#0F64C7',
    keyCode: 83,
    keyTrigger: 'S',
    id: 'chanchuChan',
    url: "./resources/audio/chanchuChan.mp3"
  },
  {
    borderColor: '#42758A',
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Mimos Infinitos',
    url: "./resources/audio/mimos_infinitos.mp3"
  },
  {
    borderColor: '#9FD458',
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Vampira P',
    url: './resources/audio/vampira_puta.mp3'
  },
  {
    borderColor: '#5ED88E',
    keyCode: 88,
    keyTrigger: 'X',
    id: 'puPi',
    url: "./resources/audio/puPi.mp3"
  },
  {
    borderColor: '#85DCC2',
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Quien es mi bb',
    url: "./resources/audio/quien_es_mibb.mp3"
  }
]

function App() {
  const [active, setActive] = useState('');
  const [volume, setVolume] = useState(1);
  
  function handleKeyPress(event){
    const key = event.key.toUpperCase()
    let pressedKey = document.getElementById(key)
    if(pressedKey === null) return pressedKey = 'not correct key'
    if(key === pressedKey.id){
      playSound(key)
      handleColor(event.keyCode)
    } 
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function playSound(selector){
    const audio = document.getElementById(selector);
    setActive(selector);
    audio.volume = volume;
    console.log(audio.volume)
    audio.play();
  }
  
  function handleColor(color){
    const key = document.getElementById(color)
    key.style.backgroundColor = '#8D99AE';
    setTimeout(() => key.style.backgroundColor = 'white', 200)
  }

  return (
    <div className="App">
      <h1 id='mainTitle'>Chichu On the Drums</h1>
     <div id='drum-machine'>
        <div id='drum-pads'>
          {drumPads.map((drumPad) => (
            <div 
            style={{border: `5px solid ${drumPad.borderColor}`}}
            className='drum-pad'
            id={drumPad.keyCode}
            key={drumPad.keyCode}
            onClick={() => {
              playSound(drumPad.keyTrigger)
              handleColor(drumPad.keyCode)
            }}
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
      <div id='volumeSlider'>
        <input
        className="slider" 
        id="myRange"
        type='range'
        step='0.01'
        max='1'
        min='0'
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        > 
        </input>
        <h2>- VOLUME +</h2>
      </div>
        </div>
     </div>
    </div>
  );
}

export default App;
