function Card({ title, text }) {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{text}</p>
    </div>
  );
}

export default Card;
