import React from "react";


export const Hero = function({hero}){
    console.log(hero);
    const {img} = hero;
    return (
        <div className="hero">
            <img src={img} alt="SWImage" />
        </div>
    )
}