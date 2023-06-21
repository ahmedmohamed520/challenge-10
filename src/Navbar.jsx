import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import userIcon from "./assets/images/image-avatar.png";
import cartIcon from "./assets/images/icon-cart.svg";
import menuIcon from "./assets/images/icon-menu.svg";
import closeIcon from "./assets/images/icon-close.svg";
import NavItem from "./NavItem";
import { navLinks } from "./data";
import CartItem from "./CartItem";
import { useCartContext } from "./cart-context";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItem } = useCartContext();
    const openMobMenuHandler = () => {
        setIsMenuOpen(true);
        setIsCartOpen(false);
    };
    const closeMenuHandler = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav-left">
                    <div className="logo-box">
                        <div onClick={openMobMenuHandler} className="nav-toggler">
                            <img src={menuIcon} alt="menu opener" />
                        </div>
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className={`nav-links ${isMenuOpen && "show"}`}>
                        <div onClick={closeMenuHandler} className="mob-menu-overlay"></div>
                        <ul className="nav-list">
                            <div onClick={closeMenuHandler} className="close-icon">
                                <img src={closeIcon} alt="X icon" />
                            </div>
                            {navLinks.map((link) => {
                                return <NavItem key={link.id} {...link} />;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="nav-right">
                    <div
                        onClick={() => {
                            setIsCartOpen(!isCartOpen);
                        }}
                        className="cart-icon"
                    >
                        <img src={cartIcon} alt="cart icon" />
                        {cartItem.quantity > 0 && <span className="cart-count">{cartItem.quantity}</span>}
                    </div>
                    <div className="user">
                        <img src={userIcon} alt="user icon" />
                    </div>
                    <div className={`cart ${isCartOpen && "show"}`}>
                        <div className="cart-header">Cart</div>
                        <div className="cart-body">
                            {cartItem?.quantity === 0 && <p>Your cart is empty</p>}
                            {cartItem?.quantity > 0 && (
                                <>
                                    <CartItem />
                                    <button className="btn">Checkout</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
