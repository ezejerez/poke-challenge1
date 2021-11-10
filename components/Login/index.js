import React, { useState } from "react";
import "./login.css";
import Axios from "axios";

function Login({ showCardsView }) {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const url = "https://reqres.in/api/login";

  function handle(e) {
    const updatedData = { ...data };
    updatedData[e.target.name] = e.target.value;
    setData(updatedData);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className="login-form-wrapper">
      <h1 className="login-form-title">LOGIN</h1>
      <form onSubmit={(e) => submit(e)} className="login-form-container">
        <div className="login-form-inputs-container">
          <input
            onChange={(e) => handle(e)}
            name="name"
            value={data.name}
            type="text"
            placeholder="Name"
            className="login-input"
          />
          <input
            onChange={(e) => handle(e)}
            name="password"
            value={data.password}
            type="text"
            placeholder="Password"
            className="login-input"
          />
        </div>
        <input
          type="submit"
          value="GO!"
          className="login-form-button"
          onClick={showCardsView}
        />
      </form>
    </div>
  );
}

export default Login;
