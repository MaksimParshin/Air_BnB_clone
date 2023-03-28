


export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  return (
    <div className="card" >
      {badgeText && <h1 className="card__title">{badgeText}</h1>}
      <img className="card__img" src={`../images/${props.coverImg}`}></img>
      <div className="card__raiting">
        <img className="card__raiting-star" src="./images/star.svg"></img>
        <span>{props.raiting}</span>
        <span>({props.reviewCount})&#183;</span>
        <span>{props.location}</span>
      </div>
      <p className="card__description">{props.title}</p>
      <p className="card__description">
        <span className="card__description_strong">From ${props.price}</span> / person
      </p>
    </div>
  );
}
