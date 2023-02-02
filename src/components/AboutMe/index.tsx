import "./styles.scss";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <h1>Sobre Mim</h1>
      <div className="Main">
        <div className="AboutMePicture"/>
        <motion.div className="AboutMeText">
          <motion.h1
            initial={{ y: -50 }}
            whileInView={{ y: -200 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
          >
            Sou um amante da tecnologia, apaixonado por tudo que a envolve, meu
            objetivo é criar grandes aplicações que tenham impacto na vida das
            pessoas.
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
          >
            Ps: Eu também sou um rato de academia, adoro video game, amo viajar
            e conhecer o mundo, acho que a foto do lado demonstra bem isso...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
