import { createPortal } from 'react-dom';
// createPortal permet de mettre  ailleur un composant React ailleur dans le DOM, hors du parent 

// declaration du composant ErrorDialog 
// il prend une proop onClose, c'est une fonction qu'on va appeler quand l'utilisateur clique sur "Okay"
function ErrorDialog({onClose}) {


  // on utilise createPortal , pour afficher qcq on va ecrire dans un autre endroit du HTML
  return createPortal(
    <>
      <dialog open>
        <p>This form contains invalid values. Please fix those errors before submitting the form again!</p>
        <button onClick={onClose}>Okay</button>
      </dialog>
    </>,
    document.getElementById('dialogs') // ← on insère ici
  );
}

export default ErrorDialog;
