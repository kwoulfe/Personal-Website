import React from 'react';
import './Contact.css';
import Jumbotron from '../../components/Jumbotron';
import Nav from '../../components/Nav';
import { Container } from '../../components/Grid';

const Contact = () => (
  <div className="backgroundContact">
    <Container fluid>
      <Nav />
      <Jumbotron className="contact">
        <h1 className="details">
          <br />
          <br />
          <a className="contactInfo" href="mailto:info@kevinwoulfe.com">
            info@kevinwoulfe.com
          </a>
          <br />
          <br />
          <a
            className="contactInfo"
            href="https://www.linkedin.com/in/kevin-woulfe"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <br />
          <a
            className="contactInfo"
            href="https://github.com/kwoulfe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br />
          <br />
          <a
            className="contactInfo"
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </h1>
      </Jumbotron>
    </Container>
  </div>
);

export default Contact;
