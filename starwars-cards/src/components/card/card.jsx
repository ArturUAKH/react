import React from "react";
import "./card.css"
import { Title } from "./title/title";
import { Hero } from "./hero/hero";
import { Stats } from "./stats/stats";
import { Link } from "./link/link";



export const Card = function({info}){
    const {name} = info;
    return (
        <div className="card">
            <Title name={name}></Title>
            <Hero hero={info}></Hero>
            <Stats stats={info}></Stats>
            <Link></Link>
        </div>
    )
}

// export default Card;