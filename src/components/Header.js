
import { useState } from "react";
import logo from "../../images/logo.png";

const Header = () => {
    // let loginBtnName = "Login";

    let [btnNameReact, setBtnNameReact] = useState("Login");

    return(
        <div className="header" style={{backgroundColor: "lightblue"}} >
            <div className="logo-container">
                <img className="logo" src={logo} alt="image not loading"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={
                        ()=> {
                            btnNameReact = (btnNameReact === "Login")?setBtnNameReact("Logout"):setBtnNameReact("Login");

                        }
                    }>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;