import React, { useState } from "react";
import Navbar from "./Navbar";

import Hero from "./Hero";
import Modal from "./Modal";

const App = () => {
    const [active, setActive] = useState(0);
    const [count, setCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const increaseCount = () => {
        setCount((count) => count + 1);
    };
    const decreaseCount = () => {
        if (count > 0) setCount((count) => count - 1);
    };
    return (
        <div>
            <Navbar count={count} active={active} />
            <Hero
                active={active}
                count={count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                setActive={setActive}
                setShowModal={setShowModal}
            />
            {showModal && <Modal active={active} setActive={setActive} setShowModal={setShowModal} />}
        </div>
    );
};

export default App;
