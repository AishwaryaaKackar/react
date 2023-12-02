import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

    let [listofRest,setListofRest]= useState(restaurantList);
    let [searchText, setSearchText] = useState("");
    useEffect( () => {getRestaurants();},[]);

    async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      // Optional Chaining
      // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setListofRest(json?.data?.cards[2]?.data?.data?.cards);
    }
    return (
      <div>
        <div className="btn">
            <input type="text" placeholder="Search here" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            <button onClick={() => {
                const filteredlistofRest= listofRest.filter((restaurant) => {
                  return restaurant.data.name.toLowerCase().includes(searchText);
                });
                        setListofRest(filteredlistofRest);}
                        }>Search</button>
        </div>
        <div  className="restaurant-list">
                {listofRest.map((restaurant) => {
                  return <RestaurantCard key={restaurant.data.id} {...restaurant.data}></RestaurantCard>;
                })}
        </div>
      </div>
    );
  };

 export default Body; 