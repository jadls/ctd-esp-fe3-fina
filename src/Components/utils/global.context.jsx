import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const ContextGlobal = createContext();

const lsFavs = localStorage.getItem("lsFavs")
  ? JSON.parse(localStorage.getItem("lsFavs"))
  : [];

const lsLightTheme = localStorage.getItem("lsLightTheme")
  ? JSON.parse(localStorage.getItem("lsLightTheme"))
  : [];


const reducer = (state, action) => {
  switch (action.type) {
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
  }
};

const initialState = {
  lightTheme: lsLightTheme,
  favs: lsFavs,
  docs: [],
};

const ContextProvider = ({ children }) => {
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
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
