import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/InputData';

function App() {

  const [capital, setCapital] = useState(false)
  const [small, setSmall] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [number, setNumber] = useState(false)
  const [passlength, setPasslength] = useState(10)
  const [fpass, setFpass] = useState('')

  let createPass = () =>{ 
    let charSet = ''
    let finalPass=''
    if(capital || small || symbol || number){
      if(capital) charSet+=UC;
      if(small) charSet+=LC;
      if(symbol) charSet+=SC;
      if(number) charSet+=NC;
      
      for(let i=0;i<passlength;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFpass(finalPass)
      
    }
    else{
      alert("Please Select At Least One Check Box")
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passinput">
          <input type="text" value={fpass} /><button onClick={copyPass}>Copy</button>
        </div>
        <div className="passlength">
          <label>Password Length</label><input type="number" max={20} min={10} value={passlength} onChange={(event)=>setPasslength(event.target.value)} />
        </div>
        <div className="passlength">
          <label>Include Capital Letters</label><input type="checkbox" checked={capital} onChange={() => setCapital(!capital)} />
        </div>
        <div className="passlength">
          <label>Include Small Letters</label><input type="checkbox" checked={small} onChange={() => setSmall(!small)} />
        </div>
        <div className="passlength">
          <label>Include Symbols</label><input type="checkbox" checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>
        <div className="passlength">
          <label>Include Numbers</label><input type="checkbox" checked={number} onChange={() => setNumber(!number)} />
        </div>
        <button type="submit" className='btn' onClick={createPass} >Generate Password</button>
      </div>
    </>
  );
}

export default App;
