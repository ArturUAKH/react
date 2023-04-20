import React from "react";

export const Link = function({link}){
    console.log(link);
    return (
        <div className="link">
            <a href="url" target="_blank" rel="noopener noreferrer">More</a>
        </div>
    )
}