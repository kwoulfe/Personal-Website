import React from 'react';
import './Resume.css';
import { Container } from '../../components/Grid';

const Resume = () => (
  <div className="container-fluid">
    <Container fluid>
      <div className="header">
        <p>
          I’ve always been a builder. Blocks as a kid, skate ramps in my teens,
          bikes in my 20’s, and houses in my 30’s. Now...Web Applications. The
          correlation between all of these is astounding and they only get more
          and more advanced. If I could sum up in a word what I felt this meant
          about myself, it would be ‘growth.’ We live in exciting times, and Web
          Development is my passion. Front End technologies I am proficient in
          include HTML, CSS, JQuery, Bootstrap, Javascript, and most recently
          React. Back End technologies include: Express, MongoBD, MySQL, and
          NodeJS.
        </p>
      </div>
      <br />
      <h1>TECHNICAL SKILLS</h1>
      <p>- Front End: HTML, CSS, Javascript, JQuery, Bootstrap, React</p>
      <p>- Back End: Node, Express, SQL, MongoDB, API calls</p>
      <p>
        - General: DNS Configuration, Web Hosting, and 3rd party Mail Servers
      </p>
      <br />
      <h1>OTHER SKILLS</h1>
      <p>- Excellent written and verbal communication skills</p>
      <p>- A strong desire to problem solve</p>
      <p>
        - Ability to manage a team, promoting individual growth and
        strengthening interpersonal bonds
      </p>
      <br />
      <h1>EDUCATION</h1>
      <p>
        UC Davis Extension, Sacramento CA - Full Stack Coding Bootcamp
        Certification July 2018
      </p>
      <p>
        UC Santa Cruz, Santa Cruz CA - Modern Literary Studies B.A. Degree
        December 2005
      </p>
      <br />
      <h1>APPLICATIONS BUILT</h1>
      <br />
      <h2>Overtimers</h2>
      <p>
        - Josh Lippi and The Overtimers are a local Sacramento band. They
        reached out to me to build a website to promote their online presence.
        The site will serve as a central location for fans to find information
        about the band’s discography as well as give them access to reach out to
        the band through links to their Facebook, Twitter, Instagram, and
        Bandcamp pages.
      </p>
      <p>
        - Built with HTML, CSS, Bootstrap, Javascript, JQuery, Express, Node and
        Mailgun.
      </p>
      <p>- https://joshlippi.herokuapp.com/</p>
      <h2>DevHub</h2>
      <p>
        - Worked in a group of four and was primarily responsible for API
        routing, setting up MongoDB, and creating a login/signup function.
      </p>
      <p>
        - DevHub is a project hosting site for aspiring developers. With a
        crowdfunding feature, these developers can gauge public interest in
        their app before deciding to spend their life savings on launching their
        app.{' '}
      </p>
      <p>
        - Built with MERN, HTML, CSS, Bootstrap, PixiJS, Bcrypt, Axios, and Body
        Parser.
      </p>
      <p>- https://gentle-ravine-72255.herokuapp.com</p>
      <h2>Gems Sacramento</h2>
      <p>
        - Worked in a group of four and was primarily responsible for project
        proposal, Bootstrap/CSS, datasets, and project presentation.
      </p>
      <p>
        - Gems Sacramento is an App where users can look up fun, hip, and most
        importantly, FREE, things to do in their city. Once logged in, users can
        submit new cool places to the database to share with their community.
      </p>
      <p>
        - Built with HTML, CSS, Bootstrap, Node, Express, MySql, Passport, and
        Handlebars.
      </p>
      <p>- https://murmuring-bastion-76922.herokuapp.com/gems/all</p>
      <h2>Digital Nomads</h2>
      <p>
        - Worked in a group of four and was primarily responsible for using the
        Google Maps API as well as the Google Places API to display specific
        locations on the map.
      </p>
      <p>
        - A web app resource for the traveling workforce. Imagine being in a new
        city to work on a project. What do you need? Our app offers a one stop
        site for your needs. With a simple and beautiful UI, all you need to do
        is enter the city you’re in and immediately you’ll be prompted with a
        map of co-working spaces, local restaurants, bike shares, and the local
        weather.{' '}
      </p>
      <p>
        - Built with HTML, CSS, Javascript, and JQuery using Firebase as a
        database.
      </p>
      <p>- https://kwoulfe.github.io/DigitalNomads</p>
      <br />
      <h1>WORK EXPERIENCE</h1>
      <br />
      <h2>Freelance Web Development and Design 2018-Present</h2>
      <p>
        - Since graduating from UC Davis Extension’s Coding Bootcamp, I have
        been honing my development skills. I’ve started a handful of personal
        projects for myself and family.
      </p>
      <p>
        - I was recently hired by a band called Josh Lippi and the Overtimers to
        build a website for the band. It’s up and running, but still a work in
        progress.
      </p>
      <h2>Mike's Bikes Berkeley 2006-2015</h2>
      <p>
        - From intern to mechanic to manager, I worked in the service department
        of Mike’s Bikes in Berkeley for close to a decade. In that time I
        quickly rose the ranks from intern to manager. I managed a team that
        varied in size from 3 to 6 employees for close to 6 years, some of whom
        I consider good friends to this day.{' '}
      </p>
      <p>
        - Responsibilities include but are not limited to: hiring • firing •
        creating employee schedules • ensuring a daily productive repair
        schedule • working 1 on 1 with vendors for processing warranty claims
        and in house suspension repair • attending quarterly management meetings
        with President of the company • creating a productivity spreadsheet to
        track individual mechanic repair output • managing a weekly bike repair
        clinic • communicating directly with the CEO and President • providing
        mechanical support for local bike races and other sponsored events •
        working with Facilities and IT to maintain a safe and functional work
        environment.
      </p>
      <br />
      <h1>OTHER</h1>
      <p>
        - June 2015 through December 2015 were spent traveling Europe and Asia.
        One of the best things I’ve ever done.
      </p>
      <p>
        - February 2016 my wife and I bought a 90 year old duplex in Sacramento
        and have been renovating it ourselves ever since (taking down walls,
        running new electrical, gutting both kitchens and bathrooms, laying new
        flooring, you name it!). Certainly one of the most challenging and
        rewarding things I’ve taken on.
      </p>
    </Container>
  </div>
);

export default Resume;
