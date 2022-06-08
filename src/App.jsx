import { useReducer } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
import listReducer from './Reducers/listReducer';


function App() {

    const [list, listDispach] = useReducer(listReducer, []);

    const newList = () => {
        const action = {
            type: 'new'
        }
        listDispach(action);
    }

    const sortList = () => {
        const action = {
            type: 'sort'
        }
        listDispach(action);
    }

    const f5000 = () => {
        const action = {
            type: 'f5000'
        }
        listDispach(action);
    }

    const f4000 = () => {
        const action = {
            type: 'f4000'
        }
        listDispach(action);
    }
    const filt = () => {
        const action = {
            type: 'filt'
        }
        listDispach(action);
    }
    const back = () => {
        const action = {
            type: 'back'
        }
        listDispach(action);
    }
    const add = () => {
        const action = {
            type: 'add'
        }
        listDispach(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>REDUCER</h1>
                <div className="kvc">
                <button onClick={newList}>New List</button>
                <button onClick={sortList}>Sort List</button>
                <button onClick={f5000}>Filter more 5000</button>
                <button onClick={f4000}>Filter less 4000</button>
                <button onClick={filt}>show all</button>
                <button onClick={back}>back</button>
                <button onClick={add}>add</button>
                </div>
                <div className="kvc">
                    {
                    list.map((o, i) => o.show ? <div key={i} className="kv" style={{backgroundColor:o.color}}><i>{o.number}</i></div> : null)
                    }
                </div>

            </header>
        </div>
    );

    

}

export default App;