import "./styles.scss";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export function ContactMe() {
  function ScrollAction(scrollDistance: number) {
    window.scroll({ top: scrollDistance, behavior: "smooth" });
  }

  return (
    <div className="Footer">
      <div className="Links">
        <h1>Felipe Moreira</h1>
        <div className="LinksSection">
          <a
            href="https://www.instagram.com/fe.moreira_01/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsInstagram className="InstagramSvg" />
          </a>
          <a
            href="https://github.com/FeMoreira07"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsGithub className="GitHubSvg" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-moreira-1b8677230/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedinIn className="LinkedinSvg" />
          </a>
        </div>
        <p>E-mail: moreirafelipe@gmail.com</p>
      </div>
      <div className="Options">
        <ul>
          <li
            onClick={() => {
              ScrollAction(600);
            }}
          >
            Sobre mim
          </li>
          <li
            onClick={() => {
              ScrollAction(1350);
            }}
          >
            Projetos
          </li>
          <li
            onClick={() => {
              ScrollAction(2100);
            }}
          >
            Experiências
          </li>
          <li
            onClick={() => {
              ScrollAction(2800);
            }}
          >
            Tecnologias
          </li>
        </ul>
      </div>
    </div>
  );
}
