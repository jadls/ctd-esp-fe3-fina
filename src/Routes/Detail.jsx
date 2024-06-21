import docsLogo from "../../public/images/doctor.jpg";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDocsContext } from "../Components/utils/global.context";
import Button from "../Components/Button";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { state, dispatch } = useDocsContext();
  const docDetail = state.details;
 
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  const getDocDetail = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "GET_DETAILS", payload: data });
  };

  useEffect(() => {
    getDocDetail();
  }, []);

  return (
    <>
    <h1>Detail Dentist {params.id}</h1>
    <div className="card-grid">
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="cardOnly">
        <img src={docsLogo} alt="DOCS-logo" className="cardOnly" />
        <h3>Nombre: {docDetail.name}</h3>
        <h3>Email: {docDetail.email}</h3>
        <h3>Cel: {docDetail.phone}</h3>
        <h3>Website: {docDetail.website}</h3>
      </div>
      
    </div>
    <div className="card-grid">
        <Button handleClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  );
};

export default Detail;
