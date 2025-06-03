import React, { Component } from 'react'


export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
        <div className="container">
            <a href="#" className="navbar-brand">Ma Boutique</a>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#" className='nav-link active'> Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className='nav-link'> Produits</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className='nav-link'> Contact</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}
