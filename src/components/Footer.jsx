import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="devkit-footer top-animation">
      <div className="container">
        <div className="row align-items-start">

          {/* Logo & Description */}
          <div className="col-12 col-md-5 col-lg-3 mb-4 mb-lg-0">
  <div className="footer-brand">

    <div className="d-flex align-items-center gap-2 mb-3 left-animation">
      <img
        src="/hero-1 (1).png"
        alt="DevKit Logo"
        className="img-fluid footer-logo"
      />
    </div>

    <p className="footer-description mb-0 top-animation">
      Dev-Kit Website Developer ,
      <br />
       <span className="fw-semibold bottom-animation" style={{color: "#60a5fa"}}>Vamsi Naidana.</span>
    </p>

  </div>
</div>

          {/* Resources */}
          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-lg-0 left-animation">
            <h6 className="footer-title">Resources</h6>

            <ul className="footer-links list-unstyled mb-0">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#resources">Resources</a>
              </li>

              <li>
                <a href="#roadmaps">Roadmaps</a>
              </li>

              <li>
                <a href="#cheetsheets">Cheatsheets</a>
              </li>

              <li>
                <a href="#toolkit-dev">Tools</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-6 col-md-4 col-lg-3 mb-4 mb-lg-0 right-animation">
            <h6 className="footer-title">Connect</h6>

            <ul className="footer-links list-unstyled mb-0">

              <li>
                <a
                  href="https://github.com/vamsinaidana"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@admin_vamsi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                  <span>YouTube</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/vamsinaidana/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>

            </ul>
          </div>

          {/* Copyright + Back To Top */}
          <div className="col-12 col-lg-4 left-animation">
            <div className="footer-right">

              <p className="footer-copy mb-0">
                © 2026 DevKit. All rights reserved. 
              </p>

              <button
                className="back-to-top"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                aria-label="Back to top"
              >
                <i className="fa-solid fa-arrow-up"></i>
              </button>

            </div>
          </div>

        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer
