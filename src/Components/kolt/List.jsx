// import { useState } from "react";

import Ex from "./Ex";

function List({exes, setDeleteData, setModalData}) {

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>List of COLT</h2>
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
                    exes ? exes.map(ex => <Ex key={ex.id} ex={ex} setDeleteData={setDeleteData} setModalData={setModalData}></Ex>) : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;