import React, { forwardRef, useImperativeHandle, useState } from 'react';
// on cree forwardRed permet au  composant d'accepter une ref du parent 
const Preferences2  = forwardRef((props , ref)=>{
       // creation de 2 states qui va nous permettre de mettre a jour les cases a cocher 
       // Je vais les mettre  en par default en false c'est dire vide 
       const [wantNewPro, setWantNewPro] = useState(false)
       const [wantUpdatePro,  setWantUpdatePro] = useState(false)

       // creation de la reset() pour permettre lors de la rechargement de la page les cases doivent etre vide 
         function reset(){
            setWantNewPro(false)
            setWantUpdatePro(false)
         }
        
       //useImperativeHandle va nous permettre d'inserer les donnee qu'on veut que le parent prennent
         useImperativeHandle(ref,()=>{
             return {
                reset : reset, 
                // creation de l'objet selectedProduct pour mettre les 2 stats 
                 selectedProduct  : {
                    new : wantNewPro, 
                    update : wantUpdatePro
                 }
             }
         })
         return(
            <div>
                <label htmlFor="">New Product</label>
                <input type="checkbox"
                checked = {wantNewPro}
                onChange={() => setWantNewPro(prev => !prev)}
                 />

                <label htmlFor="">Update Product</label>
                <input type="checkbox"
                checked = {wantUpdatePro}
                onChange={() =>setWantUpdatePro(prev => !prev)}
                 />
            </div>
         )
})
export default Preferences2;