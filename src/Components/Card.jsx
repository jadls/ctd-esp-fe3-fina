import React from "react";
import docsLogo from "/images/doctor.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDocsContext } from "./utils/global.context";

const Card = ({ name, username, idDoc }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  const { state, dispatch } = useDocsContext();

  const existFav = state.favs.some((item) => item.id === idDoc);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      
      <Link to={"/dentist/" + idDoc} >
        <img src={docsLogo} alt="DOCS-logo" className="card" />
        <h4>{name}</h4>
        <h4>{username}</h4>
        {/* <h4>⭐❤️</h4> */}
      </Link>
      
      {existFav ? (
        <Button
          handleClick={() =>
            dispatch({ type: "DELETE_FAVS", payload: state.docs[idDoc - 1] })
          }
        >
          ⭐
        </Button>
      ) : (
        <Button
          handleClick={() =>
            dispatch({ type: "ADD_FAVS", payload: state.docs[idDoc - 1] })
          }
        >
          add Fav
        </Button>
      )}
    </div>
  );
};

export default Card;
