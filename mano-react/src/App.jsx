import { useState } from 'react';
import './App.scss';
import './buttons.scss';

function App() {

    const mygtukas1 = _ => {
        console.log('CLICK 1');
    }

    const mygtukas2 = e => {
        console.log('CLICK 2', e.target.name);
    }

    const kitiMygtukai = spalva => {
        console.log('CLICK', spalva);
    }

    const mygtukas3 = (e, kas) => {
        console.log('CLICK 2', e.target.name, kas);
    }

    const [counter, setCounter] = useState(1);

    const plus1 = _ => {
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
        console.log(counter);
    }

   


    return (
        <>
            <button className="green" onClick={mygtukas1}>GO</button>
            <button className="red" name="raudonas" onClick={mygtukas2}>GO</button>

            <button className="yellow" onClick={_ => kitiMygtukai('Geltonas')}>GO</button>
            <button className="black" onClick={_ => kitiMygtukai('Juodas')}>GO</button>
            <button className="blue" onClick={_ => kitiMygtukai('Mėlynas')}>GO</button>

            <button className="teal" name="keista" onClick={e => mygtukas3(e, 'spalva')}>GO</button>

            <hr/>
            <h2>{counter}</h2>
            <button className="green" onClick={plus1}>+1</button>
        </>
    );
}

export default App;