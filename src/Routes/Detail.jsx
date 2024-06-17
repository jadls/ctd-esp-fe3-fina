import docsLogo from "../../public/images/doctor.jpg";
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [doc, setDoc] = useState({})
  const params = useParams();
  // console.log(params.id)
  const {docs} = useContextGlobal()
  //console.log(docs[params.id-1])
  const docDetail = docs[params.id-1]
  console.log(docDetail)
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Info Dentista {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="card">
        <img src={docsLogo} alt="DOCS-logo" className="card" />
        <h4>Nombre: {docDetail.name}</h4>
        <h4>Email: {docDetail.email}</h4>
        <h4>Cel: {docDetail.phone}</h4>
        <h4>Website: {docDetail.website}</h4>
      </div>
    </>
  )
}

export default Detail