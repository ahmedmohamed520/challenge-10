import React from "react";
import { products } from "./data";
import deleteIcon from "./assets/images/icon-delete.svg";
import { useCartContext } from "./cart-context";

const CartItem = () => {
    const { cartItem, removeCartItems } = useCartContext();
    const { product, quantity } = cartItem;
    return (
        <div>
            <div className="product">
                <div className="product-img">
                    <img src={products[0].thumbnail} alt="product image" width="50" height="50" />
                </div>
                <div className="product-info">
                    <p className="product-summary">{product?.brand}</p>
                    <div className="product-total-price">
                        <div className="product-count">
                            ${product?.finalPrice.toFixed(2)} x {quantity}{" "}
                        </div>
                        <div className="product-total">${(product?.finalPrice * quantity).toFixed(2)}</div>
                    </div>
                </div>
                <div onClick={removeCartItems} className="delete-icon">
                    <img src={deleteIcon} alt="trash icon" />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
