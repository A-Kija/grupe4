import { createContext, useState } from 'react';
import randColor from '../Functions/randomColor';


const ColorsContext = createContext();


export const Colors = ({children}) => {

       const [color, setColor] = useState('#3f7428');


    return (
        <ColorsContext.Provider value={{
            color,
            setColor,
            randColor
        }}>
            {children}
        </ColorsContext.Provider>
    );



}





export default ColorsContext;