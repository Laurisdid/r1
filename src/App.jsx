import "./App.scss";
import axios from "axios";
import { useEffect, useReducer } from "react";
import randColor from "./Functions/randColor";
import booksReducer from "./Reducers/booksReducer";

function App() {
  const [books, dispachBooks] = useReducer(booksReducer, []);

  useEffect(() => {
    axios.get("http://in3.dev/knygos/").then((res) => {
      const action = {
        payload: res.data,
        type: "get_from_server",
      };
      console.log(res.data);
      dispachBooks(action);
    });
  }, []);
  const sortAZ = () => {
    const action = {
      type: "sortAZ",
    };
    dispachBooks(action);
  };
  const sort17 = () => {
    const action = {
      type: "sort17",
    };
    dispachBooks(action);
  };
  const sortDEF = () => {
    const action = {
      type: "sortDEF",
    };
    dispachBooks(action);
  };
  const bla = n => {
    const action = {
        type: 'hide',
        payload: n
    }
    dispachBooks(action);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ backgroundColor: randColor() }}>Welcome to Class</h1>
        <div>
          <div>
            <button>rusuioti</button>
            <button onClick={sortAZ}>Sort AZ</button>
            <button onClick={sort17}>Sort 17</button>
            <button onClick={sortDEF}>Reset Sort</button>
          </div>
          <div> </div>
        </div>
        <div>
          {" "}
          {books.length ? (
            books.map((b) => (
              <div onClick={() => bla(b.id)} style={{ backgroundColor: randColor() }} key={b.id}>
                {b.title} <i>{b.price} EUR</i>
                <div>
                  <img src={b.img} alt="a"></img>
                  <div>author : {b.author}</div>
                </div>
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
