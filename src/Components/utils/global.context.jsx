import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

const ContextGlobal = createContext();


const reducer = (state, action) => {
  switch (action.type){
    case "GET_DOC":
      return {...state, docs: action.payload };
    case "ADD_FAVS":
      return {...state, favs: [...state.favs, action.payload]};
    case "DELETE_FAVS":
      const filteredFavs = state.favs.filter(
        (item) => item.id != action.payload.id
      )
      console.log(action.payload)
      console.log(filteredFavs)
      return {...state, favs: filteredFavs};
    case "THEME":
      return {...state, theme: !theme}    
  }
}

const initialState = {
  theme: false,
  favs: [],
  docs: []
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [docs, setDocs] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
    // .then((res) => setDocs(res.data))
    .then((res) => 
    dispatch({ type:"GET_DOC", payload: res.data })
  )
    .catch((err) => console.log(err)) 
  }, []);
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}


