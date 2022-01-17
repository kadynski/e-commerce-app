import React from "react";
import ProductCard from "./ProductCard";
import Products from "./Products";
import { NavLink } from "react-router-dom";

const Popular =()=>{
    return (
    <div>
        <hr/>
        <div className="text-center pop-div">
            <p className="popular-title">Most Popular:</p>
            <ProductCard
                key={Products[0].id}
                name={Products[0].name}
                img={Products[0].img}
                price={Products[0].price}
                item={Products[0]}
            />
            <button className="btn btn-info more-btn"
            title="Show more products">
            <NavLink to="../pages/Sale" className="nav-link container">
            More Products Here!
            </NavLink>
            </button>
        </div>
    </div>)
}
export default Popular;