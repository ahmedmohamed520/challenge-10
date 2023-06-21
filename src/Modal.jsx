import React from "react";
import closeIcon from "./assets/images/icon-close.svg";
import nextIcon from "./assets/images/icon-next.svg";
import prevIcon from "./assets/images/icon-previous.svg";
import { products } from "./data";

const Modal = ({ active, setActive, setShowModal }) => {
    const prevProductHandler = () => {
        if (active >= 1) setActive(active - 1);
        else setActive(products.length - 1);
    };
    const nextProductHandler = () => {
        if (active <= products.length - 2) setActive(active + 1);
        else setActive(0);
    };
    return (
        <div>
            <div
                onClick={() => {
                    setShowModal(false);
                }}
                className="overlay"
            ></div>
            <div className="modal">
                <div onClick={() => setShowModal(false)} className="modal-close-icon">
                    <img src={closeIcon} alt="X icon" />
                </div>
                <div className="active-product-image">
                    <img src={products[active].product} alt="product image" />
                </div>
                <div className="modal-thumbnails">
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
                <div className="arrows">
                    <div onClick={prevProductHandler} className="left-arrow">
                        <img src={prevIcon} alt="left arrow" />
                    </div>
                    <div onClick={nextProductHandler} className="right-arrow">
                        <img src={nextIcon} alt="right arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
