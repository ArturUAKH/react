import React from "react";


export const Hero = function({hero}){

    return (
        <div className="hero">
            <img src={hero} alt="SWImage" />
        </div>
    )
}