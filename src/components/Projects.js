import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/imgProjectPokedex.png";
import projImg2 from "../assets/img/imgProjectFisiotherapp.png";
import projImg3 from "../assets/img/imgProjectLove.png";
import projImg4 from "../assets/img/imgProjectFashion.png";

import projImg5 from "../assets/img/imgProjectLifeAt.png";
import projImg6 from "../assets/img/imgProjectLol.png";
import projImg7 from "../assets/img/imgProjectPomodoro.png";

import projImg8 from "../assets/img/imgProjectNLW.png";
import projImg9 from "../assets/img/imgProjectBookStore.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsMobile = [
    {
      title: "Pokedex App",
      description: "Pokedex App Developed in Xamarin Forms",
      imgUrl: projImg1,
    },
    {
      title: "Fisiotherapp",
      description: "Help patients with physical therapy exercises!",
      imgUrl: projImg2,
    },
    {
      title: "Elegant Mail App",
      description: "Send a message is a gift for your partner",
      imgUrl: projImg3,
    },
    {
      title: "Fashion Shop App",
      description: "Women's clothing app",
      imgUrl: projImg4,
    },
    
  ];
  const projectsDesktop = [
    {
      title: "LifeAt Desktop",
      description: "Desktop application inspired by LifeAt Developer's Website with Windows Forms",
      imgUrl: projImg5,
    },
    {
      title: "Pomodoro Technique",
      description: "Application of the pomodoro technique in a Desktop environment using Windows Forms",
      imgUrl: projImg7,
    }
  ];
  const projectsWeb = [
    {
      title: "School Web",
      description: "Proffy is a Web and Mobile application designed to help connect students and teachers",
      imgUrl: projImg8,
    },
    {
      title: "BookStore",
      description: "Web application that simulates a book registration system using ASP.NET",
      imgUrl: projImg9,
    }
  ];
  

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
}
