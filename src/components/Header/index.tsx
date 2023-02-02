import "./styles.scss";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
function Header() {
 

  function ScrollAction(scrollDistance: number) {
    window.scroll({ top: scrollDistance, behavior: "smooth" });
  }

  return (
    <div>
      <header>
        <nav>
          <a className="logo" href="/">
            DEV TEAM
          </a>
          <ul className= "nav-list">
            <li
              onClick={() => {
                ScrollAction(600);
              }}
            >
              Sobre Mim
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
                ScrollAction(2900);
              }}
            >
              Técnologias
            </li>
          </ul>
          <ul className="SocialMedias">
            <li>
              <a
                href="https://www.instagram.com/fe.moreira_01/"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsInstagram className="InstaLogo" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/felipe-moreira-1b8677230/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedinIn className="LinkedinLogo" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/FeMoreira07"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub className="GitHubLogo" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="BackgroundImage"></main>
    </div>
  );
}

export default Header;
