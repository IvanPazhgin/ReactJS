import React, { useState } from "react";
import Navbar from "../UI/navbar/navbar";
import CountersList from "./countersList";
import Breadcrumb from "./Breadcrumb";
import RenderTags from "./tags";
import EpisodesList from "./episodesList";

const Page = () => {
    const initialState = [
        { id: "main", text: "Главная", active: true, link: "#main" },
        { id: "blog", text: "Блог", active: false, link: "#blog" },
        { id: "contacts", text: "Контакты", active: false, link: "#contacts" }
    ]; // id нужен для key

    const [menuItems, setMenuItems] = useState(initialState);

    const handleItemClick = (id) => {
        // необходимо, чтобы активен мог быть только один элемент меню.
        // Значит сделать так, чтобы при нажатии на один пункт атрибут active у других становился false
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            active: item.id === id // Аналог выражения item.id === id ? true : false
        }));
        setMenuItems(newMenuItems); // Устанавливаем новое состояние
    };

    const handleSetMainActive = () => {
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            active: item.id === "main"
        }));
        setMenuItems(newMenuItems);
    };

    const currentActivePage = menuItems.find((item) => item.active);

    const logoUrl = "https://picsum.photos/100";
    const siteName = "React.JS";

    return (
        <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                style={{ width: "280px" }}
            >
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logoUrl} alt="" className="bi pe-none me-2" />
                    <span className="fs-4">{siteName}</span>
                </div>
                <hr />
                <Navbar menuItems={menuItems} onItemClick={handleItemClick} />
            </div>
            <div className="p-4">
                <div>
                    <Breadcrumb
                        page={currentActivePage}
                        onGoMain={handleSetMainActive}
                    />
                </div>
                {/*<h1 className="h3">Контент</h1>*/}
                <h3 className="h3">
                    <CountersList />
                </h3>
                <hr />
                <RenderTags />
                <hr />
                <EpisodesList />
            </div>
        </main>
    );
};

export default Page;
