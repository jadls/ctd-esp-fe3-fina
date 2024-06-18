import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [info, setInfo] = useState({
    nombre: "",
    email: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validarEmail = (emailTest) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(emailTest);      
    };
    
    if (
      validarEmail(info.email.trim()) &&
      info.nombre.trim().length >= 6
    ) {
      setShowCard(true);
      setError(false);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="full name"
            value={info.nombre}
            onChange={(e) => setInfo({ ...info, nombre: e.target.value })}
            onClick={(i) => (setShowCard(false), setError(false))}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            onClick={(i) => (setShowCard(false), setError(false))}
          />
        </div>
        <button>Enviar</button>
      </form>
      {showCard && (
        <p style={{ color: "green", fontWeight: "bold", textAlign: "center" }}>
          Gracias {info.nombre}, te contactaremos cuanto antes vía mail al{" "}
          {info.email}
        </p>
      )}
      {error && (
        <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
          Por favor chequea que la información sea correcta
        </p>
      )}
    </div>
  );
};

export default Form;
