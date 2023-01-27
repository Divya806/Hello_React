import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { Title } from './components/Header';
import Header from './components/Header';

const RestaurantList = ({name, cuisines, lastMileTravelString, cloudinaryImageId}) => {

    // const {name, cuisines, lastMileTravelString, cloudinaryImageId} = restaurant.data;
    return(
        <div className="custom-retro">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

const Body = () => {    
    return <div className="restro-align">
         {
            restaurantList.map(res => <RestaurantList {...res.data} key={res.data.id} />)
         }
        </div>;
}

const Footer = () => {
    return <h1>Footer</h1>;
}

const AppLayout =() =>{
 return(
    <> 
        <Header/>
        <Body />
        <Footer />
    </>
 )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);