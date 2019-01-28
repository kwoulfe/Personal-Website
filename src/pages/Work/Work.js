import React from 'react';
import './Work.css';
import Jumbotron from '../../components/Jumbotron';
import Nav from '../../components/Nav';
import { Col, Row, Container } from '../../components/Grid';

const Work = () => (
  <div className="backgroundWork">
    <Container fluid>
      <Nav />
      <Jumbotron />
      <Row>
        <Col size="md-12">
          <Row>
            <Col size="md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Overtimers
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="https://github.com/kwoulfe/joshLippi/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReadMe
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/kwoulfe/joshLippi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://kwoulfe.github.io/joshLippi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </Col>
            <Col size="md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  DevHub
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="https://github.com/kwoulfe/DevHub/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReadMe
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/kwoulfe/DevHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://gentle-ravine-72255.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </Col>
            <Col size="md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Gems
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="https://github.com/Project-2-Node-Express/Gems/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReadMe
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/Project-2-Node-Express/Gems"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://murmuring-bastion-76922.herokuapp.com/gems/all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </Col>
            <Col size="md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  DigitalNomads
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="https://github.com/kwoulfe/DigitalNomads/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReadMe
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/kwoulfe/DigitalNomads"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://kwoulfe.github.io/DigitalNomads/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Work;
