import React from "react";
import "./newsCard.css";

//title, description, date
//const NewsCard = (props) =>{}
const NewsCard = ({title, description, date}) => {
    return (
    <div className="newsCardContainer">
        {/* <h1>{props.title}</h1> */}
        <h1>{title}</h1>
        {/*<h5 className="description">
            Crvena Zvezda je igrala sin
            oc protiv FC "Monako" kluba, izgubila je 
            5:1
        </h5>*/}
        <h5 className="description">{description}</h5>
        {/*<p>22.10.2024.</p>*/}
        <p>{date}</p>
    </div>
    )
};
export default NewsCard;