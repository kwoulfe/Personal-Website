import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
