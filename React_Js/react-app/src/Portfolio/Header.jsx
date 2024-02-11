import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <header className="container header active" id="home">
        <div classNameName="header-content">
          <div classNameName="left-header">
            <div classNameName="h-shape"></div>
            <div classNameName="image">
              <img src="img/hero.png" alt="" />
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I'm <span>Solano Milan Diaz.</span>A Web Developer.
            </h1>
            <p>
              I'm a Web Developer, I love to create beautiful and functional
              websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia, libero? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque blanditiis sed aut!
            </p>
            <div className="btn-con">
              <a href="" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}