import RestaurantList from "./RestaurantList";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
    // const set = searchText.toLowerCase();
    const filterdata = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
    return filterdata;
}

const Body = () => {
const [searchText, setSearchText] = useState("");
const [restaurants, setRestaurants] = useState(restaurantList);
console.log(restaurants);

  return (
    <>
      <div className="searchContainer">
        <input type="text" placeholder="search" value={searchText}
         onChange={(e) => setSearchText(e.target.value)}/>
      </div>
      <button onClick={() => {
            const data = filterData(searchText, restaurants);
            console.log(searchText, restaurants);
            setRestaurants(data);
      }}>Searchbtn</button>
      <div className="restro-align">
        {restaurants.map((res) => (
          <RestaurantList {...res.data} key={res.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
