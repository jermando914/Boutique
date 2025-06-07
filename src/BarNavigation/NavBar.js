import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function NavBar () {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
     <nav className='navbar'>
         <Link to='/accueil' className='navbar-brand text-center'>MA BOUTIQUE</Link>
            <button className='menu-btn' onClick={()=>setMenuOpen(!menuOpen)}>
             =
            </button>
         <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li><Link to="/accueil" onClick={()=> setMenuOpen(false)}>Accueil</Link></li>
              <li><Link to="/produits" onClick={()=> setMenuOpen(false)}>Produits</Link></li>
              <li><Link to="/contact" onClick={()=> setMenuOpen(false)}>Contact</Link></li>
         </ul>
     </nav>
  );
};
export default NavBar