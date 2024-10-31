function App() {

  return (
    <>
    {/* Getting Started  */}
      {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Trisha Olorvida</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/trisha.jpg" alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                </ul>
            </div>
        </nav>
        {/* Page Content*/}
        <div className="container-fluid p-0">
            {/* About*/}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Trisha
                        <span className="text-primary">Olorvida</span>
                    </h1>
                    <div className="subheading mb-5">
                        NgKing Res., ADD St., Apalit, Pampanga · (63) 951 7896 920 ·
                        <a href="mailto:trisha.olorvida0207@gmail.com">trisha.olorvida0207@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Currently in 3rd year of BS Information Systems.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/trisha-olorvida-937913277/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/trishaolorvida"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/ventipyon"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Experience*/}
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">. . .</h3>
                            <div className="subheading mb-3">. . .</div>
                            <p>. . .</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">. . .</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">. . .</h3>
                            <div className="subheading mb-3">. . .</div>
                            <p>. . .</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">. . .</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">. . .</h3>
                            <div className="subheading mb-3">. . .</div>
                            <p>. . .</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">. . .</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">. . .</h3>
                            <div className="subheading mb-3">. . .</div>
                            <p>. . .</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">. . .</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Education*/}
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Ismael Mathay Sr. High School</h3>
                            <div className="subheading mb-3">Technical Vocational</div>
                            <div>Information and Communication Technology</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2020-2022</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">La Verdad Christian College</h3>
                            <div className="subheading mb-3">Bachelor of Science in Information Systems</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2022-current</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Skills*/}
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">---</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Javascript
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Python
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            HTML
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            CSS
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            {/* Interests*/}
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p>I have a lot of interests, I often jump from one to another but I'm trying to stick into one interest because some of my interests are expensive.</p>
                    <p className="mb-0">Hanging out with friends is one of my coping mechanisms, tho most of the time, I like to be by myself.</p>
                </div>
            </section>
            <hr className="m-0" />
            {/* Awards*/}
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Portfolio</h2>
                    <ul className="fa-ul mb-0">
                        <li><a className="wa2midtermproject" href="https://github.com/trishaolorvida/webapp2-midterm-project">WebApp2 Midterm Project</a></li>
                        <li><a className="wa2finalproject" href="https://github.com/trishaolorvida/webapp2-final-project">WebApp2 Final Project</a></li>
                        <li><a className="wa2lab" href="https://github.com/trishaolorvida/webapp2-laboratories">WebApp2 Laboratories</a></li>
                        <li><a className="ad1mtexam" href="https://github.com/trishaolorvida/appdev1-midterm-exam">AppDev1 Midterm Practical</a></li>
                    </ul>
                </div>
            </section>
        </div>
    </>
  )
}

export default App
