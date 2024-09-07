import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //local state variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // useState variable will make empty array.
  const [filterRestaurants, setFilterRestaurants] = useState([]); // useState variable will make empty array.

  const [searchText, setSearchText] = useState("");
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

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  // fetch(): is a web api that return a promise we have to resolve it by a promise or async/await.

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352003&lng=77.6156391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://cors-proxy.htmldriven.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352003&lng=77.6156391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" // with this we don't require cors extension, but it has some limit to call api.
    );

    const json = await data.json();
    console.log(json);
    //this is not a good way
    // setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

    //use optional chanining.
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // conditional rendering: rendering on the basis of condition.condition for Shimmer UI
  // if(listOfRestaurants.length === 0 ){
  //     // return <h1>Loading...</h1>
  //     return <Shimmer />
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              // update search text
              setSearchText(e.target.value);
            }}
            placeholder="Search by restaurant name..."
          />
          <button
            className="filter-btn"
            onClick={() => {
              // filter the restraunt cards and update the UI.
              // searchText
              console.log(searchText);
              const fiteredRestaurant = listOfRestaurants.filter((restObj) =>
                restObj.info.name.toLowerCase().includes(searchText)
              );
              setFilterRestaurants(fiteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            filterRestaurants = listOfRestaurants.filter(
              (restObj) => restObj.info.avgRating > 4
            );
            setListOfRestaurants(filterRestaurants);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restaurant-container">
        {filterRestaurants.map((restObj) => {
          return <RestaurantCard key={restObj.info.id} restData={restObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
