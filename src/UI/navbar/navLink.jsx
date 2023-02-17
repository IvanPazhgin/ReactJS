import React from "react";
import PropTypes from "prop-types";

const NavLink = (props) => {
    // const [active, setActive] = useState(false)
    // const [active, setActive] = useState(props.active)

    // Отслеживание нажатия
    const handleClick = () => {
        // setActive((prevState) => !prevState)
        props.onActiveChange(props.id); // Вызываем только метод из props
    };

    // Создание стиля
    const getClasses = () => {
        let classes = "nav-link";
        return (classes += props.active ? " active" : ""); // Заменено на значение из props
    };

    return (
        <>
            {/*<button onClick={() => props.onActiveChange(props.id)}>toggle active</button>*/}

            {/*<li className = {getClasses()} onClick = {handleClick}>*/}
            {/*  /!*{ props.text }*!/*/}
            {/*  /!*{props.children}*!/*/}
            {/*  <a href={props.link}>{ props.text }</a>*/}
            {/*</li>*/}

            <li className="nav-item" onClick={handleClick}>
                <a href={props.link} className={getClasses()}>
                    {props.text}
                </a>
            </li>
        </>
    );
};

NavLink.propTypes = {
    id: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onActiveChange: PropTypes.string.isRequired
};

export default NavLink;
