import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navGithub from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  //IagoAntunesFerreira
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <h2 className="nameLogo">Iago Ferreira</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/iagoaferreira/" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://github.com/IagoAntunes" target="_blank"><img src={navGithub} alt="Github" /></a>
              <a href="https://www.instagram.com/iago_ferreira010/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => window.open('https://drive.google.com/file/d/15YT_p6gQrjgEf2Rn8AoHB9ETN5ytDnO_/view?usp=sharing', '_blank')}><span>Resume</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
