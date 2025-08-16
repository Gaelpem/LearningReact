import React, { useState } from 'react';
import Calculatrice from './Calculatrice';


const Calcul = () => {

    const [enteredNumber, setEnteredNumber] = useState({
        first : 0, 
        second: 0
    })

    const [choseOperation, setChoseOperation] = useState("addition")

    function handleFirstNumber(e){
        setEnteredNumber(prev=>({
            ...prev, 
            first : e.target.value
        }))
    }

    function handleSecondNumber(e){
        setEnteredNumber(prev=>({
            ...prev, 
            second : e.target.value
        }))
    }

    function handleOperation(e){
         setChoseOperation(e.target.value)
    }
    let result 

    if(choseOperation === "addition"){
        result = Number(enteredNumber.first) + Number(enteredNumber.second)
    }else if(choseOperation === "soustraction"){
        result = enteredNumber.first - enteredNumber.second
    }else if(choseOperation === "multiplication"){
        result = enteredNumber.first * enteredNumber.second
    }else if(enteredNumber.b != 0){
        if(choseOperation === "divsion"){
            result  = enteredNumber.first / enteredNumber.second
        }else{
            result = "Operation impossible"
        }
    }else{
        result = "Vous devez choisir nombre"
    }
    
    return (
        <div>
            <Calculatrice firstNumber={handleFirstNumber}
            secondNumber={handleSecondNumber}
            onOperation={handleOperation}
            />
            <p>{result}</p>
        </div>
    );
};

export default Calcul;