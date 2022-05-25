import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';


function App() {
  const [kv, setKv] = useState([]);
  const [rt, setRt] = useState([]);


  const addRt = () => {
    setRt(k => [...k, randColor()]);
  }

  const remRt = () => {
    setRt(k => k.slice(1));
  }


  const addKv = () => {
    setKv(k => [...k, randColor()]);
  }

  const remKv = () => {
    setKv(k => k.slice(1));
  }
//   useEffect(() => {
//     setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
// }, []);

// useEffect(() => {
//     if (null === kv) {
//         return;
//     }
//     localStorage.setItem('kv', JSON.stringify(kv));
// }, [kv]);


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addKv}>ADD []</button>
        <button onClick={remKv}>REMOVE []</button>
       
        <button onClick={addRt}>ADD O </button>
        <button onClick={remRt}>REMOVE O</button>
        <div>[]</div>
        <div className="kvc">
          {
            kv.map((c, i) => <div className="kv" key={i} style={{ backgroundColor: c }}>{"K0"+i}</div>)
          }
        </div>
        <div>O</div>
        <div className="kvc">
          {
            rt.map((c, i) => <div className="rt" key={i} style={{ backgroundColor: c }}>{'A0'+i}</div>)
          }
        </div>
      </header>
    </div>
  );
}
export default App;