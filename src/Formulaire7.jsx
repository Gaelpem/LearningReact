import React, { useRef } from 'react';
import Preferences2 from './Preferences2';

const Formulaire7 = () => {
    // creation d'un ref va nous permettre d'aller dans un composant enfant 
    const preferenceRef = useRef({})
  // creation d'un fonction handleSubmit , qui va nous servir à soumettre les info 
    function handleSubmit(e){
        e.preventDefault()
        // maintenant on va chercher les donnees dans un composant enfant 
        console.log("Select",preferenceRef.current.selectedProduct );
        //  chercher la fonction reset pour mettre le case vide apres la soumission 
        preferenceRef.current.reset()
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" />
            <Preferences2 ref={preferenceRef}/>
            <button>Envoyer</button>
        </form>
    );
};

export default Formulaire7; 