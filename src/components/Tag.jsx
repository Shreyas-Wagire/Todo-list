
import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        Important: { backgroundColor: "#eb6449" },
        College: { backgroundColor: "#15d4c8" },
        Home: { backgroundColor: "#ffd12c" },
        Coding: { backgroundColor: "#a249eb" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
