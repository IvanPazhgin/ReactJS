import React, { useState } from "react";

const RenderTags = () => {
    const imageUrl = "https://picsum.photos/200";
    const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

    const handleTagChange = (id) => {
        // setTags(['tag4', 'tag5'])
        setTags((prevState) => prevState.filter((tag) => tag !== id));
        // console.log(id)
    };

    const renderTags = () => {
        // if (tags.length === 0) return 'no tags'
        return tags.map((tag) => (
            <li
                key={tag}
                className="btn btn-primary btn-sm m-2"
                // onClick = { handleTagChange }
                onClick={() => handleTagChange(tag)}
            >
                {tag}
            </li>
        ));
    };

    // условный рендеринг
    if (tags.length !== 0) return <ul> {renderTags()} </ul>;

    return (
        <>
            {/*<img src={ imageUrl } alt='image'/>*/}
            {imageUrl && <img src={imageUrl} alt="image" />}

            {/*<ul> { renderTags() } </ul>*/}
        </>
    );
};

export default RenderTags;
