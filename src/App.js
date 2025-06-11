import Accueil from './PageAccueil/Accueil';
import './App.css';
import NavBar from './BarNavigation/NavBar';
import Produit from './ProduitS/Produit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact/Contact';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
       <Route path='/' element={<Accueil/>} />
       <Route path='/produits' element={<Produit/>} />
       <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
