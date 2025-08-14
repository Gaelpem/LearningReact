import React, { useState } from 'react'; // Import du module React et du hook useState

import classes from './Formulaire.module.css' // Import des styles CSS Modules (classe .invalids ici)

const Formulaire = () => {
  // State pour stocker les valeurs entrées par l'utilisateur
  const [enterInput, setEnterInput] = useState({
    emailEnter : "", 
    passwordEnter : ""
  })

  // State pour savoir si les champs sont invalides ou non
  const [invalidInput, setInvalidInput] = useState({
    emailInvalid : false, 
    passwordInvalid : false 
  })

  // Fonction qui met à jour l'email dans le state à chaque frappe
  function handleEmail(e){
    setEnterInput(prev => ({
      ...prev, // on garde les autres valeurs (ici le mot de passe)
      emailEnter: e.target.value // on met à jour seulement l'email
    }))
  }

  // Fonction qui met à jour le mot de passe dans le state à chaque frappe
  function handlePassword(e){
    setEnterInput(prev => ({
      ...prev,
      passwordEnter: e.target.value // on met à jour seulement le mot de passe
    }))
  }

  // Fonction appelée quand l’utilisateur soumet le formulaire
  function handleSubmitForm(e){
    e.preventDefault(); // Empêche le rechargement de la page

    // Vérifie que l’email contient un "@"
    let emailVerif = enterInput.emailEnter.includes("@");

    // Vérifie que le mot de passe contient au moins 6 caractères
    let passwordVerif = enterInput.passwordEnter.length >= 6;

    // Met à jour le state pour afficher ou non les messages d’erreur
    setInvalidInput({
      emailInvalid : !emailVerif, // si emailVerif est false, alors erreur = true
      passwordInvalid : !passwordVerif
    });

    // Si un champ est invalide, on arrête ici, on ne fait rien d’autre
    if (!emailVerif || !passwordVerif) {
      return; 
    }

    // Ici tu pourrais ajouter une action si tout est bon, comme envoyer les données
    // Par exemple : console.log("Formulaire valide !")
  }

  // Le JSX du formulaire affiché à l'écran
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="">Your email</label>

      {/* Input email contrôlé avec la valeur du state */}
      <input
        type="text"
        value={enterInput.emailEnter}
        onChange={handleEmail}
      />
      <label htmlFor="">Your password</label>

      {/* Input mot de passe contrôlé avec la valeur du state */}
      <input
        type="text"
        value={enterInput.passwordEnter}
        onChange={handlePassword}
      />

      <button>Verifier</button> {/* Bouton de validation */}

      {/* Si l’email est invalide, on affiche un message avec un style spécial */}
      {invalidInput.emailInvalid && (
        <p className={classes.invalids}>Email invalid</p>
      )}

      {/* Si le mot de passe est invalide, on affiche aussi un message */}
      {invalidInput.passwordInvalid && (
        <p className={classes.invalids}>Password invalid</p>
      )}
    </form>
  );
};

export default Formulaire; // Export du composant pour l'utiliser ailleurs
