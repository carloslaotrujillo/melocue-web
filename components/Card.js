import React from "react";
import cardStyles from "../styles/Card.module.css";

function Card({ cardData }) {
  return (
    <div className={cardStyles.container}>
      <div className={cardStyles.innerImage}>
        <img alt="Card Image" src={cardData.imageURL} />
      </div>
      <div className={cardStyles.innerHeader}>
        <h5>{cardData.author}</h5>
        <h6>{cardData.date}</h6>
      </div>
      <div className={cardStyles.innerBody}>
        <p>{cardData.body}</p>
      </div>
      <div className={cardStyles.innerFooter}>
        <a href="#">Like</a>
        <a href="#">Comment</a>
        <a href="#">Share</a>
        <a href="#">Save</a>
        <a href="#">Import</a>
      </div>
    </div>
  );
}

export default Card;
