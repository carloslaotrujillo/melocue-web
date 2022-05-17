import React from "react";
import cardStyles from "./card/card.module.scss";

function NewCardForm({show, createCard}) {

  const newCard = {
    id: Math.floor(Math.random() * 100),
    imageURL: "https://via.placeholder.com/1024",
    author: "CA",
    body: "TEST for a new card to add :)",
  };

  return (
    <div className={cardStyles.newCardForm}>
      NewCardForm
      <button onClick={() => show(false)}>X</button>
      <button onClick={() => {
          createCard(newCard);
          show(false);
        }}>
          ADD CARD
        </button>
    </div>
  )
}

export default NewCardForm;
