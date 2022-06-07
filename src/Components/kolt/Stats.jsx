import { useState } from "react";
import Ex from "./Ex";


function Stats(ex) {




let sum
let scut
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Statistic</h2>
                <h3>{}</h3>
            </div>
            <h3>Total KM</h3>
            <input readOnly value={sum}></input>
            <h3>Total colts</h3>
            <input readOnly value={scut}></input>
            

        </div>
    );
}

export default Stats;