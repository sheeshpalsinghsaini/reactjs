import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restData } = props;
  console.log(restData); // props is an object here.
  // const {resName, cuisine} = props;
  const { name, avgRating, cuisines, sla, cloudinaryImageId } = restData?.info;
  return (
    <div className="restaurant-card">
      <div className="card-img">
        <img src={CDN_URL + cloudinaryImageId} alt="image not loading"></img>
      </div>
      <h2>{name}</h2>
      <p>{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{sla.deliveryTime + "min"}</p>
    </div>
  );
};

export default RestaurantCard;
