import React, { useRef } from 'react';

const Exercice = () => {
      // 🔧 Création de deux références pour accéder directement aux éléments du DOM (input + select)
     const nameRef = useRef()
     const selectRef = useRef(null)

 
     function handleSubmit(e){
         e.preventDefault()
         // creation d'une constante name pour voir ce que l'utilisateur à frapper 
         const name = nameRef.current.value

         // creatiojn d'une constante select pour verifier qcq l'utilisateur à selectionner 
         const select = selectRef.current.value

         console.log("Entered name : ", name);
         // condition pour verifier quel option l'utilisateur à selectionner pour l'afficher dans la console 
         if(select === "mastery"){
            console.log("Selectec prgram : ", select);
         }

     }



    return (

        <form onSubmit={handleSubmit}>
              {/* Connexion des Refs aux éléments DOM*/}
            <label htmlFor="">Your name</label>

            <input type="text"
             ref={nameRef} 
            />
            <label htmlFor="">Choose your programme</label>

           <select ref={selectRef}>

           <option value="">choose</option>
           <option value="mastery">mastery</option>
        </select>
         <button>Submit</button>
        </form>
    );
};

export default Exercice;