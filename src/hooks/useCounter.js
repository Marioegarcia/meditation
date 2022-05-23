import { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export const useCouter = ( initialState = 1 ) => {
    const {citas,citasGet} = useContext(AuthContext);
    const [counter, setCounter] = useState(initialState); // 10

    const reset = () => {
        
        setCounter( initialState );
    }

    
    const increment = async() => {
        
        if (counter == citas.length  ) {
            
            await citasGet();
            reset();
            return;
        }else{
            setCounter( counter + 1 );
        }
        
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        citas,
        citasGet
    };

}