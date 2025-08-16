import React from 'react';

const Calculatrice = ({firstNumber, secondNumber, onOperation}) => {
    return (
        
        <div>
            <input type="number"  onChange={firstNumber}/>
            <select onChange={onOperation}>
                <option value="addition">+</option>
                <option value="soustraction">-</option>
                <option value="multiplication">X</option>
                <option value="division">/</option>
            </select>
            <input type="number"  
            onChange={secondNumber}/>
            
        </div>
    );
};

export default Calculatrice;
