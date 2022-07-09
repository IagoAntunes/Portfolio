import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgPokedex from "../assets/img/imgProjectPokedex.png";
import projImgFisio from "../assets/img/imgProjectFisiotherapp.png";
import projImgLove from "../assets/img/imgProjectLove.png";
import projImgFashion from "../assets/img/imgProjectFashion.png";

import projImgLifeAt from "../assets/img/imgProjectLifeAt.png";
import projImgLol from "../assets/img/imgProjectLol.png";
import projImgPomo from "../assets/img/imgProjectPomodoro.png";

import projImgSchool from "../assets/img/imgProjectNLW.png";
import projImgBook from "../assets/img/imgProjectBookStore.png";
import projImgBank from "../assets/img/imgProjectNubank.svg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsMobile = [
    {
      title: "Pokedex App",
      description: "Pokedex App Developed in Xamarin Forms",
      imgUrl: projImgPokedex,
      linkGit: 'https://github.com/IagoAntunes/Pokedex'
    },
    {
      title: "Fisiotherapp",
      description: "Help patients with physical therapy exercises!",
      imgUrl: projImgFisio,
      linkGit: 'https://github.com/IagoAntunes/Fisiotherapp'
    },
    {
      title: "Elegant Mail App",
      description: "Send a message and a gift for your partner",
      imgUrl: projImgLove,
      linkGit: 'https://github.com/IagoAntunes/CorreioElegante'
    },
    {
      title: "Fashion Shop App",
      description: "Women's clothing app",
      imgUrl: projImgFashion,
      linkGit: 'https://github.com/IagoAntunes/FashionShop'
    },
    {
    title: "Finance App",
    description: "Finance home app screen",
    imgUrl: projImgBank,
    linkGit: 'https://github.com/IagoAntunes/AppNubank'
    },
      //IagoAntunesFerreira
  ];
  const projectsDesktop = [
    {
      title: "Login League of Legends",
      description: "League of Legends Login Screen",
      imgUrl: projImgLol,
      linkGit: 'https://github.com/IagoAntunes/LoginLOL'
    },
    {
      title: "LifeAt Desktop",
      description: "Desktop application inspired by LifeAt Developer's Website with Windows Forms",
      imgUrl: projImgLifeAt,
      linkGit: 'https://github.com/IagoAntunes/LifeAt'
    },
    {
      title: "Pomodoro Technique",
      description: "Application of the pomodoro technique in a Desktop environment using Windows Forms",
      imgUrl: projImgPomo,
      linkGit: 'https://github.com/IagoAntunes/Pomodoro'
    }
  ];
  const projectsWeb = [
    {
      title: "School Web",
      description: "Proffy is a Web and Mobile application designed to help connect students and teachers",
      imgUrl: projImgSchool,
      linkGit: 'https://github.com/IagoAntunes/DevSchool-NLW'
    },
    {
      title: "BookStore",
      description: "Web application that simulates a book registration system using ASP.NET",
      imgUrl: projImgBook,
      linkGit: 'https://github.com/IagoAntunes/BookStore'
    }
  ];
  
  //IagoAntunesFerreira
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>See below my projects developed for studies</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Desktop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsMobile.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsDesktop.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projectsWeb.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}  //IagoAntunesFerreira
