import { createContext, useContext, useState } from "react";

export const CartContext = createContext({ product: {} });

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState({ product: {}, quantity: 0 });

    const addToCart = (product, quantity) => {
        setCartItem((cartItem) => {
            if (cartItem.quantity > 0) return { ...cartItem, quantity: cartItem.quantity + quantity };
            else {
                return { product, quantity };
            }
        });
    };
    const removeCartItems = () => {
        setCartItem({ product: {}, quantity: 0 });
    };
    return (
        <CartContext.Provider value={{ addToCart, removeCartItems, cartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
