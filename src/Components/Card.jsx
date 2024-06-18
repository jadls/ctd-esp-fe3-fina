import React from "react";
import docsLogo from "../../public/images/doctor.jpg";
import { Link } from "react-router-dom";
// import CardStyles from '../index.css'

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={"/dentist/" + id} className="card">
        <img src={docsLogo} alt="DOCS-logo" className="card" />
        <h4>{name}</h4>
        <h4>{username}</h4>
        {/* <h4>⭐</h4> */}
      </Link>
      
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link>
        <button onClick={addFav} className="favButton">
          ⭐❤️
        </button>
      </Link>
    </div>
  );
};

export default Card;
