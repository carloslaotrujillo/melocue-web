import React from "react";
import ReactTooltip from 'react-tooltip';
import cardStyles from "./card.module.scss";
import {BiLike, BiDislike, BiCommentAdd, BiShareAlt, BiBookmarkPlus, BiImport} from "react-icons/bi"

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
        <a data-tip="Like" href="#"><BiLike /></a>
        <a data-tip="Dislike" href="#"><BiDislike /></a>
        <a data-tip="Add Comment" href="#"><BiCommentAdd /></a>
        <a data-tip="Share" href="#"><BiShareAlt /></a>
        <a data-tip="Bookmark" href="#"><BiBookmarkPlus /></a>
        <a data-tip="Import" href="#"><BiImport /></a>
        <ReactTooltip />
      </div>
    </div>
  );
}

export default Card;
