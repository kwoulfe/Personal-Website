import React from 'react';
import './About.css';
import Jumbotron from '../../components/Jumbotron';
import Nav from '../../components/Nav';
import { Container } from '../../components/Grid';

const About = () => (
  <div className="backgroundAbout">
    <Container fluid>
      <Nav />
      <Jumbotron />
      <h1 className="synopsis">
        <br />
        Full Stack Web Developer • Sacramento, California
        <br />
        <br />
        When I'm not coding, you'll find me riding my bike, hiking, camping, or
        building/fixing anything I can get my hands on. I also love baseball,
        watching movies, and eating good food.
        <br />
        My wife and I love to travel. All the lovely greenery photographed on
        this site is from a trip we recently took to Ireland. I can't wait to go
        back.
      </h1>
    </Container>
  </div>
);

export default About;
