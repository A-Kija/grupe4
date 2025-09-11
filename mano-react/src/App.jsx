import { useState, useRef } from 'react';
import './App.scss';
import './buttons.scss';
import randomColor from './Functions/randomColor';
import random from './Functions/random';
import { v4 } from 'uuid';

function App() {

    const [sq, setSq] = useState([]);

    const rowCounter = useRef(1);


    const addSq = _ => {
        setSq(s => [...s, {
            id: v4(),
            color: randomColor(),
            mark: random(1000, 9999),
            row: rowCounter.current++,
            show: true,
            spin: false
        }]);
    }

    const remSq = _ => {
        setSq(s => {
            const copy = [...s];
            copy.pop();
            return copy;
        });
    }


    const sortAsc = _ => {
        setSq(s => s.toSorted((a, b) => a.mark - b.mark));
    }

    const sortDesc = _ => {
        setSq(s => s.toSorted((a, b) => b.mark - a.mark));
    }

    const sortDefault = _ => {
        setSq(s => s.toSorted((a, b) => a.row - b.row));
    }

    const more5000 = _ => {
        setSq(s => s.map(el => el.mark > 5000 ? { ...el, show: true } : { ...el, show: false }));
    }

    const showDefault = _ => {
        setSq(s => s.map(el => ({ ...el, show: true })));
    }

    const spinIt = id => {
        setSq(s => s.map(el => el.id === id ? { ...el, spin: !el.spin } : el));
    }


    return (
        <>
            <div className="sq-bin">
                {
                    sq.map(el => el.show
                        ?
                        <div
                            className={'sq' + (el.spin ? ' spin' : '')}
                            key={el.id}
                            style={{
                                borderColor: el.color,
                                background: el.color + '80'
                            }}
                            onClick={_ => spinIt(el.id)}
                        >{el.mark}</div>
                        :
                        null)
                }
            </div>

            <hr />
            <button className="blue" onClick={addSq}>+[]</button>
            <button className="red" onClick={remSq}>-[]</button>
            <button className="yellow" onClick={sortAsc}>123...9</button>
            <button className="yellow" onClick={sortDesc}>987...1</button>
            <button className="yellow" onClick={sortDefault}>NAT...</button>
            <button className="teal" onClick={more5000} >&gt;5000</button>
            <button className="teal" onClick={showDefault}>&lt;[]&gt;</button>
        </>
    );
}

export default App;