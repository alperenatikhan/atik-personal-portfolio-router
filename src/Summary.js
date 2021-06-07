import React from 'react';

export default function Summary() {
  return (
    <section className="main">
      <div id="short-bio-wrapper" className="main-wrapper">
        <div id="hero-pic-wrapper" className="hero-pic-container">
          <img
            className="hero-pic"
            id="hero"
            src="https://i.imgur.com/Bz0kAbS.png"
            alt=""
          />
          <div className="header-space" id="prime-title">
            <h2 className="section-title"> Short Bio </h2>
            <h4 className="section-subtitle">
              Researcher, Journalist, <span id="developer-span">Developer</span>
            </h4>
          </div>
        </div>
        <div className="text-space">
          <p>
            {' '}
            I am a{' '}
            <a
              href="https://uni-flensburg.academia.edu/AlperenAtik"
              className="text-link"
              target="blank"
            >
              Ph.D candidate{' '}
            </a>{' '}
            in Sociology,{' '}
            <a
              href="https://www.opendemocracy.net/en/author/alperen-atik/"
              className="text-link"
              target="blank"
            >
              {' '}
              Independent Journalist{' '}
            </a>{' '}
            and a budding coder. During the research for my doctoral
            dissertation, I had to analyse more than four hundred documents. For
            my research, I wrote a webscraper with a{' '}
            <a
              href="https://replit.com/@AlperenAtik/parklarbizimfinder"
              className="text-link"
              target="blank"
            >
              keyword retrieval
            </a>{' '}
            function. For coding{' '}
            <a
              href="https://replit.com/@AlperenAtik/ParklarBizimScraper"
              target="_blank"
              className="text-link"
            >
              my first well-developed webscraper{' '}
            </a>
            , I learnt the basics of Python by following the tutorials in{' '}
            <a
              href="https://www.codecademy.com/"
              className="text-link"
              target="blank"
            >
              CodeCademy
            </a>
            . Gradually, I have coded webscrapers for{' '}
            <a
              href="https://replit.com/@AlperenAtik/Tandf-explorer-1"
              className="text-link"
              target="blank"
            >
              literature
            </a>{' '}
            and{' '}
            <a
              href="https://replit.com/@AlperenAtik/Wiki-references-scraper"
              target="blank"
              className="text-link"
            >
              {' '}
              archive
            </a>{' '}
            research for several{' '}
            <a
              href="https://replit.com/@AlperenAtik/linkspr-explorer"
              className="text-link"
              target="_blank"
            >
              {' '}
              academic journals
            </a>
            ,{' '}
            <a
              href="https://replit.com/@AlperenAtik/Bianet-English-Archive-Search"
              className="text-link"
              target="_blank"
            >
              news portals
            </a>{' '}
            and{' '}
            <a
              href="https://replit.com/@AlperenAtik/The-New-Yorker"
              className="text-link"
              target="_blank"
            >
              {' '}
              popular magazines
            </a>
            .
          </p>

          <p>
            {' '}
            My web-developer adventure started after completing freecodecamp's
            "Responsive Design" tutorial and projects. The first web app I
            designed was a{' '}
            <a
              href="https://palegreenstimulatingdos--alperenatik.repl.co/"
              target="_blank"
              className="text-link"
            >
              Flask website
            </a>{' '}
            which presents results from my webscrapers. Currently, I am learning
            ReactJs and preparing{' '}
            <a
              href="https://codepen.io/alperen-atik/"
              target="_blank"
              className="text-link"
            >
              projects
            </a>{' '}
            for freecodecamp's "Front End Developer" certification. In future, I
            want to shape my skills for MERN (MongoDB, Express, React, Node.js)
            and alternative Flask-React stacks.{' '}
          </p>
        </div>
      </div>
      <div id="secondary-card">
        <div className="header-space">
          <h2 className="section-title"> Details </h2>
        </div>
        <div className="text-space">
          <h4 className="section-subtitle"> Spoken Languages:</h4>
          <p style={{ textAlign: 'left' }}>
            Turkish (Native) <br /> English (Advanced) <br /> German
            (Intermediate) <br /> Polish(Beginner){' '}
          </p>

          <h4 className="section-subtitle">
            {' '}
            Programming Languages and Frameworks:{' '}
          </h4>

          <p style={{ textAlign: 'left' }}>
            Javascript (React) <br /> Python (Flask){' '}
          </p>
        </div>
      </div>
    </section>
  );
}
