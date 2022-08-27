import React from "react";
import Nav from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <body>
        <Nav />

        <section className="hero2-image">
          <div className="container2">
            <h1>
              <span>Katya Juliet</span>
            </h1>
            <span className="des">Full-Stack Developer & Designer</span>
            <a href="https://drive.google.com/file/d/1U3SZqt3USbY6xHrIhejREAE91VUp3qZ0/view?usp=sharing">
              <div
                className="container2-btn2:hover"
                id="btn2"
              ></div>
            </a>
          </div>
        </section>

        <flex-container id="about">
          <div className="flex-child-1">
            <img src="./img/katya-2.png" alt="katya lerner bio pic"></img>
          </div>

          <div className="flex-child-2">
            <h2>About Me</h2>
            <p>
              Hello! I am a UC Berkeley certified full-stack developer &
              designer with years of experience in technical project management
              and consulting.
            </p>
            <p>
              I graduated with honors from UC Davis with a B.A in Communication,
              focusing on digital media, bias & consumer behaviors. 
              </p>
              <p>I am
              motivated, honest, efficient, creative and committed to continuous
              learning. I am a team player and intuitive by nature. I believe
              that communication and authenticity are the keys to success.
            </p>
            <p>
              I am confident that I will be an asset to your business and look
              forward to meeting you.
            </p>
            <br></br>
            <h2>Education</h2>
            <p>
              University of California - UC Berkeley<br></br>
              Certificate - Full-Stack Developer. August 2022.
            </p>
            <p>
              University of California - UC Davis<br></br>
              Bachelor of Arts in Communication, June 2015, Graduated with
              Honors.
            </p>
          </div>
        </flex-container>

        <div className="first hero" id="portfolio">
          <img className="hero-profile-img" src="./img/sphere.png" alt=""></img>
          <div className="hero-description-bk"></div>
          <div className="hero-logo">
            <img
              src="./img/kL.png"
              alt="Katya Juliet Lerner Full-Stack Developer"
            ></img>
          </div>
          <div className="hero-description">
            <p>The Sphere</p>
          </div>
          <div className="hero-date">
            <p>August 2022</p>
          </div>
          <div className="hero-btn">
            <a href="https://sorcerers-sphere.herokuapp.com/" rel="no opener">
              View Website
            </a>
          </div>
        </div>

        <div className="second hero">
          <img className="hero-profile-img" src="./img/mighty.png" alt=""></img>
          <div className="hero-description-bk"></div>
          <div className="hero-logo">
            <img
              src="./img/kL.png"
              alt="Katya Juliet Lerner Full-Stack Developer"
            ></img>
          </div>
          <div className="hero-description">
            <p>Mighty Tech Blog</p>
          </div>
          <div className="hero-date">
            <p>June 2022</p>
          </div>
          <div className="hero-btn">
            <a href="https://mighty-tech.herokuapp.com/" rel="no opener">
              View Website
            </a>
          </div>
        </div>

        <div className="third hero">
          <img className="hero-profile-img" src="./img/tarot.png" alt=""></img>
          <div className="hero-description-bk"></div>
          <div className="hero-logo">
            <img
              src="./img/kL.png"
              alt="Katya Juliet Lerner Full-Stack Developer"
            ></img>
          </div>
          <div className="hero-description">
            <p>Free Tarot Pick-a-Card</p>
          </div>
          <div className="hero-date">
            <p>May 2022</p>
          </div>
          <div className="hero-btn">
            <a href="https://ishalernertarotcards.com/" rel="no opener">
              View Website
            </a>
          </div>
        </div>

        <div className="fourth hero">
          <img className="hero-profile-img" src="./img/siono.png" alt=""></img>
          <div className="hero-description-bk"></div>
          <div className="hero-logo">
            <img
              src="./img/kL.png"
              alt="Katya Juliet Lerner Full-Stack Developer"
            ></img>
          </div>
          <div className="hero-description">
            <p>Siono Music App</p>
          </div>
          <div className="hero-date">
            <p>March 2022</p>
          </div>
          <div className="hero-btn">
            <a href="https://sionoapp.com/" rel="no opener">
              View Website
            </a>
          </div>
        </div>

        <div className="fifth hero">
          <img
            className="hero-profile-img"
            src="./img/task-master.png"
            alt=""
          ></img>
          <div className="hero-description-bk"></div>
          <div className="hero-logo">
            <img
              src="./img/kL.png"
              alt="Katya Juliet Lerner Full-Stack Developer"
            ></img>
          </div>
          <div className="hero-description">
            <p>Task Master Pro</p>
          </div>
          <div className="hero-date">
            <p>March 2022</p>
          </div>
          <div className="hero-btn">
            <a
              href="https://katyajuliet.github.io/taskmaster-pro/"
              rel="no opener"
            >
              View Website
            </a>
          </div>
        </div>

        <div className="sixth hero">
          <img
            className="hero-profile-img"
            src="./img/iblbeauty.png"
            alt=""
          ></img>
          <div className="hero-description-bk"></div>
          <div className="hero-logo">
            <img
              src="./img/kL.png"
              alt="Katya Juliet Lerner Full-Stack Developer"
            ></img>
          </div>
          <div className="hero-description">
            <p>IBL Beauty Academy</p>
          </div>
          <div className="hero-date">
            <p>November 2021</p>
          </div>
          <div className="hero-btn">
            <a href="https://www.iblbeautyacademy.com/" rel="no opener">
              View Website
            </a>
          </div>
        </div>

        <section id="skills">
          <h2 id="skills">
            <span>Skills</span>
          </h2>
          <li>MERN Stack, React JS, MongoDB, Express JS, Node Js</li>
          <li>Tailwind, HTML5, CSS, Javascript</li>
          <li>Jquery, Bootstrap, JEST</li>
          <li>Web APIs, Third-Party APIs, Server-Side APIs</li>
          <li>State, OPP, ORM, MySQL, NoSQL</li>
          <li>PWAs, Wire framing, UI/UX, Code Optimization</li>
          <li>
            JWT, Insomnia, Heroku, Visual Studio Code, Github, Jira, Figma
          </li>
          <li>Computer science knowledge</li>
          <li>Technical documentation</li>
          <li>Agile software development</li>
          <li>Technical project management, Scrum &amp; Kanban</li>
          <li>All website template builders</li>
          <li>WIX Pro</li>
          <li>Canva Pro Designer</li>
          <li>Logic Pro X / Audio editing</li>
          <li>Final Cut Pro / Video editing</li>
          <li>Consulting / Communication strategy</li>
          <li>Flipsnack, Yumpu, Digital Magazine design &amp; curation</li>
          <li>Social Media Marketing / Digital Marketing / Marketing&nbsp;</li>
          <li>Microsoft Office / Google Docs, sheets, preso +</li>
        </section>

       <Footer />
      </body>
    </div>
  );
}

export default App;
