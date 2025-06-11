import React  from 'react';
import CaroAccueil from '../PageAccueil/CaroAccueil';

function Produit() {



  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ fontWeight: '150', fontSize: '3.5rem', color: 'white' }}>
        Nos Produits Magnifiques
      </h1>
       <CaroAccueil/>
    </div>
  );
}

export default Produit;