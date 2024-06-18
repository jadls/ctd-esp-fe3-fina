import React from "react";
import "../index.css"
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
        <Link to='/home'><h4>Inicio</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        {/* <Link to='/dentist/:id'>Detalle del dentista</Link> */}
        <Link to='/favs'><h4>Destacado</h4></Link>
        <button>Change theme</button>
      
    </nav>
  );
};

export default Navbar;
