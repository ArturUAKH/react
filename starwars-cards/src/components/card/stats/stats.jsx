import React from "react";


export const Stats = function({stats}){
    const {height,
         mass,
         hair_color,
         skin_color,
         gender,
         birth_year,
         eye_color} = stats;
    return (
        <>
        <div className="stats">
            <ul>
                <li>Birth year<span>{birth_year}</span></li>
                <li>Height<span>{height}</span></li>
                <li>Mass<span>{mass}</span></li>
                <li>Skin Color<span>{skin_color}</span></li>
                <li>Gender<span>{gender}</span></li>
                <li>Eye color<span>{eye_color}</span></li>
                <li>Hair<span>{hair_color}</span></li>
            </ul>
        </div>
        </>
    )
}