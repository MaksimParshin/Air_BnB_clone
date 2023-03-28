import group from "../images/Group.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={group} alt="human" />

      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
