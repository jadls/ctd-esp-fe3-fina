import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const DocsContext = createContext();

const lsFavs = localStorage.getItem("lsFavs")
  ? JSON.parse(localStorage.getItem("lsFavs"))
  : [];

const lsLightTheme = localStorage.getItem("lsLightTheme")
  ? JSON.parse(localStorage.getItem("lsLightTheme"))
  : [];


const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return { ...state, details: action.payload}
    case "GET_DOC":
      return { ...state, docs: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAVS":
      const filteredFavs = state.favs.filter(
        (item) => item.id != action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "THEME":
      console.log("lightTheme " + !state.lightTheme); //lightTheme con el cambio q se hará a continuación
      return { ...state, lightTheme: !state.lightTheme };
    default:
      throw new Error("Error al modificar el estado")
  }
};

const initialState = {
  lightTheme: lsLightTheme,
  favs: lsFavs,
  docs: [],
  details: {}
};

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context

  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((res) => dispatch({ type: "GET_DOC", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("lsFavs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("lsLightTheme", JSON.stringify(state.lightTheme));
  }, [state.lightTheme]);

  return (
    <DocsContext.Provider value={{ state, dispatch }}>
      {children}
    </DocsContext.Provider>
  );
};

export default Context;

export const useDocsContext = () => {
  return useContext(DocsContext);
};
