import React from "react";
import cardStyles from "../styles/Card.module.css";
import {BiLike, BiDislike, BiCommentAdd, BiShareAlt, BiSave, BiImport} from "react-icons/bi"

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
        <a href="#"><BiLike /></a>
        <a href="#"><BiDislike /></a>
        <a href="#"><BiCommentAdd /></a>
        <a href="#"><BiShareAlt /></a>
        <a href="#"><BiSave /></a>
        <a href="#"><BiImport /></a>
      </div>
    </div>
  );
}

export default Card;
