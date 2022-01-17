import React from "react";
import {useCart} from "react-use-cart";
import { NavLink } from "react-router-dom";

const Cart =()=> {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        } = useCart();


    const shoppingList =(item)=>{
        return (
            <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td> 
                <button className="btn btn-info btn-sm min-btn"
                onClick={()=> updateItemQuantity(item.id, item.quantity-1)}
                >	&#8722;</button>
                {item.quantity}
                <button className="btn btn-info btn-sm add-btn "
                onClick={()=> updateItemQuantity(item.id, item.quantity+1)}
                >+</button>
            </td>
            <td>
            <button className="btn-warning btn btn-sm"
            onClick={()=>removeItem(item.id)}
            >remove</button>
            </td>
            </tr>
                )};

    if (isEmpty) return (<div className="text-center empty-cart">
                <h2>Your cart is empty.</h2>
                </div> );

    return  (
        <div className="container cart-div d-flex">
            <h1 className="text-center">Shopping cart</h1>
            <table  className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Product name</th>
                <th scope="col">Price(&euro;)</th>
                <th scope="col">Quantity</th>
                <th scope="col">remove item</th>
            </tr>
            </thead>
            <tbody>
            {items.map(shoppingList)}
            </tbody>
            </table>
            <div className="col-auto text-center">
                <h2>Total  Price: {cartTotal} &euro;</h2>
                <div className="d-inline">
                <NavLink to="/pages/Order" className="nav-link d-inline">
                <button className="btn btn-success btn-submit">
                Submit
                </button></NavLink>
                </div>
                <div className="d-inline">
                <button className="btn btn-sm btn-danger clear-btn"
                onClick={()=>emptyCart()}>
                Clear cart</button>
                </div>
            </div>
        </div>)
};
export default Cart;