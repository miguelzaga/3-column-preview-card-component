import { useState } from "react";
import Card from "./components/Card.js";
import iconLuxury from "/src/assets/icon-luxury.svg";
import iconSedans from "/src/assets/icon-sedans.svg";
import iconSuvs from "/src/assets/icon-suvs.svg";

var cards = [
  {
    icon: iconSedans,
    title: "Sedans",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    icon: iconSuvs,
    title: "SUVs",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    icon: iconLuxury,
    title: "Luxury",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

function App() {
  return (
    <main className="cards">
      <h1 style={{ display: "none" }}>Cards Component</h1>
      {cards.map(function renderCard(card, i) {
        let id = `card--${i}`;
        return (
          <Card
            key={id}
            cname={id}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        );
      })}
    </main>
  );
}

export default App;
