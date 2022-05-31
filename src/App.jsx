// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
import List from './Components/crud/list';
// import './App.scss';
import getId from './Functions/getId';
import { create } from './Functions/localStorage';


function App() {
    const [exes, setExes] = useState(null)

    const [createData, setCreateData] = useState(null);
    //read
    useEffect(() => {

    }
    )
    useEffect(() => {
        if (null === createData) {
            return
        }
        create(createData);
        setExes(read());
    }, [createData])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreateData={setCreateData}></Create>
                    </div>
                    <div className="col-8">
                        <List></List>
                    </div>
                </div>
            </div>
        </>
    );


}
export default App;