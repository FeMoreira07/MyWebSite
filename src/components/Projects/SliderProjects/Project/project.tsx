import "./project.scss";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";


interface props {
  name: string;
  image: string;
  gitUrl: string;
  projectUrl?: string;
  description: string;
  animationTimer: number
}

export function Project({
  name,
  image,
  gitUrl,
  description,
  projectUrl,
  animationTimer
}: props) {
  return (
    <motion.body
      className="mainContent"
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.3,
        delay: animationTimer,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
    >
      <img src={image} alt="" className="imageSection"></img>
      <div className="descriptionSection">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="buttonSection">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3, backgroundColor: "#000000" }}
            onClick={() => {
              window.open(gitUrl);
            }}
          >
            GitHub <BsGithub />
          </motion.button>
          {projectUrl && (
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3, backgroundColor: "#E1D55D" }}
              onClick={() => {
                window.open(projectUrl);
              }}
            >
              Ver site <MdVisibility />
            </motion.button>
          )}
        </div>
      </div>
    </motion.body>
  );
}
