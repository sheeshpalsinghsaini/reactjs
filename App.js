import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png";
import biryani from "./images/biryani.png";
/*
Building a Website: 

    Header 
       - logo 
       - Nav items
    Body 
        - search bar
        - search button 
        - RestaurantContainer 
            - REstaurantCard
                - image 
                - Name of restaurant, start rating, caisine, delivery time
    Footer 
        - Copyright (c)
        - Links
        - Address 
        - Contact 
        - Social media icons



*/
// const HeaderStyle = () => {
//     backgroundColor: aqua;
// }

// header
const Header = () => {
    return(
        <div className="header" style={{backgroundColor: "lightblue"}} >
            <div className="logo-container">
                {/* <img src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg" alt="image not loading"></img> */}
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



// body 

// RestaurantCard
const RestaurantCard = () => {
    return(
        <div className="restaurant-card">
            <div className="card-img">
                <img src={biryani} alt="image not loading"></img>
            </div>
            <h2>The Golden Curry</h2>
            <p>4.5/5</p>
            <p>Cuisine: Indian</p>
            <p>Delivery Time: 20 mins</p>
        </div>
    )
}


const Body = () => {
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants..."></input>
                <button>Search</button>
            </div>
            <div className="restaurant-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}






const AppLayout = () => {
    return(
        <div className="App">
            {/* // header  */}
            <Header />

            {/*Body  */}
            <Body />
            {/*Footer  */}
        </div>
    )
}
















const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); 
