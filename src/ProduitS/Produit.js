import React, { useEffect, useState } from 'react'


function Produit () {
      const produits = [
         {
            id: 1,
            description: 'Verste colletion pour Homme',
            price: 20,
            image: 'verste 4.jpeg'
         },
         {
            id: 2,
            description: 'Verste pour Homme',
            price: 25,
            image: 'verste 6.jpg'
         },
         {
            id: 3,
            description: 'Verste classique pour Homme',
            price: 30,
            image: 'verste 2.png'
         },
         {
            id: 4,
            description: 'Verste nouvelle collection tuc et italie',
            price: 50,
            image: 'verste 1.jpg'
         }
         ,
         {
            id: 5,
            description: 'Verste nouvelle collection française et italie',
            price: 35,
            image: 'verste 5.jpg'
         }
         ,
         {
            id: 6,
            description: 'Robe femme française',
            price: 15,
            image: 'robe femme.jpg'
         }
         ,
         {
            id: 7,
            description: 'Robe longue classique et italie',
            price: 15,
            image: 'robe longue.jpg'
         }
         ,
         {
            id: 8,
            description: 'Robe femme Génial beninoise',
            price: 15,
            image: 'robe femme benin.jpg'
         }
         ,
         {
            id: 9,
            description: 'La nouvelle collection femme ensemble',
            price: 15,
            image: 'nouvelle collection femme ensemble.jpg'
         }
         ,
         {
            id: 10,
            description: 'La chemisse pour femme nouvelle collection',
            price: 15,
            image: 'chemisse femme1.jpg'
         }
         ,
         {
            id: 11,
            description: 'La chemisse pour femme nouvelle collection',
            price: 20,
            image: 'chemisse femme 2.jpg'
         }
         ,
         {
            id: 12,
            description: 'La chemisse pour femme nouvelle collection',
            price: 20,
            image: 'chemisse 4.jpeg'
         }
         ,
         {
            id: 13,
            description: 'Ensemble pour femme nouvelle collection',
            price: 20,
            image: 'ensemble de haut niveau.jpg'
         }
         ,
         {
            id: 14,
            description: 'Basket noir simple',
            price: 15,
            image: 'baskett.jpg'
         }
         ,
         {
            id: 15,
            description: 'La chaussure pour Homme cuir noir',
            price: 15,
            image: 'chaussure cuir noir.jpg'
         }
         ,
         {
            id: 16,
            description: 'nouvelle collection chaussure Femme',
            price: 10,
            image: 'chaussure femme.jpg'
         }
         ,
         {
            id: 17,
            description: 'Mocassin femme nouvelle collection',
            price: 15,
            image: 'mocassin femme.jpg'
         }
         ,
         {
            id: 18,
            description: 'Baskett nouvelle collection',
            price: 20,
            image: 'slip baskett.jpg'
         }
         ,
         {
            id: 19,
            description: 'La chemisse pour femme nouvelle collection',
            price: 20,
            image: 'k.jpg'
         }
         ,
         {
            id: 20,
            description: 'La Pyjama femme nouvelle collection',
            price: 10,
            image: 'ensemble pyjama femme colletion.jpg'
         }
      ];
   const [produites,setProduites]=useState([]);


   const handleBuy = (produit) => {
      alert(`Vous avez acheté : ${produit.description} pour ${produit.price} $`)
      console.log("Tentative denvoie de lachat")
      fetch('http://localhost:3001/achats', {
         method: 'POST',
         headers: { 'Content-Type':'application/json'},
         body: JSON.stringify({
            description: produit.description,
            price: produit.price,
            image: produit.image
         })
      })
      .then(res=>res.json())
      .then(data=> alert(`Bravo : ${produit.description} pour ${produit.price} image est {produit.image} (${data.message}) achaté`)
   )};
      useEffect(()=> {
         fetch('http://localhost:3001/produits')
         .then(res=>res.json())
         .then(data=>setProduites(data))
         .catch(err=>console.error(err));
      },[]);

    return (
    <div className="container mt-5">
        
            <h1 className="text-center mb-4" style={{fontWeight: '150', fontSize: '3.5rem', color: 'white'}}>Nos Produits Magnifique</h1>
         
           <div className="row g-4 justify-content-center">
               {produits.map((product) => (
                  <div className="col-md-4" key={product.id}>
                     <div className="card h-100 shadow-sw">
                         <img src={`/${product.image}`} alt="" className="card-img-bottom"  style={{height: '200px', objectFit: "cover"}}/>
                         <div className="card-body d-flex-column">
                             <h5 className="card-title">{product.title}</h5>
                             <p className="card-text">{product.description}</p>
                         </div>
                         <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold">{product.price} $</span>
                            <button className="btn btn-primary" onClick={()=> handleBuy(product)}> Acheter</button>
                         </div>
                     </div>
                  </div>
               ))}
           </div>
            
          
    </div>
      
    )
  }
export default Produit
