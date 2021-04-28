import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import style from "./style.module.scss";
import { useState, useEffect } from "react";
import mockedProjects from "../data/projects.json";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projects = mockedProjects;

    setProjects(projects);
  }, []);

  return (
    <div>
      <Head>
        <title>Juani Gallo - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        name="Hola! Mi nombre es Juani Gallo"
        description="Y soy un desarrollador web de Buenos Aires, Argentina, apasionado por la
        performance, las nuevas tecnologias y unir el mundo online con el
        offline"
      />
      <section className={style.container}>
        <Resume />
        <Projects data={projects} />
      </section>
    </div>
  );
}
