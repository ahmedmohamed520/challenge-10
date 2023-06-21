import React from "react";

const NavItem = ({ text, url }) => {
    return (
        <li className="nav-item">
            <a href={url} className="nav-link">
                {text}
            </a>
        </li>
    );
};

export default NavItem;
