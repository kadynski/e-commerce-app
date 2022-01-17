import React from "react";
import ProductCard from "../components/ProductCard";
import Products from "../components/Products";
import { NavLink } from "react-router-dom";

const Sale =()=> {

    function productList(item){
        return (
            <ProductCard
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
             item={item}
            />
        )
    }

    return (
        <div className="container text-center sale-div">
            <div className="sale-title">
            <h1>Our Products:</h1>
            </div>
            <div className="row d-flex">
            {Products.map(productList)}
            </div>
            <button className="btn btn-info sale-btn" 
            title="Shopping cart">
            <NavLink to="../pages/Cart" className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            </NavLink>
            </button>
        </div>
    )
};

export default Sale;