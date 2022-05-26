import { useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import randColor from './Functions/randColor';


function App() {

    const [avys, setAvys] = useState([]);
    const newA = () => {
        const avis = {
            id: uuidv4(),
            color: randColor(),
            where: 'ganykla'
        }
        setAvys(a => [...a, avis])
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>PRAKTIMUMAS</h1>
                <div className="kvc">
                    {
                        avys.map(a => <div key={a.id} className="kv"style={{background:a.color}}></div>)
                    }
                </div>
                <button onClick={newA}>Nauja avis</button>
            </header>
        </div>
    )
}

export default App;
