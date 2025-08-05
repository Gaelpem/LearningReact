import React, { useEffect } from 'react';
import { useRef } from 'react';
const Formulaire4 = () => {

    // creation d'un inputRef pour accéder à l'input
    // input est un objet avec une propriéte current 
    const inputRef = useRef()

   // creation d'un hook useEffect, qui s'execute s'execute juste apres que le composant soit monté. 

    useEffect(()=>{
        inputRef.current.focus()
    }, [])  // tableau vide = le code s'execute une seule fois apres le 1er rendu

    return (
        <div>
      <h2>Contacte-moi</h2>
      <input type="text" ref={inputRef} placeholder="Tape ton prénom" />
    </div>
    );
};

export default Formulaire4;