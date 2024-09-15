import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352003&lng=77.6156391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search by restaurant name..."
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const fiteredRestaurant = listOfRestaurants.filter((restObj) =>
                restObj.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRestaurants(fiteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("Filter butn cliked...");
              const fiteredRestaurant = listOfRestaurants.filter((restObj) => {
                return restObj.info.avgRating > 4.5;
              });
              setFilterRestaurants(fiteredRestaurant);
              console.log(fiteredRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filterRestaurants.map((restObj) => {
          return (
            <Link key={restObj.info.id} to={"/restaurants/" + restObj.info.id}>
              <RestaurantCard restData={restObj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
