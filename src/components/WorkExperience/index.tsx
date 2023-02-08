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
        viewport={{ once: true }}
      >
        Empresas para as quais já trabalhei e fiz projetos no passado
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
          viewport={{ once: true }}
        >
          <h1>01</h1>
          <h2>
            <span style={{ color: "red" }}>Continental</span>, estagiário
            Qualidade
          </h2>
          <p>
            Meu papel era prestar suporte na manutenção de equipamentos,
            garantindo que eles funcionassem corretamente. Isso incluía a
            resolução de problemas com fornecedores internacionais, muitas vezes
            através de comunicação por videoconferência.
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
          viewport={{ once: true }}
        >
          <h1>02</h1>
          <h2>
            <span style={{ color: "yellow" }}>Sambatech</span>, estagiário
            Front-end
          </h2>
          <p>
            Eu realizava implementações de interface de usuário (Front-end) de
            maneira eficiente, seguindo os designs UI com precisão. Além disso,
            eu também identificava e corrigia bugs e garantia a responsividade
            das aplicações em diferentes dispositivos.
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
          viewport={{ once: true }}
        >
          <h1>03</h1>
          <h2>
            <span style={{ color: "green" }}>Boticário</span>, Cliente Sambatech
          </h2>
          <p>
            Meu último grande desafio na Sambatech foi desenvolver um novo site
            administrativo para a Boticário. Como programador Front-end
            principal, eu tive a responsabilidade de garantir a excelência do
            desenvolvimento e a entrega de um produto final de alta qualidade.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
