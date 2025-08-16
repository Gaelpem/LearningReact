import React, { useState } from 'react';
const produits = [
    { nom: "Pomme", prix: 1.2 },
    { nom: "Banane", prix: 0.8 },
    { nom: "Orange", prix: 1.5 },
    { nom: "Mangue", prix: 2.0 },
    { nom: "Ananas", prix: 3.5 }
  ];
const Exercice2 = () => {
    // state pour ajouter les produits par default on le vide car on a rien ajouter
    const [product,setProduct] = useState([]); 
    function handleAdd(e){

        e.preventDefault(); 
      setProduct(produits)

    }
    return (
        <div>
        <ul>
            {product.map((produit)=>(
                <li key={produit.id}>
                     <h2>{produit.nom} -  {produit.prix}</h2>
                </li>
            ))}
            
        </ul>
        <button onClick={handleAdd}>Ajouter</button>
        </div>
       
    );
};

export default Exercice2;