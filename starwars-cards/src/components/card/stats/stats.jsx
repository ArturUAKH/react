import React from "react";


export const Stats = function({birth_year, height, mass, skin_color, gender, eye_color, hair_color}){

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