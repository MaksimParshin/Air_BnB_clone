import data from "../data";
import Card from "./Card";

export default function Main() {
  const cardelement = data.map((item) => {
    return (
      <Card

        key={item.id}
        coverImg={item.coverImg}
        raiting={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        openSpots={item.openSpots}
        price={item.price}
      />
    );
  });

  return <section className="main">{cardelement}</section>;
}
