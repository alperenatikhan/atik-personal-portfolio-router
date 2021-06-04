import React from 'react';
import './style.css';
import Summary from './Summary.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div id="page-wrapper">
      <Router>
        <section id="navbar">
          <div id="logo-name" className="navbar-col-left">
            {' '}
            <h2 id="logo-name"> Alperen Atik </h2>
            <p id="logo-subname"> Developer Portfolio Website </p>
          </div>

          <div id="nav-wrapper" className="navbar-col-right">
            <ul>
              <div className="nav-items">
                <li>
                  {' '}
                  <i className="fas fa-id-card" />
                  <Link to="/">Summary</Link>
                </li>
              </div>
              <div className="nav-items">
                <li>
                  {' '}
                  <i className="fas fa-store" />
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </div>
              <div className="nav-items">
                <li>
                  <i className="fas fa-globe" />
                  <Link to="/contact">Contact</Link>
                </li>
              </div>
            </ul>
          </div>
        </section>

        <Switch>
          <Route exact path="/">
            <Summary />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
            </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
