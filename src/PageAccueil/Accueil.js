import React from 'react'
import Img1 from './whatsapp-logo-1.png'
import Img2 from './facebook-icon-logo.png'
import Img3 from './tiktok-logo-black.png'
import { Link } from 'react-router-dom'

function Accueil() {

    return (
     <> 
         <div className="container mt-5">
            <h1 className="text-center mb-4 " style={{fontWeight: '700', fontSize: '4.8rem', color: '#fff'}}>
                Bienvenue à la Boutique
            </h1>
            <p className="text-center" style={{color: 'white', fontWeight: '150'}}>
                Découvrez nos meilleurs produits à prix imbattables!!!
            </p>
            <div className="container text-center mt-5">
                <h2 style={{color: 'white', fontSize: '2rem'}}>Apropos de la Boutique</h2>
                <p style={{color: '#000', fontSize: '1rem'}}>Les meilleures offres de mode à prix réduit, avec livraison rapide et service client disponible 24/7.</p>
                <button className='btn  btn-primary mt-3'> Voir nos produits</button>
            </div>

        </div>
            <footer className='bg-warning text-white text-center' style={{paddingTop: '10%', paddingBottom: '4%', width: '99.9%'}}>
               <p>Suivez-nous</p>
                  <div className='d-flex justify-content-center gap-4'>
                <Link href="#" className="text-white mx-2">
                    <img src={Img1} alt="whatsapp" className='img-fluid' style={{width: '40px'}}/>
                </Link>
                 <Link href="#" className="text-white mx-2">
                    <img src={Img2} alt="Facebook"  className='img-fluid'  style={{width: '40px'}} />
                </Link>
                 <Link href="#" className="text-white mx-2">
                   <img src={Img3} alt="tictok"  className='img-fluid' style={{width: '40px'}} />
                </Link>
               </div>   
               <p className="mt-3 mb-0"> @ 2025 Ma Boutique. Tous droites réservés.</p>
            </footer>
     </>  
    )
}
export default Accueil
