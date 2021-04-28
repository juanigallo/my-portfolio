import Title from "../Title";
import style from "./style.module.scss";

function Projects({ data }) {
  return (
    <div className={style.container}>
      <Title value="Proyectos" />
      <section className={style.imagesContainer}>
        {data.map((project) => {
          const { id, name, links, image } = project;
          const { code, web } = links;
          return (
            <div key={id} className={style.proyectContainer}>
              <img src={image} />
              <h4>{name}</h4>
              <div className={style.overlay}></div>
              <div className={style.linksContainer}>
                <a target="_blank" href={code}>
                  Ver codigo
                </a>
                <a target="_blank" href={web}>
                  Ver sitio
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
