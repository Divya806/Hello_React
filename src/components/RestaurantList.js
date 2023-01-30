import { IMG_CDN_URL } from "../constants";

const RestaurantList = ({name, cuisines, lastMileTravelString, cloudinaryImageId}) => {

    // const {name, cuisines, lastMileTravelString, cloudinaryImageId} = restaurant.data;
    return(
        <div className="w-2/12 p-2 m-2">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestaurantList;