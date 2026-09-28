 

const Main = () => {
  return (
    <div >
       
       
   <section className="about-section mt-5 py-5" >

      <div className="container">

        <div className="row align-items-center g-5" >


          {/* ================= LEFT CONTENT ================= */}

          <div className="col-12 col-lg-6"   >

            <div className="about-content" >

              <span className="about-badge">
                <i className="fa-solid fa-code me-2"></i>
                About The Developer
              </span>


              <h2 className="about-title">
                Hi, I'm <span>Vamsi Naidana</span>
              </h2>


              <h4 className="about-role">
                Frontend Developer &amp; Software Developer
              </h4>


              <p className="about-description">
                I’m a passionate developer who loves creating modern,
                responsive and user-friendly web applications using
                modern web technologies.
              </p>


              <p className="about-description">
                I designed and developed <strong>DevKit</strong> to bring
                essential developer resources, roadmaps, cheatsheets,
                tools and learning materials together in one place.
              </p>


              <p className="about-description">
                My goal is to build useful digital experiences that
                make learning easier, development faster and help
                developers grow their technical skills.
              </p>


              {/* ================= SKILLS ================= */}

              <div className="about-skills">

                <span>
                  <i className="fa-brands fa-react"></i>
                  React
                </span>

                <span>
                  <i className="fa-brands fa-js"></i>
                  JavaScript
                </span>

                <span>
                  <i className="fa-brands fa-html5"></i>
                  HTML
                </span>

                <span>
                  <i className="fa-brands fa-css3-alt"></i>
                  CSS
                </span>

                <span>
                  <i className="fa-brands fa-bootstrap"></i>
                  Bootstrap
                </span>

                <span>
                  <i className="fa-brands fa-git-alt"></i>
                  Git
                </span>

              </div>


              {/* ================= BUTTONS ================= */}

              <div className="about-buttons">

                <a
                  href="#projects"
                  className="about-primary-btn"
                >
                  <i className="fa-solid fa-code me-2"></i>
                  View My Projects
                </a>


                <a
                  href="#contact"
                  className="about-secondary-btn"
                >
                  <i className="fa-solid fa-envelope me-2"></i>
                  Contact Me
                </a>

              </div>


              {/* ================= SOCIAL ICONS ================= */}

              <div className="about-social">

                <span className="social-label">
                  Connect with me
                </span>


                <div className="social-icons">

                  {/* GitHub */}

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>


                  {/* LinkedIn */}

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>


                  {/* Instagram */}

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>


                  {/* YouTube */}

                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>


                  {/* Email */}

                  <a
                    href="mailto:yourmail@gmail.com"
                    aria-label="Email"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>

                </div>

              </div>

            </div>

          </div>



          {/* ================= RIGHT IMAGE ================= */}

          <div className="col-12 col-lg-6">

            <div className="about-image-wrapper">

              <div className="about-image-glow"></div>


              <div className="about-image-card">

                <img
                  src="/hero-1 (1).png"
                  alt="Vamsi Naidana - DevKit Developer"
                  className="about-developer-image"
                />


                {/* Floating Badge 1 */}

                {/* <div className="about-floating-card about-floating-one">

                  <div className="floating-icon">
                    <i className="fa-solid fa-code"></i>
                  </div>

                  <div>
                    <strong>Developer</strong>
                    <small>Building Experiences</small>
                  </div>

                </div> */}


                {/* Floating Badge 2 */}

                {/* <div className="about-floating-card about-floating-two">

                  <div className="floating-icon success-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>

                  <div>
                    <strong>DevKit</strong>
                    <small>Built with React</small>
                  </div>

                </div> */}

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM STATS ================= */}

        <div className="row mt-5 g-3">

          <div className="col-6 col-md-3">

            <div className="about-stat">

              <i className="fa-solid fa-laptop-code"></i>

              <div>
                <h4>React</h4>
                <p>Development</p>
              </div>

            </div>

          </div>


          <div className="col-6 col-md-3">

            <div className="about-stat">

              <i className="fa-solid fa-layer-group"></i>

              <div>
                <h4>DevKit</h4>
                <p>Platform</p>
              </div>

            </div>

          </div>


          <div className="col-6 col-md-3">

            <div className="about-stat">

              <i className="fa-solid fa-mobile-screen"></i>

              <div>
                <h4>Responsive</h4>
                <p>Web Design</p>
              </div>

            </div>

          </div>


          <div className="col-6 col-md-3">

            <div className="about-stat">

              <i className="fa-solid fa-lightbulb"></i>

              <div>
                <h4>Creative</h4>
                <p>Solutions</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
        

        {/* Bottom CTA */}

        {/* <div className="devkit-feature-cta">

          <div>

            <span>
              <i className="fa-solid fa-code me-2"></i>
              Built for Developers
            </span>

            <h3>
              Everything you need.
              <strong> In one place.</strong>
            </h3>

            <p>
              Learn new technologies, build projects and keep
              growing with DevKit.
            </p>

          </div>


          <button>
            Explore DevKit
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>

        </div> */}

      
    </div>
  )
}

export default Main
