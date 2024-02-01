import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export function Skills() {
  return (
    <div className="SkillsContainer">
      <motion.div
        className="SkillsTitle"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        viewport={{ once: true }}
      >
        <h1>Tecnologias aprendidas</h1>
        <p>
          Estas são as linguagens de programação nas quais eu possuo uma sólida
          experiência, acumulada ao longo de pelo menos um ano de trabalho e
          aprendizado constante.
        </p>
      </motion.div>
      <motion.div className="Skills">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <SiReact className="ReactSvg" />
          <h1>React</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <SiTypescript className="TypeScriptSvg" />
          <h1>TypeScript</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <SiJavascript className="JavaScriptSvg" />
          <h1>JavaScript</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <FaNodeJs className="NodeJsSvg" />
          <h1>NodeJs</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <SiHtml5 className="HtmlSvg" />
          <h1>HTML</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <SiCss3 className="CssSvg" />
          <h1>CSS</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
