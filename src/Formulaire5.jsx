import React, { useRef, useState } from 'react';

const Formulaire5 = () => {

    const [counter, setCounter] = useState(0)

   const essaieRef = useRef(0)



   function handleClick(e){
    
    e.preventDefault()

    setCounter(counter + 1)

    essaieRef.current += 1; 
    console.log("Tentative numero : ", essaieRef.current);

   }
    return (
        <div>
     
     <p>Counter : {counter}</p>
      
    <button onClick={handleClick}>Incremente</button>   
    </div>
    );
};

export default Formulaire5;