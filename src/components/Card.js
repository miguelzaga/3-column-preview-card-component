function Card({ title, text }) {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{text}</p>
      <button className="card__btn">Learn More</button>
    </div>
  );
}

export default Card;
