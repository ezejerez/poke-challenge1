import React, { useState } from "react";
import { login } from "../../services/pokemon";
import "./login.css";

function Login({ showCardsView }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handle(e) {
    const updatedData = { ...data };
    updatedData[e.target.name] = e.target.value;
    setData(updatedData);
  }

  function submit(e) {
    e.preventDefault();

    login(data.email, data.password)
      .then((res) => {
        showCardsView();
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
      });
  }

  return (
    <div className="login-form-wrapper">
      <h1 className="login-form-title">LOGIN</h1>
      <form onSubmit={(e) => submit(e)} className="login-form-container">
        <div className="login-form-inputs-container">
          <input
            onChange={(e) => handle(e)}
            name="email"
            value={data.email}
            type="text"
            placeholder="Email"
            className="login-input"
          />
          <input
            onChange={(e) => handle(e)}
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            className="login-input"
          />
        </div>

        {errorMessage ? <p className="error-message">{errorMessage}</p> : null}

        <input type="submit" value="GO!" className="login-form-button" />
      </form>
    </div>
  );
}

export default Login;
