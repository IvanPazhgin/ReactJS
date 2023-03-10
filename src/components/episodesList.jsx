import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import Episode from "./episode";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const EpisodesList = () => {
    const count = episodes.length; // количество записей
    const pageSize = 8; // количество записей на странице, которое хотим выводить

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const pageEpisodes = paginate(episodes, currentPage, pageSize);

    return (
        <div className="container">
            <h4>Эпизоды</h4>
            <div className="row">
                {/* Добавим вывод эпизодов */}
                {pageEpisodes.map((episode) => (
                    <Episode key={episode.id} {...episode} />
                ))}
            </div>
            <div className="row">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default EpisodesList;
