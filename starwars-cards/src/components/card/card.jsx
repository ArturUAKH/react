import React from "react";
import "./card.css"
import { Title } from "./title/title";
import { Hero } from "./hero/hero";
import { Stats } from "./stats/stats";
import { Link } from "./link/link";



export const Card = function({info}){
    const {name, url, img} = info;
    return (
        <div className="card">
            <Title name={name}></Title>
            <Hero hero={img}></Hero>
            <Stats stats={info}></Stats>
            <Link link={url}></Link>
        </div>
    )
}

// export default Card;