import "./styles.scss";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <h1>Sobre Mim</h1>
      <div className="Main">
        <div className="AboutMePicture" />
        <motion.div className="AboutMeText">
          <motion.h1
            initial={{ y: -50 }}
            whileInView={{ y: -200 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            Quem sou eu?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
           Sou apaixonado por programação e acredito no poder da tecnologia para transformar vidas. Meu objetivo é criar aplicações inovadoras e de impacto positivo na sociedade, contribuindo para uma melhor qualidade de vida das pessoas.
          </motion.p>
          <motion.p
            className="SecondText"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
             Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e realizar meus sonhos
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
