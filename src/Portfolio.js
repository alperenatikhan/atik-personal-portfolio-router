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
            <Typing>
              <h2 className="section-title"> ReactJS Projects </h2>
            </Typing>
          </div>
        </div>
        <div className="text-space">
          <h4 className="section-subtitle">Individual Projects</h4>

          <ol>
            <li>
              <p>
                <strong>Dogs of Poland:</strong> In this project, I coded a{' '}
                <a
                  href="https://https://dogsofpoland.netlify.app/"
                  className="text-link"
                  target="_blank"
                >
                  {' '}
                  "dog adoption"{' '}
                </a>
                web app. For retrieving the announcements, I have written a{' '}
                <a
                  href="https://github.com/alperenatikhan/dogo/blob/main/imgscraper.js"
                  className="text-link"
                  target="_blank"
                >
                  Puppeteer webscraper
                </a>{' '}
                which focuses on the recent offers published in OLX.pl. Later, I
                collected the results under a{' '}
                <a
                  href="https://dogsofpoland-default-rtdb.europe-west1.firebasedatabase.app/.json"
                  className="text-link"
                  target="_blank"
                >
                  Firebase Real-Time Database
                </a>{' '}
                which serves as the REST API of this project. In addition, I
                used{' '}
                <a
                  href="https://bulma.io/"
                  className="text-link"
                  target="_blank"
                >
                  Bulma
                </a>{' '}
                for styling the website. The actual{' '}
                <a
                  href="https://dogsofpoland.netlify.app/"
                  className="text-link"
                  target="_blank"
                >
                  Netlify app
                </a>{' '}
                as well as{' '}
                <a
                  href="https://ghjch.csb.app/"
                  className="text-link"
                  target="_blank"
                >
                  CodeSandbox
                </a>{' '}
                and{' '}
                <a
                  href="https://github.com/alperenatikhan/bulma-dogo"
                  className="text-link"
                  target="_blank"
                >
                  {' '}
                  Github repository
                </a>{' '}
                are now open to access
              </p>
            </li>

            <li>
              <p>
                <strong> Dynamic Wikipedia Explorer:</strong> By using the
                Wikipedia REST API, I coded a{' '}
                <a
                  href="https://atik-wiki.netlify.app/"
                  className="text-link"
                  target="_blank"
                >
                  dynamic search app{' '}
                </a>{' '}
                which brings the article summary and main photo. In future, I
                will use the experience from this app for bringing up necessary
                information in my following projects.
                . The working{' '}
                <a
                  href="https://atik-wiki.netlify.app"
                  className="text-link"
                  target="_blank"
                >
                  Netlify app
                </a>{' '}
                and the{' '}
                <a
                  href="https://codesandbox.io/s/green-cdn-mxdpu"
                  className="text-link"
                  target="_blank"
                >
                CodeSandBox
                </a>{' '}
                of the project is open to access.
              </p>
            </li>

            <li>
              <p>
                <strong> Weather App:</strong> By using the OpenWeather API and
                Unsplash API I made a weather website. Currently, I have been
                working on location-based weather forecasts, possible ways of
                linking the Skyscanner and Booking.com APIs. The live code can
                be seen in the{' '}
                <a
                  href="https://react-weather-app-draft.stackblitz.io/"
                  className="text-link"
                  target="_blank"
                >
                  Stackblitz version
                </a>
                . The most recent{' '}
                <a
                  href="https://atik-weather.netlify.app"
                  className="text-link"
                  target="_blank"
                >
                  Netlify app
                </a>{' '}
                and the{' '}
                <a
                  href="https://github.com/alperenatikhan/react-weather-app-draft"
                  className="text-link"
                  target="_blank"
                >
                  Github repository
                </a>{' '}
                of the project are now available.
              </p>
            </li>

            <li>
              <p>
                <strong>RSS Daily News:</strong> I coded a daily news website by
                combining the Guardian RSS feed with rss2json API. For
                retrieving the relevant photos I used the Unsplash API. The most
                recent{' '}
                <a
                  href="https://rss-news-app.netlify.app/"
                  className="text-link"
                  target="_blank"
                >
                  Netlify app
                </a>{' '}
                as well as{' '}
                <a
                  href="https://rss-daily-news.stackblitz.io/"
                  className="text-link"
                  target="_blank"
                >
                  Stackblitz code
                </a>{' '}
                and{' '}
                <a
                  href="https://github.com/alperenatikhan/rss-daily-news"
                  className="text-link"
                  target="_blank"
                >
                  {' '}
                  Github repository
                </a>{' '}
                are now open to access
              </p>
            </li>

            <li>
              <p>
                <strong> Virtual Currency Price Tracker:</strong> This project
                brings the real-time updating information about the virtual
                currency prices. For completing this project I used the
                Coingecko and Quickchart.io APIs. The most recent versions of
                the
                <a
                  href="http://virtual-currency-tracker.netlify.app/"
                  className="text-link"
                  target="_blank"
                >
                  {' '}
                  Netlify app
                </a>
                ,
                <a
                  href="https://virtual-currency-tracker.stackblitz.io/"
                  className="text-link"
                  target="_blank"
                >
                  Stackblitz code
                </a>{' '}
                and
                <a
                  href="https://github.com/alperenatikhan/virtual-currency-tracker"
                  className="text-link"
                  target="_blank"
                >
                  {' '}
                  Github repository
                </a>{' '}
                are now available.
              </p>
            </li>
          </ol>

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
            <Typing>
              <h2 className="section-title"> Python Projects </h2>
            </Typing>
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
                  href="https://palegreenstimulatingdos--alperenatik.repl.co/"
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
                Python's webscraping libraries. In future, I want to improve the
                user interactions and visual design by using React.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
