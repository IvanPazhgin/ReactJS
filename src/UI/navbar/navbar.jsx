import React from "react";
import NavLink from "./navLink";
import PropTypes from "prop-types"; // https://www.npmjs.com/package/prop-types

const Navbar = ({ onItemClick, menuItems }) => {
    return (
        <div>
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        {...item}
                        onActiveChange={onItemClick}
                    />
                ))}
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    menuItems: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default Navbar;
