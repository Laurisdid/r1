
import { useReducer } from 'react';
import ld from './Reducers/ld';
import './App.scss';

const masyvas = [
    {id:3, name: 'Peter', bid: 487.77, date: '2022-06-01T10:37'},
    {id:7, name: 'Mary', bid: 125.33, date: '2022-06-01T11:37'},
    {id:8, name: 'Ūkas', bid: 78.25, date: '2022-06-01T09:22'},
    {id:9, name: 'Petras Dainorius', bid: 487.77, date: '2022-06-01T08:13'}
];

function App() {

const [list,setList]=useReducer(ld,masyvas)

  return (
    <div className="App">
      <header className="App-header">
       <h1>Random sort</h1>
       <select>
        <option value="date_asc">date asc</option>
        <option value="date_desc">date desc</option>
        <option value="bid_asc">bid asc</option>
        <option value="bid_desc">bid desc</option>
        <option value="name_asc">name asc</option>
        <option value="name_desc">name desc</option>
        <option value="random">random</option>

       </select>
       {
        list.map(b=>(
            <div classname='kvc'>
                <span>id:{b.id}</span>
                <span>name:{b.name}</span>
                <span>bid:{b.bid}</span>
                <span>date:{b.date}</span>
            </div>
        ))
       }
      </header>
    </div>
  );
}

export default App;
