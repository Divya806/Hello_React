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
      <div className="flex px-5 py-5">
        <input type="text" className="bg-slate-600 w-1/3 px-5 py-5 text-white border-slate-50 rounded-md" placeholder="Search Here" value={searchText}
         onChange={(e) => setSearchText(e.target.value)}/>
        <button className="w-1/5 bg-pink-800 rounded-lg ml-2" onClick={() => {
            const data = filterData(searchText, restaurants);
            console.log(searchText, restaurants);
            setRestaurants(data);
      }}>Browse</button>
      </div>

      <div className="flex wrap">
        {restaurants.map((res) => (
          <RestaurantList {...res.data} key={res.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
