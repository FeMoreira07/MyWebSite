import "./styles.scss";
import { motion } from "framer-motion";

export function WorkExperience() {
  return (
    <div className="Container">
      <h1>Experiência Profissional</h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Empresas para quais já trabalhei e fiz projetos no passado
      </motion.p>
      <div className="DescriptionContainer">
        <motion.div
          className="WorksExperience"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1>01</h1>
          <h2>
            <span style={{ color: "red" }}>Continental</span>, estagiário
            Qualidade
          </h2>
          <p>
            Meu trabalho era dar suporte na manutenção das peças e resolver
            problemas com os fornecedores internacionais, muitas vezes por
            ligação de vídeo.
          </p>
        </motion.div>
        <motion.div
          className="WorksExperience"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1>02</h1>
          <h2>
            <span style={{ color: "yellow" }}>Sambatech</span>, estagiário
            Front-end
          </h2>
          <p>
            Fazia implementações Front-end diretamente dos designs UI, correções
            de bugs e correções de responsividade.
          </p>
        </motion.div>
        <motion.div
          className="WorksExperience"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1>03</h1>
          <h2>
            <span style={{ color: "green" }}>Boticário</span>, Cliente Sambatech
          </h2>
          <p>
            Meu último grande projeto na sambatech foi ser responsável por
            recriar um site administrativo para a boticário, onde eu era o
            programador front-end principal da equipe.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
