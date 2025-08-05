import { useState } from 'react'; 
// On importe le hook useState pour gérer l'état (state) du composant

import classes from './Formulaire.module.css'; 
// On importe les classes CSS depuis un fichier CSS Module (chaque classe est scoped/localisée)

// Déclaration du composant fonctionnel
function Form() {
  // État pour stocker l'email saisi
  const [enteredEmail, setEnteredEmail] = useState('');

  // État pour valider ou non l'email (true par défaut = valide)
  const [emailIsValid, setEmailIsValid] = useState(true);

  // État pour stocker le mot de passe saisi
  const [enteredPassword, setEnteredPassword] = useState('');

  // État pour valider ou non le mot de passe
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  // Fonction déclenchée quand l'email change (à chaque frappe)
  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value); // met à jour la valeur de l'email
  }

  // Fonction déclenchée quand le mot de passe change
  function handleChangePassword(event) {
    setEnteredPassword(event.target.value); // met à jour la valeur du mot de passe
  }

  // Fonction exécutée lors de la soumission du formulaire
  function handleSubmitForm(event) {
    event.preventDefault(); // Empêche le rechargement automatique de la page

    // Vérifie que l'email contient un "@"
    const emailIsValid = enteredEmail.includes('@');

    // Vérifie que le mot de passe a au moins 6 caractères (après suppression des espaces)
    const passwordIsValid = enteredPassword.trim().length >= 6;

    // Mise à jour des états de validation
    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid);

    // Si l'un des deux champs est invalide, on arrête l'exécution ici
    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    // Si tout est valide, on pourrait envoyer les données ou afficher un message
    console.log('Inputs are valid, form submitted!');
  }

  // Le JSX (ce qui sera affiché à l'écran)
  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      {/* Bloc de l'email */}
      <div>
        {/* Label de l'email avec style conditionnel selon la validité */}
        <label
          htmlFor="email"
          className={
            !emailIsValid
              ? `${classes.label} ${classes.invalid}` // si invalide → on ajoute la classe d'erreur
              : classes.label // sinon, on garde le style normal
          }
        >
          Your email
        </label>

        {/* Champ de saisie de l'email */}
        <input
          id="email"
          type="email" // champ typé pour email
          onChange={handleChangeEmail} // à chaque changement → on met à jour l’état
          className={
            !emailIsValid
              ? `${classes.input} ${classes.invalid}` // si invalide → style rouge
              : classes.input // sinon style normal
          }
        />
      </div>

      {/* Bloc du mot de passe */}
      <div>
        {/* Label du mot de passe avec style conditionnel */}
        <label
          htmlFor="password"
          className={
            !passwordIsValid
              ? `${classes.label} ${classes.invalid}` // style rouge si invalide
              : classes.label // style normal sinon
          }
        >
          Your password
        </label>

        {/* Champ de saisie du mot de passe */}
        <input
          id="password"
          type="password" // typé "password" (les caractères sont masqués)
          onChange={handleChangePassword} // met à jour l’état à chaque frappe
          className={
            !passwordIsValid
              ? `${classes.input} ${classes.invalid}` // style conditionnel
              : classes.input
          }
        />
      </div>

      {/* Bouton de soumission */}
      <button className={classes.button}>Submit</button>
    </form>
  );
}

export default Form; 
// On exporte le composant pour pouvoir l'utiliser ailleurs dans l'application
