import React, { useState } from 'react';
import Preferences from './Preferences';

const Formulaire6 = () => {
    // on cree 2 state pour gerer les cases à caucher , on les met par default false (case vide)
    const [wantNewInfo, setWantNewInfo] = useState(false)
    const [wantNewUpdate, setWantNewUpdate] = useState(false)
       

    // je cree une function pour gerer le changement des state
     function handleChangement(selection){
        if(selection === 'pref-new'){
            setWantNewInfo(prev => !prev) // false => true
        }else if (selection === 'pref-update'){
            setWantNewUpdate(prev => !prev) // false => true 
        }
     }


        // non cree function reset() lors de la soumission le case soit vide 
        function reset(){
        setWantNewInfo(false)
        setWantNewUpdate(false)
      }

      
      

        function handleSubmit(e){
        e.preventDefault()// empeche le rechargement de la page
        console.log('Preferences', wantNewInfo, wantNewUpdate);

        // On réinitialise les cases après soumission
        reset(); 
        
      }


    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
         <input type="text" />
       {/* On passe les props à l'enfant : les deux états + la fonction de gestion des changements */}w
         <Preferences newProdInfo={wantNewInfo} updateProdInfo={wantNewUpdate} onUpdateInfo={handleChangement} />
         <button>Envoyer</button>
        </form>
    );
};

export default Formulaire6;