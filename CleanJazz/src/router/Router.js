
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Login from "../pages/Login"
 import Precios from '../pages/Precios'
 import Prueba from "../pages/PruebaLogin"

 import Dash from '../pages/Dash'
 import Error from '../pages/Error'


 
function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={ <Login/>}/>  
        <Route path="/" element={<Precios/>}/>

        <Route path="*" element={<h1>404 Not Found</h1>}/>
        <Route path="/prueba" element={<Prueba/>}/>

        <Route path='/dash' element={<Dash/>}/>
        <Route path="*" element={<Error/>}/>
        

    </Routes>
</Router>
  );
}

export default Rutas;