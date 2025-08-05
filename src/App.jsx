import React, { useState } from 'react';
import Formulaire from './Formulaire';
import Formulaire2 from './Formulaire2';
import MonButton from './MonButton';
import Formulaire3 from './Formulaire3';
import Formulaire4 from './Formulaire4';
import Counter from './Counter';
import Formulaire5 from './Formulaire5';
import Formulaire6 from './Formulaire6';
import Formulaire7 from './Formulaire7';
import ErrorDialog from './ErrorDialog';
import Exercice from './Exercice';



const App = () => {

  const [isDisabled, setDisabled] = useState(true)

   // Lors de la soumission, on empêche le rechargement de la page et on affiche le message d'erreur.
   
   const [showErreur, setShowErreur] = useState(false)
   
    function handSubmit(e){
       e.preventDefault()
      setShowErreur(true) // quand on soumet le message apparait 
    }

    // creation d'une fonction handleClose  pour faire disparaitre le message quand on appuie sur ok 
function handleClose(){
  console.log("je cache le message");
  setShowErreur(false)  //
}

  return (
    <div>
    <Formulaire/>
    <Formulaire2/>


    <MonButton label='Envoyer' 
    className= "btn"
     onClick={()=> alert('Envoyer')}
      disabled = {isDisabled} />

      <Formulaire3/>
      <Formulaire4/>
      <Counter/>
      <Formulaire5/>
      <Formulaire6/>
      <Formulaire7/>


      <form onSubmit={handSubmit}>
       <input type="text"  />

      <button>Envoyer</button>
      {showErreur && <ErrorDialog onClose={handleClose}/>}
      </form>
     <Exercice/>
      </div>
    
  );
};

export default App;