import Card from "./card/card.component";
import NewCardForm from "./NewCardForm";
import React, { useState, useEffect } from "react";
import feedStyles from "../styles/Feed.module.css";

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
      body: "emonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
      id: 2,
      imageURL: "https://via.placeholder.com/250",
      author: "Carlos",
      date: "11/26/2021",
      body: "In publishing and graphic design, Lorem ipsum is ahic design, Lorem ipshic design, Lorem ipshic design, Lorem ipshic design, Lorem ips placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
      id: 5,
      imageURL: "https://via.placeholder.com/150",
      author: "Carlos",
      date: "11/26/2021",
      body: "In publishing andxt commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
      id: 4,
      imageURL: "https://via.placeholder.com/50",
      author: "Carlos",
      date: "11/26/2021",
      body: "The root of this technique is just setting the height of the module in a predictable way. Let’s say you set the line-height to 1.2em. If we want to expose three lines of text, we can just make the height of the container 3.6em (1.2em × 3). The hidden overflow will hide the rest.it can be a bit awkward to just cut the text off like that. Ideally, we would add ellipsis, but we can’t reliably position them. So instead, we’ll fade out the text achieving the same kind of communication (“there is more…”)de out the last line, we make a box (a pseudo-element will work great) and overlay a transparent-to-background-color gradient over the top. Making it nearly as wide as the container is best in case the last line is short. Because we know the line-height, we can make the pseudo-element box exactly one line tall."
    }
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
      ...cards
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
        <div className={feedStyles.container}>
          {cards.map((card) => {
            return <Card cardData={card} key={card.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;
