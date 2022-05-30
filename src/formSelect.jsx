import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
// import { v4 as uuidv4 } from 'uuid';



function App() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('grey');
    const [select, setSelect] = useState('tree');
    const [select1, setSelect1] = useState('one');
    const [select2, setSelect2] = useState('two');
    const [cb, setCb] = useState({a: false, b: false, c: true, d: true});
    const [radio, setRadio] = useState('c');

    const inputText = e => {
        setText(e.target.value);
    }

    const inputColor = e => {
        setColor(e.target.value);
    }

    // setInterval(() => setColor(randColor()), 200);
    

    const cbClick = c => {
        setCb(checkBox => ({...checkBox, [c]: !checkBox[c]}));
    }

    return (
        <div className="App">
            <header className="App-header" style={{background:select}}>
                <fieldset>
                    <legend>TEXT</legend>
                    <input type="text" onChange={inputText} value={text}></input>
                </fieldset>
                {/* <fieldset>
                    <legend>T-COLOR</legend>
                    <input type="color" onChange={inputColor} value={color}></input>
                </fieldset> */}
                <fieldset>
                    <legend>SELECT color</legend>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        <option value="white">white</option>
                        <option value="pink">pink</option>
                        <option value="grey">grey</option>
                        <option value="green">green</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>SELECT</legend>
                    <select value={select1} onChange={e => setSelect1(e.target.value)}>
                        <option value="one">Vienas</option>
                        <option value="two">Du</option>
                        <option value="tree">Trys</option>
                        <option value="ten">Daug</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>SELECT</legend>
                    <select value={select2} onChange={e => setSelect2(e.target.value)}>
                        <option value="one">Vienas</option>
                        <option value="two">Du</option>
                        <option value="tree">Trys</option>
                        <option value="ten">Daug</option>
                    </select>
                </fieldset>
            
            </header>
        </div>
    );
}

export default App;