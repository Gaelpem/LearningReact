import React, { useRef, useState } from 'react';

const Counter = () => {
    
    const [counter1, setCounter1] = useState(0)

    const counterRef = useRef(0)
    let counter2 = 0 

    function handleCounter(){
        setCounter1(1); //  Change le state => provoque un re-render
        counterRef.current = 1;  //  Change la ref (valeur retenue mais pas affichée sauf si on fait re-render)
        counter2 = 1  // Change la variable normale (perdue au re-render)
    }
    return (
        <div>
            <button onClick={handleCounter}>Incrementer</button>
            <ul>
                <li>Counter 1 : {counter1}</li>
                <li>Counter 2 : {counterRef.current}</li>
                <li>Counter 3 : {counter2}</li>
            </ul>
        </div>
    );
};

export default Counter;