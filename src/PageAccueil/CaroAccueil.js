import React, { Component } from 'react'
import Img1 from '../ProduitS/Assert/baskett.jpg'
import img2 from '../ProduitS/Assert/chaussure cuir noir.jpg'
import img3 from '../ProduitS/Assert/chaussure femme.jpeg'
import Img4 from '../ProduitS/Assert/chaussure femme.jpg'
import Img5 from '../ProduitS/Assert/chemisse 4.jpeg'
import Img6 from '../ProduitS/Assert/chemisse femme 2.jpg'
import Img7 from '../ProduitS/Assert/k.jpg'
import Img8 from '../ProduitS/Assert/mocassin femme.jpg'
import Img9 from '../ProduitS/Assert/verste 5.jpg'
import Img10 from '../ProduitS/Assert/haut niveau ensemble femme.jpg'
import Img11 from '../ProduitS/Assert/robe longue.jpg'


export default class CaroAccueil extends Component {
    
  render() {
    const handleClick = (description, prix, image) => {
        fetch('http://localhost:3001/achats', {
            method: 'POST',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify({
                description,
                prix,
                image
            })
        })
        .then(res=>res.ok ? ('Achat enregistré') : alert(alert('Erreur lors de l\'achat')))

        .catch(()=> 
            alert('Erreur lors de l\'achat')
        );
    }

    return (
    <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" class="Slide 6" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" class="Slide 9" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 11"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={Img1} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>Ketch AIR FORCE</h5>
                    <p>Nouvelle ketch usa seulement à</p>
                     <button className="btn btn-primary" onClick={()=>handleClick("ketch air force", 25 , "../Produits/Assert/baskett.jpg")}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-md-block">
                    <h5 style={{color: '#000'}}>chaussure cuir tout neuf</h5>
                    <p style={{color: '#000'}}>chaussure cuir seulement 50$ solde</p>
                    <button className="btn btn-primary" onClick={()=>handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-md-block">
                    <h5>Kecth FASHION</h5>
                    <p>Nouvelle arrivage FASHION pour femme</p>
                    <button className="btn btn-primary" onClick={()=>handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Img4} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>Tallons magnifique</h5>
                    <p>Nouvelle Tallons  usa seulement à 15$</p>
                    <button className="btn btn-primary" onClick={()=>handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Img5} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>chemisse</h5>
                    <p>Nouvelle collection italienne seulement à 20$</p>
                    <button className="btn btn-primary" onClick={()=>handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Img6} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>chemisse sk</h5>
                    <p>Nouvelle collection allemand seulement à 25$</p>
                    <button className="btn btn-primary" onClick={()=>handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Img7} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>chemisse rougr black</h5>
                    <p>Nouvelle collection allemand seulement à 25$</p>
                    <button className="btn btn-primary" onClick={()=>handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Img8} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>Ensemble SSB</h5>
                    <p>Nouvelle collection française seulement à 25$</p>
                    <button className="btn btn-primary" onClick={()=>handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src={Img9} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>Ensemble Verste</h5>
                    <p>Nouvelle collection italienne seulement à 60$</p>
                     <button className="btn btn-primary" onClick={(e)=> handleClick(e)}>
                    Acheter
                  </button>
                </div>
                </div>

                <div class="carousel-item">
                <img src={Img10} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>Ensemble SSB</h5>
                    <p>Nouvelle collection française seulement à 25$</p>
                     <button className="btn btn-primary" onClick={()=> handleClick()}>
                    Acheter
                  </button>
                </div>
    
                </div>
                <div class="carousel-item">
                <img src={Img11} class="d-block w-100 h-50  " alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>Ensemble SSB robe</h5>
                    <p>Nouvelle collection française robe seulement à 20$</p>
                     <button className="btn btn-primary" onClick={()=> handleClick()}>
                    Acheter
                  </button>
                </div>
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
    </div>
    )
  }
}




