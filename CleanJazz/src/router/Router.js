
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Login from '../pages/Login';
 import Precios from '../pages/Precios'
 import Prueba from "../pages/PruebaLogin"
 import Home from '../pages/Home'
 import Error from '../pages/Error'
 import Vehiculos from '../pages/Vehiculos';
 import Servicios from '../pages/Servicios';
 import Ofertas from '../pages/Ofertas';
function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={ <Login/>}/>  
        <Route path="/" element={<Precios/>}/>

        <Route path="/prueba" element={<Prueba/>}/>

        <Route path='/home' element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
        
        <Route path='/vehiculos' element={<Vehiculos/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/promociones' element={<Ofertas/>}/>
        
    </Routes>
</Router>
  );
}

export default Rutas;