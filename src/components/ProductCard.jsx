import React from "react";
import {useCart} from "react-use-cart";

const ProductCard =(props)=> {

    const { addItem } = useCart();

    return (
        <div className="col-6 col-lg-4 container card-div">
            <h2>{props.name}</h2>
            <div className="img-card">
            <img src={props.img} alt="product" className="img-fluid" />
            </div>
            <p>{props.price} euro</p>
            <button className="btn-danger btn"
            onClick={()=>addItem(props.item)}>
            Add to cart</button>
        </div>
    )
};

export default ProductCard;