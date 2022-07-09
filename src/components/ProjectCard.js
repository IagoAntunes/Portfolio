import { Col } from "react-bootstrap";
import imgProjectPokedex from '../assets/img/imgProjectPokedex.png';
import navGithub from '../assets/img/github.svg';
  //IagoAntunesFerreira
export const ProjectCard = ({ title, description, imgUrl,linkGit }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-git">
            <a href={linkGit} target="_blank"><img src={navGithub} alt="Github" /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
