import React from 'react';
import {Jumbotron, Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Fade } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Pdf from '../resume.pdf';


// todo: decorations, github api to showcase projects, contact me to syjanna1@gmail.com( not as important), deploy with aws

class Header extends React.Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fadeIn: true,
      fadeTimeout: 1000
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar color="light" light expand="md" >
        <Container>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/profile/">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={Pdf} target="_blank">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/syjanna"><FontAwesomeIcon icon={faGithub}  /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/syjanna/"><FontAwesomeIcon icon={faLinkedin} /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Jumbotron>
        <h1 className="display-3">Anna Jo</h1>
        <p className="lead"> Software Engineer </p>
        <Fade in={this.state.fadeIn} timeout={this.state.fadeTimeout}><p> Hi! I'm a computer science student graduating in May 2020!</p></Fade>

      </Jumbotron>
      </div>
    );
  }
}

export default Header;
