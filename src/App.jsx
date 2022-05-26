import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
// import { v4 as uuidv4 } from 'uuid'; https://docs.google.com/document/d/1m5Co9Lv-n7Mm3IXwsnhWmNaGvbRTImcpp52fCIjUHnk/edit



function App() {

    const [text, setText] = useState('');
    const [kv, setKv] = useState([]);

  
 const inputText = e => {
        setText(e.target.value);
        console.log(e.target.value)
    }

  


    return (
        <div className="App">
            <header className="App-header">
                <fieldset>
                    <legend>TEXT</legend>
                    <input type="text" onChange={inputText} value={text}></input>
                </fieldset>
                <button onClick={inputText}>ADD</button>
                <div className="kvc">
                
                {
                    kv ? kv.map((c, i) => <div className="kv" key={i} style={{backgroundColor:c}}>{i}</div>) : null
                }
                </div>
            </header>
        </div>
    );
}

export default App;