
import { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

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
                    {/* never use anchor tag, for routing, it will reload again, use link component. */}
                    <li><Link to={"/"}>Home</Link></li>
                    <li><a href="/about">About</a></li>
                    
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                    <li>
                    <button className="login-btn" onClick={
                        ()=> {
                            btnNameReact = (btnNameReact === "Login")?setBtnNameReact("Logout"):setBtnNameReact("Login");

                        }
                    }>{btnNameReact}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;