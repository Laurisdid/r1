import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';

function App() {

    // const [books, setBooks] = useState([]);
    const [books, dispachBooks] = useReducer(booksReducer, []);

    useEffect(() => {
        axios.get('http://in3.dev/knygos/')
        .then(res => {
            dispachBooks({payload:res.data, type:'get_from_server'})
        })
    }, []);
    const filter = () => {
        const action = {
            type: 'sort'
        }
        dispachBooks(action);
    }
    const DefSortList = () => {
        const action = {
            type: 'DefSortList'
        }
        dispachBooks(action);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>BOOKS REDUCER</h1>
                <button onClick={filter}>sort</button><button onClick={DefSortList}>undo sort</button>
                <div>
                    {
                       books.length ? books.map(b => <div key={b.id}>{b.title}<i>{b.price} EUR</i></div>) : <h2>Loading...</h2>
                    }
                </div>
            </header>
        </div>
    );
}
export default App;