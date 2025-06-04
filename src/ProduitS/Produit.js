import React from 'react'

function Produit () {
const produits = [
    {
       id: 1,
       description: 'Meilleurs Basket du monde',
       image: ''
    },
     {
       id: 2,
       description: 'Collection des chemisse turc',
       image: ''
    },
     {
       id: 3,
       description: 'Polo pour le meilleur qualité',
       image: ''
    },
     {
       id: 4,
       description: 'Verste nouvelle collection tuc et italie',
       image: ''
    }
    ,
     {
       id: 5,
       description: 'Verste nouvelle collection tuc et italie',
       image: '2.jpg'
    }
    ,
     {
       id: 6,
       description: 'Verste nouvelle collection tuc et italie',
       image: '3.jpg'
    }
    ,
     {
       id: 7,
       description: 'Verste nouvelle collection tuc et italie',
       image: '4.jpg'
    }
    ,
     {
       id: 8,
       description: 'Verste nouvelle collection tuc et italie',
       image: '5.jpg'
    }
    ,
     {
       id: 9,
       description: 'Verste nouvelle collection tuc et italie',
       image: '6.jpg'
    }
    ,
     {
       id: 10,
       description: 'Verste nouvelle collection tuc et italie',
       image: '7.jpg'
    }

]
    return (
    <div className="container mt-5">
        
            <h1 className="text-center mb-4" style={{fontWeight: '150', fontSize: '3.5rem', color: 'white'}}>Nos Produits Magnifique</h1>
         
            <div className="row">
                  {produits.map((produitss) => (
                    <div className="col-md-4 mb-6 pt-4" key={produitss.id}>
                        <div className="card h-100 text-center">
                        <img src={`/${produitss.image}`} alt="" className="card-img-top" />
                        <div className="card-body">
                            <div className="card-text">{produitss.description}</div>
                            <a href="#" className='btn btn-primary'> Acheter</a>
                        </div>
                    </div>
                    </div>
                   
                ))}
            </div>
    </div>
      
    )
  }
export default Produit
