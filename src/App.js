import { useState } from "react";
import Card from "./components/Card.js";

function App() {
  return (
    <main className="component">
      <Card
        title="Sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        title="SUVs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <Card
        title="Luxury"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      />
    </main>
  );
}

export default App;
