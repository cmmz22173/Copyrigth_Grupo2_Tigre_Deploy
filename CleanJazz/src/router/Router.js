
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
 import { isTokenValid } from '../services/Guard';
 import { Navigate } from 'react-router-dom';

function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={ <Login/>}/>  
        <Route path="/" element={<Precios/>}/>

        <Route path="/prueba" element={<Prueba/>}/>

        <Route path='/home' element={isTokenValid() === 'autenticado'?<Home/>:<Navigate to={"/login"}/>}/>
        <Route path="*" element={<Error/>}/>
        
        <Route path='/vehiculos' element={isTokenValid() === 'autenticado'?<Vehiculos/>:<Navigate to={"/login"}/>}/>
        <Route path='/servicios' element={isTokenValid() === 'autenticado'?<Servicios/>:<Navigate to={"/login"}/>}/>
        <Route path='/promociones' element={isTokenValid() === 'autenticado'?<Ofertas/>:<Navigate to={"/login"}/>}/>
        
    </Routes>
</Router>
  );
}

export default Rutas;