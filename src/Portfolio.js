import React from 'react';
import Typing from 'react-typing-animation';

export default function Portfolio() {
  return (
    <section className="main">
      <div className="main-wrapper" id="react-wrapper">
        <div className="hero-pic-container">
          <img
            className="hero-pic"
            src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
            alt=""
          />

          <div className="header-space">
            <Typing><h2 className="section-title"> ReactJS Projects </h2></Typing>
          </div>
        </div>
        <div className="text-space">
          <h4 className="section-subtitle">
            Freecodecamp Certificate Projects
          </h4>
          <ol>
            <li>
              <p>
                {' '}
                <strong> Love Messages with Changing Backgrounds:</strong> I
                took the "Quotation Machine" challenge with a different touch
                and purpose. For changing backgrounds, I used Unsplash API.{' '}
                Please visit the live version in
                <a
                  href="https://love-postcards.stackblitz.io"
                  className="text-link"
                  target="_blank"
                >
                  {' '}
                  love-postcards.stackblitz.io{' '}
                </a>
                or see the code in
                <a
                  className="text-link"
                  href="https://github.com/alperenatikhan/love-postcards"
                  target="_blank"
                >
                  {' '}
                  Github repo
                </a>
                .
              </p>
            </li>

            <li>
              <p>
                {' '}
                <strong> Drum Machine :</strong> My first experience with state,
                props and event listeners in ReactJS. This complex project also
                helped me to refresh my knowledge on CSS basics.{' '}
              </p>
            </li>

            <li>
              <p>
                {' '}
                <strong> Calculator :</strong> For solving the calculator
                challenge, I made use of Bootstrap and React props.{' '}
              </p>
            </li>
          </ol>

          <h4 className="section-subtitle">Individual Projects</h4>

          <ol>
            <li>
              <p>
                <strong> Weather App:</strong> By using OpenWeather API, I made
                a weather website. Currently, I have been working on
                location-based weather forecasts and results from the major
                mega-cities. The <a href="react-weather-app-draft.stackblitz.io/" className= "text-link">live version  </a> is now available.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className="main-wrapper" id="python-wrapper">
        <div className="hero-pic-container">
          <img
            className="hero-pic"
            src="https://www.freepngimg.com/download/android/72537-icons-python-programming-computer-social-tutorial.png"
            alt=""
          />

          <div className="header-space">
            <Typing><h2 className="section-title"> Python Projects </h2></Typing>
          </div>
        </div>

        <div className="text-space">
          <h4 className="section-subtitle">Webscrapers</h4>

          <ol>
            <li>
              <p>
                {' '}
                <strong> Literature Search:</strong> I coded webscrapers for
                retrieving information from scientific articles - such as
                abstracts, author names, doi numbers and download links. I coded
                webscrapers for the most prestigious academic portals such as
                <a
                  href="https://replit.com/@AlperenAtik/Tandf-explorer-1"
                  className="text-link"
                  target="_blank"
                >
                  {' '}
                  TandfOnline{' '}
                </a>{' '}
                and{' '}
                <a
                  href="https://replit.com/@AlperenAtik/linkspr-explorer"
                  className="text-link"
                  target="_blank"
                >
                  LinkSpringer
                </a>
                . Later, I coded a webscraper for retrieving results in{' '}
                <a
                  href="https://replit.com/@AlperenAtik/DergiParkScraper"
                  className="text-link"
                  target="_blank"
                >
                  Dergipark
                </a>{' '}
                - Turkey's central index for academic journals.
              </p>
            </li>
          </ol>

          <h4 className="section-subtitle">Flask Websites</h4>

          <ol>
            <li>
              <p>
                <strong> Database Search for Academic Journals:</strong> I
                developed a simple{' '}
                <a
                  href="https://replit.com/@AlperenAtik/FlaskRss"
                  className="text-link"
                  target="_blank"
                >
                  Flask website
                </a>{' '}
                for searching in the collection of tens of thousands of results
                from my previously aggragated webscrapers. For formatting the
                sqlite database, I used Python's "Pandas" library in "Jupyter
                Notebooks".{' '}
              </p>
            </li>
            <li>
              <p>
                <strong> RSS Reader:</strong> By using Flask, I tried to code a{' '}
                <a
                  href="https://replit.com/@AlperenAtik/FlaskRss"
                  className="text-link"
                  target="_blank"
                >
                  daily news website
                </a>
                . In this project, I played with the RSS reader functions of
                Python's webscraping libraries. In future, I want to improve the user interactions and visual design by using React.
      
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
