import React from 'react';
import './About.css';
import Jumbotron from '../../components/Jumbotron';
import Nav from '../../components/Nav';
import { Container } from '../../components/Grid';

const About = () => (
  <div className="backgroundAbout">
    <Container fluid>
      <Nav />
      <Jumbotron>
        <h1 className="synopsis">
          <br />
          Full Stack Web Developer • Sacramento, California
          <br />
          <br />
          Currently working as a <i>Front End Web Production Specialist</i> for the California Chamber of Commerce.
          {/* About a year ago I decided to change careers from Bicycle Retail to
          Web Development. It's been one of the most rewarding decisions of my
          life. I once heard someone describe coding as "fireworks for your
          brain," and I couldn't agree more. I'm certainly not afraid of a
          challenge and for that reason alone, I know I'm in the right field. I
          love the problem solving and attention to detail that Web Development
          requires and take great joy in creating clean, workable sites with
          crisp and concise code. */}
          <br />
          <br />
          When I'm not coding, you'll find me riding my bike, hiking, camping,
          or building/fixing anything I can get my hands on.
          <br />
          <br />
          My wife and I love to travel. All the lovely greenery photographed on
          this site is from a trip we recently took to Ireland. I can't wait to
          go back.
        </h1>
      </Jumbotron>
    </Container>
  </div>
);

export default About;
