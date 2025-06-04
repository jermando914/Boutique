import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function NavBar () {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
     <nav className='navbar'>
         <Link to='/accueil' className='navbar-brand'>MA BOUTIQUE</Link>
            <button className='menu-btn' onClick={()=>setMenuOpen(!menuOpen)}>
             =
            </button>
         <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li><Link to="/accueil">Accueil</Link></li>
              <li><Link to="/produits">Produits</Link></li>
              <li><Link to="/contact">Contact</Link></li>
         </ul>
     </nav>
  );
};
export default NavBar