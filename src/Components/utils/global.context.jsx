import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [docs, setDocs] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
    .then((res) => setDocs(res.data))
    .catch((err) => console.log(err)) 
  }, []);
  return (
    <ContextGlobal.Provider value={{docs, setDocs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}


