import React from "react";
import ReactDOM  from "react-dom/client";
import "./foodOrderingApp.css";
import Header from "./components/Header";
import Body from "./components/Body";


  const Footer = () => {
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/aishwaryaa-kackar-942aba142/" target="_blank">
          Aishwaryaa Kackar
        </a>
        <i className="fa-solid fa-copyright"></i>2023
        <strong>
          Food<span>Junction</span>
        </strong>
      </div>
    );
  };

  const AppLayout = () => {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);