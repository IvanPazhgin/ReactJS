import React from "react";
import PropTypes from "prop-types"; // https://www.npmjs.com/package/prop-types

const Breadcrumbs = ({ page, onGoMain }) => {
    const isMainPage = page.id === "main";
    const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");

    return (
        <nav>
            <ol className="breadcrumb">
                <li className={mainClasses} onClick={onGoMain}>
                    Главная
                </li>

                {!isMainPage && (
                    <li className="breadcrumb-item active">{page.text}</li>
                )}
            </ol>
        </nav>
    );
};

Breadcrumbs.propTypes = {
    page: PropTypes.object.isRequired,
    onGoMain: PropTypes.func.isRequired
};

export default Breadcrumbs;
