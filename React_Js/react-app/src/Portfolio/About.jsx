import React from 'react'

export default function About() {
  return (
    <React.Fragment>
    <section className="container about" id="about">
            <div className="main-title">
              <h2>
                About <span>me</span>
                <span className="bg-text">my stats</span>
              </h2>
            </div>
            <div className="about-container">
              <div className="left-about">
                <h4>Information About me</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet labore nihil obcaecati consequatur. Debitis error
                  doloremque, vero eos vel nemo eius voluptatem dicta tenetur
                  modi. <br /> <br /> La musica delectus dolore fugiat
                  exercitationem a, ipsum quidem quo enim natus accusamus labore
                  dolores nam. Unde. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Harum non necessitatibus deleniti eum
                  soluta.
                </p>
                <div className="btn-con">
                  <a href="#" className="main-btn">
                    <span className="btn-text">Download CV</span>
                    <span className="btn-icon">
                      <i className="fas fa-download"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="right-about">
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">650+</p>
                    <p className="small-text">
                      Projects <br /> Completed
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">10+</p>
                    <p className="small-text">
                      Years of <br /> experience
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">300+</p>
                    <p className="small-text">
                      Happy <br /> Clients
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">400+</p>
                    <p className="small-text">
                      Customer <br /> reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <h4 className="stat-title">My Skills</h4>
              <div className="progress-bars">
                <div className="progress-bar">
                  <p className="prog-title">html5</p>
                  <div className="progress-con">
                    <p className="prog-text">80%</p>
                    <div className="progress">
                      <span className="html"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">css3</p>
                  <div className="progress-con">
                    <p className="prog-text">95%</p>
                    <div className="progress">
                      <span className="css"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">javascript</p>
                  <div className="progress-con">
                    <p className="prog-text">75%</p>
                    <div className="progress">
                      <span className="js"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">ReactJS</p>
                  <div className="progress-con">
                    <p className="prog-text">75%</p>
                    <div className="progress">
                      <span className="react"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">NodeJS</p>
                  <div className="progress-con">
                    <p className="prog-text">87%</p>
                    <div className="progress">
                      <span className="node"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">Python</p>
                  <div className="progress-con">
                    <p className="prog-text">70%</p>
                    <div className="progress">
                      <span className="python"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2010 - present</p>
                <h5>
                  Web Developer<span> - Vircrosoft</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2008 - 2011</p>
                <h5>
                  Software Engineer<span> - Boogle, Inc.</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2016 - 2017</p>
                <h5>
                  C++ Programmer<span> - Slime Tech</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2009 - 2013</p>
                <h5>
                  Business Degree<span> - Sussex University</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2013 - 2016</p>
                <h5>
                  Computer Science Degree<span> - Brookes University</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="tl-duration">2017 - present</p>
                <h5>
                  3d Animation<span> - Brighton University</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
            </div>
          </section>
    </React.Fragment>
  )
}
