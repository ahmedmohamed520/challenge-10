import React from "react";
import { product, products } from "./data";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import { useCartContext } from "./cart-context";
import Modal from "./Modal";

const Hero = ({ active, count, increaseCount, decreaseCount, setActive, setShowModal }) => {
    const { addToCart } = useCartContext();
    return (
        <>
            <div className="mob-slider">
                <Modal active={active} setActive={setActive} setShowModal={setShowModal} />
            </div>

            <div className="hero-container">
                <div className="hero-section">
                    <div className="products-container sm-hide">
                        <div
                            onClick={() => {
                                setShowModal(true);
                            }}
                            className="active-product"
                        >
                            <img src={products[active].product} alt="product one" />
                        </div>
                        <div className="thumbnails-container">
                            {products.map((product) => {
                                return (
                                    <div
                                        className={`thumbnail ${active === product.id && "active-thumbnail"}`}
                                        key={product.id}
                                        onClick={() => setActive(product.id)}
                                    >
                                        <img src={product.thumbnail} alt={product.name} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="details">
                        <h3 className="sub-title">{product.brand}</h3>
                        <h2 className="title">{product.title}</h2>
                        <div className="text">{product.desc}</div>
                        <div className="price">
                            <div className="price-col-2">
                                <div className="new-price">${product.finalPrice.toFixed(2)}</div>
                                <div className="discount">{product.discount}%</div>
                            </div>
                            <div className="old-price">${product.fullPrice.toFixed(2)}</div>
                        </div>

                        <div className="actions">
                            <div className="btns">
                                <div className="amount-icon" onClick={decreaseCount}>
                                    <img src={minusIcon} alt="minus" />
                                </div>
                                <div className="product-amount">{count}</div>
                                <div className="amount-icon" onClick={increaseCount}>
                                    <img src={plusIcon} alt="minus" />
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    addToCart(product, count);
                                }}
                                className="btn"
                            >
                                <img src={cartIcon} alt="cart" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
