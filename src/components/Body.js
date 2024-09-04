import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";
const Body = () => {

    //local state variables 
    const[listOfRestaurants, setListOfRestaurants] = useState(restList); // useState variable will make empty array.

    // let listOfRestaurants = [
    //     {
    //         "info": {
    //           "id": "19957",
    //           "name": "Burger King",
    //           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_19957.JPG",
    //           "cuisines": [
    //             "Burgers",
    //             "American"
    //           ],
    //           "avgRating": 4.1,
    //           "sla": {
    //             "deliveryTime": 33,
    //           }
    //       }},
    //       {
    //         "info": {
    //           "id": "678080",
    //           "name": "ITC Aashirvaad Soul Creations",
    //           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/3c8d765a-c638-45d4-9121-d10e6cc5fac4_678080.JPG",
    //           "cuisines": [
    //             "Indian",
    //             "Home Food",
    //             "Healthy Food"
    //           ],
    //           "avgRating": 4.5,
    //           "sla": {
    //             "deliveryTime": 37,
    //           }
    //       }
    //     },
    //       {
    //         "info": {
    //           "id": "174211",
    //           "name": "Five Star Chicken",
    //           "cloudinaryImageId": "jxs68vadqravuphaqhxp",
    //           "cuisines": [
    //             "Snacks",
    //             "Fast Food"
    //           ],
    //           "avgRating": 3.6,
             
    //           "sla": {
    //             "deliveryTime": 23,
                
    //           },
              
    //       }}
    // ]


    return(
        <div className="body">
            <div className="restaurant-container">
                {listOfRestaurants.map(restObj =>{
                    return <RestaurantCard key={restObj.info.id} restData={restObj}/>
                })}
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    filterRestaurants = listOfRestaurants.filter(restObj => restObj.info.avgRating > 4);
                    setListOfRestaurants(filterRestaurants)
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurant</button>
            </div> 
        </div>
    );
}

export default Body;