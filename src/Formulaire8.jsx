import React, { useState } from 'react';

const Formulaire8 = () => {
  // 🔹 État pour stocker le message d'erreur (string ou false si pas d'erreur)
  const [error, setError] = useState(false); // false = aucune erreur affichée

  // 🔹 État pour stocker les valeurs du formulaire (inputs contrôlés)
  const [formulaire, setFormulaire] = useState({
    email: '',     // ⚠ devrait être '' par défaut au lieu de false
    password: ''   // ⚠ idem, mettre '' pour éviter des bugs
  });

  // 🔹 Fonction déclenchée quand on tape dans l'input email
  function handleEmail(e) {
    setFormulaire(prev => ({
      ...prev, // On copie les autres valeurs (spread operator)
      email: e.target.value // On remplace seulement l'email
    }));

    // 🔹 Si une erreur est affichée, on la supprime dès que l'utilisateur modifie
    if (error) setError('');
  }

  // 🔹 Fonction déclenchée quand on tape dans l'input mot de passe
  function handlePassword(e) {
    setFormulaire(prev => ({
      ...prev, // On garde l'email tel qu'il est
      password: e.target.value // On modifie seulement le password
    }));

    // 🔹 On efface l'erreur si elle est affichée
    if (error) setError('');
  }

  // 🔹 Fonction déclenchée à l'envoi du formulaire
  function handleFormulaire(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // 🔹 On enlève les espaces au début/fin
    const emails = formulaire.email.trim();
    const mp = formulaire.password.trim();

    // 🔹 Vérification du format email
    if (!emails.includes("@")) {
      setError("L'email doit contenir @");
      return; // On arrête la fonction ici
    }

    // 🔹 Vérification si un champ est vide
    if (!mp || !emails) {
      setError("Vous devez remplir tous les champs");
      return; // On arrête la fonction ici
    }

    // ✅ Si tout est bon, ici tu pourrais envoyer les données
  }

  return (
    <form onSubmit={handleFormulaire}>
      {/* Champ email */}
      <label htmlFor="">Email : </label>
      <input
        type="text"
        onChange={handleEmail} // 🔹 Déclenché à chaque frappe
      />

      {/* Champ mot de passe */}
      <label htmlFor="">Password : </label>
      <input
        type="text" // ⚠ devrait être "password" pour masquer le texte
        onChange={handlePassword}
      />

      {/* Message d'erreur affiché seulement si error est non vide */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Bouton de soumission */}
      <button>Envoyer</button>
    </form>
  );
};

export default Formulaire8;
