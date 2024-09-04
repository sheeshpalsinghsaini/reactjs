
import logo from "../../images/logo.png";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;