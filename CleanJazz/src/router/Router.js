
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Login from "../pages/Login"
 import Precios from '../pages/Precios'
 import Dash from '../pages/Dash'
 import Error from '../pages/Error'

 
function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={ <Login/>}/>  
        <Route path="/" element={<Precios/>}/>
        <Route path='/dash' element={<Dash/>}/>
        <Route path="*" element={<Error/>}/>
        
    </Routes>
</Router>
  );
}

export default Rutas;