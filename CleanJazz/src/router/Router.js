
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Login from "../pages/Login"
 import Precios from '../pages/Precios'

 
function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={ <Login/>}/>  
        <Route path="/" element={<Precios/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
        
    </Routes>
</Router>
  );
}

export default Rutas;