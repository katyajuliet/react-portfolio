import React from "react";

const Nav = () => {
return (
    <div>
    <nav>
      <div className="container1">
        <div className="row">
          <div className="box-1">
            <div className="row img">
              <a href="#about">
                <img className="nav-img" src="./img/about.png" alt="about icon"></img>
              </a>
            </div>
          </div>
          <div className="box-1">
            <div className="row img">
              <a href="#portfolio">
                <img className="nav-img" src="./img/portfolio.png" alt="portfolio icon"></img>
              </a>
            </div>
          </div>
          <div className="box-1">
            <div className="row img">
              <a href="#skills">
                <img className="nav-img" src="./img/skills.png"alt="skills icon"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn"
        href="https://www.linkedin.com/in/katyajlerner"
        rel="no opener"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a
        className="btn3"
        href="https://github.com/katyajuliet"
        rel="no opener"
      >
        <i className="fab fa-github"></i>
      </a>
    </nav>
  </div>

);

};

export default Nav;