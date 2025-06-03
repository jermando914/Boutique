import React from 'react'

function Accueil() {
    const produits=[
        {
            id:1,
            nom:'Chaussures',
            description:'Chaussures de sport confortables',
            image:'https://via.placeholder.com/150'
        },
        {
            id:2,
            nom:'T-shirt',
            description:'T-shirt 100% coton',
            image:'https://via.placeholder.com/150'
        },
        {
            id:3,
            nom:'Casquette',
            description:'Casquete styllée pour l/éte',
            image:'https://via.placeholder.com/150'
        },
        {
            id:4,
            nom:'Sandales',
            description:'Sandales propre',
            image:'https://via.placeholder.com/150'
        },
        {
            id:5,
            nom:'Ketch adidas',
            description:'Ketch adidas super bien!',
            image:'https://via.placeholder.com/150'
        },
        {
            id:6,
            nom:'Pantallon',
            description:'Pantallons styllée pour l/éte',
            image:'https://via.placeholder.com/150'
        },
    ];
    return (
       
        <div className="container mt-5">
            <h1 className="text-center mb-4 " style={{fontWeight: '700', fontSize: '3.5rem', color: 'white'}}>
                Bienvenue à la Boutique
            </h1>
            <p className="text-center" style={{color: 'white', fontWeight: '150'}}>
                découvrez nos meilleurs produits à prix imbattables!!!
            </p>
              <div className="row">
                {produits.map((produit) => (
                    <div className="col-md-6 mb-6 pt-4" key={produit.id}>
                        <div className="card h-100 text-center">
                        <img src="produit.image" alt="produit.nom" className="card-img-top" />
                        <div className="card-body">
                            <div className="card-text">{produit.description}</div>
                            <a href="#" className='btn btn-primary'> Acheter</a>
                        </div>
                    </div>
                    </div>
                   
                ))}
              </div>
        </div> 
    )
}
export default Accueil
