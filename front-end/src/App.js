import React from "react";
import "./all-css/login-page.css";
import besteweb from "./assets/besteweb.png";

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-lite">Bem vindo</span>

            <span className="login-form-lite">
              <img src={besteweb} alt="logo beste web" />
            </span>

            <div className="wpar-input">
              <input className="input-login" type="email" />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wpar-input">
              <input className="input-login" type="password" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">login</button>
            </div>

            <div className="criar-login">
              <span className="criar-login-pt1"></span>

              <a className="criar-login-pt2" href="#">
                criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
