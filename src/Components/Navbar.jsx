import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDocsContext } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useDocsContext();
  
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to="/home">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      <Button
        handleClick={() =>
          dispatch({ type: "THEME", payload: state.lightTheme })
        }
      >
        {state.lightTheme ? "🌙" : "☀️"}
      </Button>
    </nav>
  );
};

export default Navbar;
