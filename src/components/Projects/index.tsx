import "./styles.scss";

import { motion } from "framer-motion";
import { SliderProjects } from "./SliderProjects";

function Projects() {
  return (
    <>
      <div className="projectContainer">
        <h1>Projetos</h1>
        <main className="projectsContent">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            De uma olhada em alguns dos meus novos projetos, cada um deles é
            fruto de horas de dedicação e esforço, ainda irei colocar mais
            projetos aqui, cada vez mais complexos!
          </motion.p>
        </main>
        <SliderProjects />
      </div>
    </>
  );
}

export default Projects;
