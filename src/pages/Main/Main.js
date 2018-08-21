import React from 'react';
import './Main.css';
import Jumbotron from '../../components/Jumbotron';
import Nav from '../../components/Nav';
import { Container } from '../../components/Grid';

const Main = () => (
  <div className="backgroundMain">
    <Container fluid>
      <Nav />
      <Jumbotron>
        <h1 className="title">• Full Stack Web Developer •</h1>
        <h2 className="title2">• Lifelong Learner •</h2>
        <h3 className="title3">• Adventurer •</h3>
      </Jumbotron>
    </Container>
  </div>
);

export default Main;
