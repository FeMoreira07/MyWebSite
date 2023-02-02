import { motion } from "framer-motion";
import { Project } from "./Project/project";
import NlwImage from "../../../images/nlw.png";
import AskMeLogo from "../../../svg/Askme.svg";
import AndroidLogo from "../../../images/AndroidLogo.jpg";

import "./styles.scss";

export function SliderProjects() {
  return (
    <>
      <motion.div className="projectsSection">
        <Project
          name="NLW "
          image={NlwImage}
          gitUrl="https://github.com/FeMoreira07/GetYourDuo-Web"
          description="Encontre pessoas para jogar os jogos mais polulares da twitch, ou crie um anúncio e deixe os outros encontrarem você!"
          projectUrl="https://get-your-duo-web.vercel.app/"
          animationTimer={1.3}
        />
        <Project
          name="AskMe App"
          image={AskMeLogo}
          gitUrl="https://github.com/FeMoreira07/Askme-App"
          description="Crie salas para mandarem perguntas para você, ou entre em uma sala já criada e faça suas perguntas! "
          animationTimer={1.5}
        />
        <Project
          name="Web Page"
          image={AndroidLogo}
          gitUrl="https://github.com/FeMoreira07/Amdroid-History-webPage"
          description="Este é o meu primeiro site 100% responsivo, onde eu conto a história de como a logo do android foi criada!"
          animationTimer={1.8}
        />
        <Project
          name="NLW - mobile"
          image={NlwImage}
          gitUrl="https://github.com/FeMoreira07/GetYourDuo-Web"
          description="Versão mobile usando React native do meu projeto NLW encontre seu duo para jogar jogos ou crie seu próprio anúncio!"
          animationTimer={2.2}
        />
      </motion.div>
    </>
  );
}
