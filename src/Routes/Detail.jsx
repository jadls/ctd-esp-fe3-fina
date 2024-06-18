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
      <h1>Detail Dentist {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="cardOnly">
        <img src={docsLogo} alt="DOCS-logo" className="cardOnly" />
        <h3>Nombre: {docDetail.name}</h3>
        <h3>Email: {docDetail.email}</h3>
        <h3>Cel: {docDetail.phone}</h3>
        <h3>Website: {docDetail.website}</h3>
      </div>
    </>
  )
}

export default Detail