import Card from "./Card";
import NewCardForm from "./NewCardForm";
import React, { useState, useEffect } from "react";

function newCardDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return today;
}

function Feed() {
  // BEGIN Temp Data
  const [cards, setCards] = useState([
    {
      id: 7,
      imageURL: "https://via.placeholder.com/350",
      author: "Carlos",
      date: "11/26/2021",
      body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      id: 2,
      imageURL: "https://via.placeholder.com/250",
      author: "Carlos",
      date: "11/26/2021",
      body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      id: 5,
      imageURL: "https://via.placeholder.com/150",
      author: "Carlos",
      date: "11/26/2021",
      body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      id: 4,
      imageURL: "https://via.placeholder.com/50",
      author: "Carlos",
      date: "11/26/2021",
      body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
  ]);
  // END Temp Data

  const [newCardFromUser, setNewCardFromUser] = useState(false);

  useEffect(() => {
    // Get Cards from DB
  }, [cards]);

  function addCard(card) {
    setCards([
      {
        id: card.id,
        imageURL: card.imageURL,
        author: card.author,
        date: newCardDate(),
        body: card.body,
      },
      ...cards,
    ]);
  }

  const showNewCardForm = (show) => {
    setNewCardFromUser(show);
    show ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
  }

  return (
    <>
      {newCardFromUser && <NewCardForm show={showNewCardForm} createCard={addCard}/>}
      <div>
        <button onClick={() => showNewCardForm(true)}>+</button>
        <div>
          {cards.map((card) => {
            return <Card cardData={card} key={card.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;
