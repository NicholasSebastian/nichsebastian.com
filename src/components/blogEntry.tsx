import React from "react";

const Entry = ({ title, description, date, timeToRead }) => {
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{date}</div>
            <div>{timeToRead}</div>
        </div>
    );
}

export default Entry;