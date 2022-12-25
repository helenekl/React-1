import React, { useState, } from "react";
import { useParams } from 'react-router-dom';
import './style.css';
import Card from './card';
import CardContent from "./card-content";
import mockData from './mock/data.json';

function Content () {
  const cards = mockData;

  const { id: cardId } = useParams();


  const [selectedTag, setSelectedTag] = useState();
  console.log(`selectedTag:${selectedTag}`);

  const [selectedCard, setSelectedCard] = useState(
    cards.find(card => card.id === cardId)
  );
  console.log(`card:`, selectedCard);

  return (
    <div className="content-container">
      {selectedTag && <div className="selected-tag">{selectedTag}</div>}
      {!selectedCard && cards
        .filter(el => selectedTag == null || el.tag === selectedTag)
        .map(card => <Card
          image={card.image}
          title={card.title}
          description={card.description}
          date={card.date}
          tag={card.tag}
          setSelectedTag={setSelectedTag}
          setCard={setSelectedCard}
          fullPage={card.fullPage}
        />)}
      {selectedCard
        && <CardContent
          image={selectedCard.image}
          title={selectedCard.title}
          description={selectedCard.description}
          date={selectedCard.date}
          tag={selectedCard.tag}
          fullPage={selectedCard.fullPage}
        />}
      {
        selectedTag || selectedCard
          ? <div
            className="return-all-posts"
            onClick={() => {
              setSelectedTag(null);
              setSelectedCard(null);
            }}>{"< "} All posts</div>
          : null
      }
    </div>
  );
}

export default Content;

