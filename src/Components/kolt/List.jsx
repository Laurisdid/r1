import coltReducer from "../../Reducers/coltReducer";
import { useReducer } from "react";
import Ex from "./Ex";

function List({exes, setDeleteData, setModalData}) {
    const [colts, dispachColt] = useReducer(coltReducer, []);

    const sortkm = () => {
        const action = {
          type: "sortKm",
        };
        dispachColt(action);
      };
      const reload = () => {
        const action = {
          type: "reload",
        };
        dispachColt(action);
      };
      
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>List of COLT</h2><button>sort by id</button><button onClick={sortkm}>sort by km</button><button onClick={reload}>reload</button>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <div>  <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>id  .</b>
                    <b>   name   . </b>
                    <b> lastTime .</b>
                    <b>totalKm  .</b>
                    <b>status  .</b>
                    <b>place  .</b>
                </div>
            </div>
        </li></div>
                    {
                    exes ? exes.map(ex => <Ex 
                    key={ex.id} 
                    ex={ex} 
                    setDeleteData={setDeleteData} 
                    setModalData={setModalData}
                    ></Ex>) : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;