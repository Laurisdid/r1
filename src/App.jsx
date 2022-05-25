import { useEffect, useRef, useState } from 'react';
import './App.scss';
import rand from './Functions/rand';

function App() {

    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

    // PIRMAS KROVIMAS
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
    }, []);

    // UZSAUGOS POKYCIUS
    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
        istorija.current.unshift(kv);
        console.log(istorija.current)
    }, [kv]);


    const prideti = () => {
        const kiekis = rand(5, 10);
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push('^o^');
        }
        setKv(k =>
             null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
    }

    const valyti=()=>{
        setKv([]);
    }

    const atgal =()=>{
        if(istorija.current.length ===0){
            setKv([])
        }
        setKv(istorija.current.shift());
        console.log(istorija.current)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>PRAKTIMUMAS</h1>
                    <div className="kvc">
                        {
                            kv ? kv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
                        }
                    </div>

                <button onClick={prideti}>Pridėti</button>
                <button onClick={valyti}>isvalyti</button>
                <button onClick={atgal}>atgal</button>
            </header>
        </div>
    );
}

export default App;