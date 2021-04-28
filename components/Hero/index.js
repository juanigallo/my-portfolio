import style from "./style.module.scss";

function Hero({ name, description }) {
  const { container } = style;
  return (
    <section className={container}>
      <h1>{name}</h1>
      <h2>{description}</h2>
    </section>
  );
}

export default Hero;
