import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MenuAPI } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); // null is the default value of resInfo, setResInfo use to set resInfo value.

  useEffect(() => {
    fetchMenu();
  }, []); // without dependencies array it will render again and again.

// useParam Hooks 
const {resid} = useParams();

// console.log(resId);
  const fetchMenu = async () => {
    
    try{
        const data = await fetch( MenuAPI+resid );
        if (!data.ok) {
            throw new Error('Network response was not ok');
          }
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    }catch(error){
        console.log("Something went wrong : " + error)
    }
    
     // this will log the menu data in console.
  };


  // show Shimmer UI, if resInfo is null, means data is not fetch yet.
  if(resInfo === null){
    return <Shimmer />;
  }
  //cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info
  const {name, cuisines, costForTwoMessage} =  resInfo?.cards[2]?.card?.card?.info;
  const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  return (
    <div className="menu">
      <h1>{name} </h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
      {itemCards.map(item =>(<li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
        
      </ul>
    </div>
  );


};

export default RestaurantMenu;
