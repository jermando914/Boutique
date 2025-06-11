import React from 'react'
import { Link } from 'react-router-dom';


function NavBar () {

  return(
   
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid bg-warning">
         <Link class="navbar-brand" to="/">MA BOUTIQUE</Link>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav justify-content-end">
            <li class="nav-item">
               <Link to="/" class="nav-link active" aria-current="page">Accueill</Link >
            </li>
            <li class="nav-item">
               <Link to="/produits" class="nav-link">Vétement autre</Link >
            </li>
            <li class="nav-item">
               <Link to="/contact"  class="nav-link">Contact</Link >
            </li>
            </ul>
         </div>
      </div>
      </nav>
  );
};
export default NavBar