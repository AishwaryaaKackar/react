import  React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "./logo.png";
import "./HeaderComponent.css";
import usericon from "./usericon.png";

const HeaderComponent = () =>
{
    return (
        <header className="header">
            <div className="image">
                 <img src={logo} alt="logo"></img>
            </div>
            <div className="center">
                <input type="text" className="input" placeholder="Serach me"></input>
                <button type="submit">Search
                </button>
            </div>
            <div className="usericon">
                <img src={usericon} alt="usericon"></img>
            </div>
        </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);