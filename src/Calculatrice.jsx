import React, { useState } from 'react';

const Calculatrice = () => {

    const [operation, setOperation ] = useState({
         addition : false, 
         soustraction  :false, 
         multiplication : false, 
         division : false
    })
   
    const [number, setNumber] = useState({
        a  : 0,
        b  : 0
    })
    function handleA(e){
        setNumber(prev =>({
            ...prev, 
            a : e.target.value
        }))
    }

    function handleB(e){
        setNumber(prev =>({
            ...prev, 
             b : e.target.value
        }))
    }

    function handleSubmit(e){
      e.preventDefault()

      setOperation(({
        addition : true, 
        soustraction : true, 
        multiplication : true,
        division : true
      }))
    
    }
      let add = operation.addition 
      let sous = operation.soustraction
      let multi = operation.multiplication
      let div = operation.division
      let result; 

      let numberA =  number.a 
      let numberB =  number.b

    if(add === "addition"){
        result = numberA  + numberB
    }else if(sous === "soustraction"){
        result = numberA  - numberB
    }else if(multi === "multiplication"){
        result = numberA  * numberB
    }else if(numberB != 0){
        result = numberA  / numberB
    }else{
        result = "Operation impossible"
    }


    return (
        <div>

        <input type="number" onChange={handleA} />

        <select onChange={operation}>

             <option value="addition">+</option>
             <option value="soustraction">-</option>
             <option value="multiplication">X</option>
             <option value="division">/</option>
            
        </select>
         
        <input type="number" onChange={handleB}/>

        <button onClick={handleSubmit}>Calculez</button>
        <p>{result}</p>
           </div>
        
    );
};

export default Calculatrice;