import React from "react";
import GlobalStyles from "../globalStyles";
import "./App.css";
import Login from "../components/Login";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="content-wrapper">
        <Login />
      </div>
    </>
  );
}
