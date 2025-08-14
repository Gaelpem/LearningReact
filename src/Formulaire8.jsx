import React, { useState } from 'react';

const Formulaire8 = () => {
  //creation d'un stocke formulaire pour controler les champs comme email et password``

  const [error, setError] = useState(false)// On met false par defaut 

  const [formulaire,  setFormulaire] = useState({
         email : false, 
         password :false
  })
    
  function handleEmail(e){
     setFormulaire(prev =>({
         ...prev, 
          email : e.target.value
     }))
     if(error)setError(''); 
  }

  function handlePassword(e){
    setFormulaire(prev =>({
        ...prev, 
        password : e.target.value 
    }))
    if(error)setError(''); 
  }
  
  function handleFormulaire(e){
     e.preventDefault() 
      
     const emails = formulaire.email.trim()
     const mp = formulaire.password.trim()

     if(!emails.includes("@")){
        setError("L'email doit contenir @")
        return; 
     }


     if((!mp) || (!emails)){
      setError("Vous devez remplir tous les champs")
      return ; 
     }

  }

    return (
       
          <form onSubmit={handleFormulaire}>
            <label htmlFor="">Email : </label>

            <input type="text" 
            onChange={handleEmail}/>

           <label htmlFor="">Password : </label>
            <input type="text" 
            onChange={handlePassword}/> 
            {error && <p style={{ color : "red"}}>{error}</p>}

            <button>Envoyer</button>
            </form>
    );
};

export default Formulaire8;