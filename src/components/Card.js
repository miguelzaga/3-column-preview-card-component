function Card({ cname, title, text, icon }) {
  return (
    <div className={`card ${cname}`}>
      <img className="card__img" src={icon} />
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{text}</p>
      <button className="card__btn">Learn More</button>
    </div>
  );
}

export default Card;
