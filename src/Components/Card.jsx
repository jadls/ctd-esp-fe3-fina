import React from "react";
import docsLogo from "/images/doctor.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, idDoc }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  const { state, dispatch } = useContextGlobal();

  // console.log("favs: ")
  // console.log(state.favs)
  // console.log("docs[i]: ")
  // console.log(state.docs[idDoc - 1])
  const existe = state.favs.some((item) => item.id === idDoc);  
  console.log(existe);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={"/dentist/" + idDoc} className="card">
        <img src={docsLogo} alt="DOCS-logo" className="card" />
        <h4>{name}</h4>
        <h4>{username}</h4>
        {/* <h4>⭐❤️</h4> */}
      </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      {existe ? (
        <Button
          handleClick={() =>
            dispatch(
              existe
                ? { type: "DELETE_FAVS", payload: state.docs[idDoc - 1] }
                : { type: "ADD_FAVS", payload: state.docs[idDoc - 1] }
            )
          }
        >
          ⭐
        </Button>
      ) : (
        <Button
          handleClick={() =>
            dispatch(
              existe
                ? { type: "DELETE_FAVS", payload: state.docs[idDoc - 1] }
                : { type: "ADD_FAVS", payload: state.docs[idDoc - 1] }
            )
          }
        >
          add Fav
        </Button>
      )}
    </div>
  );
};

export default Card;
