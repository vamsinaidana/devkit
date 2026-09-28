import React, { useState, useEffect } from "react";
 

const Navbar = ({ mode, setMode }) => {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

   const [search, setSearch] = useState("");
   const handleLogin = (e) => {
  e.preventDefault();

  setShowLogin(!showLogin);
  setShowWelcome(!showWelcome);
};

  useEffect(() => {
    const timer = setTimeout(() => {
    alert(
  "🚀 Ready to explore DevKit?\n\nLogin to continue and unlock the full experience."
);
      setShowLogin(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

   const items = [
     "react-docs",
     "vuejs-docs",
     "angular-docs",
      
     "javascript-docs",
     "bootstrap-docs",
     "tailwind-docs",
     "nodejs-docs",
     "expressjs-docs",
     "mongodb-docs",
     "mysql-docs",
     "python-docs",
     "django-docs",
     "java-docs",
     "typescript-docs",
     "html-docs",
     "css-docs",
     "springboot-docs",
     "postgresql-docs",
     "github-docs",
      "git-docs",
      "docker-docs",
    
     "nextjs-docs",
     "git-commands",
     "vs-code-installation-cmds-git-fontawsome-react-tailwind-bootstrap-nodejs-expressjs-mongodb-mysql-python-django-java-springboot-github-git-angular",
     "netlify-deploy",
     "vercel-deploy",
     "github-pages-deploy",
     "render-deploy",
     "railway-deploy",
     "cloudflare-deploy",
     "tools",
     "database-supabase-mongodb-fairebase",
      
     "api-testing-postman-insomnia",
     "packages-npm-yarn",
     "design-figma-canva",
     "ai-coding-chatgpt-lovableai-claude-githubcopilot",
     "authentication-clerk-auth0-supabase-auth",
     "analytics-google-analytics-vercel-analytics",
     "cloud-aws-azure-google-cloud",
     "devops-docker-github-actions",
     "cheetsheets-html-css-js-bootstrap-tailwind-mern-mean-django-python-java-springboot-sql-ts",
     "roadmaps-frontend-backend-fullstack-mern-stack-mean-stack-python-developer-java-developer-devops-engineer",
     "learning-html-css-js-bootstrap-tailwind-mern-mean-django-python-java-springboot-sql-php-docker-github-ts",
     "project-ideas"
     
  ];

 const filteredItems = items.filter((item) =>
  item.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div>

      {/* ================= NAVBAR ================= */}

     <nav className="navbar navbar-expand-lg shadow-sm fixed-top" id="home">

  <div className="container">

    {/* Logo */}
    <a
      className="navbar-brand d-flex align-items-center gap-2 fw-bold"
      href="#home"
      onClick={() => setNavbarOpen(false)}
    >
      <img
        className="img-fluid navbar-logo"
        src="/logo (2).png"
        alt="DevKit"
      />
    </a>

    {/* Mobile Toggle */}
    <button
      className="navbar-toggler border-0 shadow-none"
      type="button"
      onClick={() => setNavbarOpen(!navbarOpen)}
      aria-controls="devkitNavbar"
      aria-expanded={navbarOpen}
      aria-label="Toggle navigation"
    >
      <i className="fa-solid fa-bars fs-4"></i>
    </button>

    {/* Navbar Content */}
    <div
      className={`collapse navbar-collapse ${
        navbarOpen ? "show" : ""
      }`}
      id="devkitNavbar"
    >

      {/* Links */}
      <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-2">

        <li className="nav-item">
          <a
            className="nav-link fw-semibold px-3"
            href="#home"
            onClick={() => setNavbarOpen(false)}
          >
            Home
          </a>
        </li>

        <li className="nav-item position-relative blck">
          <a
            className="nav-link fw-semibold px-3"
            href="#projects"
             
          >
            Dev-Kit  <span >▼</span>
          </a>

          <div className="rec-list position-absolute">
            <ul className="list-unstyled">
              <li><a className="nav-link" href="#resources"  onClick={() => setNavbarOpen(false)}>Resources</a></li>
               <li><a  className="nav-link" href="#roadmaps"  onClick={() => setNavbarOpen(false)}>Roadmaps</a></li>
               <li><a  className="nav-link" href="#learning"  onClick={() => setNavbarOpen(false)}>Learning</a></li>
               <li><a  className="nav-link" href="#project-ideas"  onClick={() => setNavbarOpen(false)}>Projects</a></li>
                              <li><a  className="nav-link" href="#toolkit-dev"  onClick={() => setNavbarOpen(false)}>Tools</a></li>

            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link fw-semibold px-3"
            href="#cammands"
            onClick={() => setNavbarOpen(false)}
          >
            Commands
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link fw-semibold px-3"
            href="#cheetsheets"
            onClick={() => setNavbarOpen(false)}
          >
            Cheatsheets
          </a>
        </li>

        {/* <li className="nav-item">
          <a
            className="nav-link fw-semibold px-3"
            href="#tools"
            onClick={() => setNavbarOpen(false)}
          >
            Tools
          </a>
        </li> */}

      </ul>

      {/* Search */}
      <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0 me-3 nav-search nav-searceh">

        <div className="input-group">
           <input
            id="searchInput"
            type="search"
            className="form-control"
            placeholder=" 🔎︎ Search React, Git, Tailwind..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search !== "" && filteredItems.length > 0 && (
            <div
              id="suggestions"
              className="position-absolute bg-white shadow rounded-3 w-100 mt-2"
            >
              {filteredItems.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  className="search-item"
                  onClick={() => {
                    const id = item
                      .toLowerCase()
                      .replace(/\s+/g, "-");

                    const element = document.getElementById(id);

                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });

                      setSearch("");
                      setNavbarOpen(false);
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">

        {/* Account */}
        <div className="d-flex align-items-center gap-2">

          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              background: "rgba(22, 135, 248, 0.1)",
              color: "#1687F8",
            }}
          >
            <i className="fa-solid fa-user"></i>
          </div>

          <span  className="fw-semibold acc-name">
            {showRegister ? showRegister : "Guest"}
          </span>

        </div>

        {/* Login */}
        <button
          type="button"
          className="btn btn-primary px-4 rounded-pill fw-semibold"
          onClick={() => {
            window.location.reload();
          }}
        >
          

          {showRegister ? "Logout" : "Login"}
        </button>

        {/* Dark Mode */}
        <button
        
          onClick={() => {
  setMode(!mode);
  setNavbarOpen(false);
}}
          className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "40px",
            height: "40px",
          }}
          title={mode ? "Light Mode" : "Dark Mode"}
          type="button"
        >
          {mode ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
 
      </div>

    </div>

  </div>

</nav>


      {/* ================= LOGIN MODAL ================= */}

      {showLogin && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            zIndex: 99999,
            overflowY: "auto",
            padding: "20px"
          }}
        >

          <div
            className="bg-white rounded-4 shadow-lg w-100"
            style={{
              maxWidth: "450px"
            }}
          >

            {/* Modal Header */}
            <div className="d-flex align-items-center justify-content-between p-4 border-bottom">

              {/* <h4 className="mb-0 fw-bold">
                Login to DevKit
              </h4> */}
          <img
  src="/logo (2).png"
  alt="DevKit"
  className="img-fluid"
  style={{
    width: "150px",
    height: "50px",
    objectFit: "contain",
    
  }}
/>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowLogin(!showLogin)}
              ></button>

            </div>

<form onSubmit={handleLogin}> 
            {/* Modal Body */}
            <div className="p-4">
             <div className="mb-3">
                <label className="form-label fw-semibold">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your name" onChange={(e)=>setShowRegister(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>


              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  required
                />
              </div>


              <button   
                type="submit"
                className="btn btn-primary btn-lg w-100 rounded-pill" 
              >
                Login
              </button>

            </div></form>

          </div>

        </div>
      )}
{showWelcome && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
    style={{
      background: "rgba(0, 0, 0, 0.6)",
      zIndex: 99999
    }}
  >
    <div
      className="bg-white rounded-4 shadow-lg text-center p-5"
      style={{ width: "400px", maxWidth: "90%" }}
    >
      <div className="mb-3">
        <i
          className="fa-solid fa-circle-check text-success"
          style={{ fontSize: "60px" }}
        ></i>
      </div>

      <h3 className="fw-bold mb-2">
        Welcome to DevKit 🎉
      </h3>

      <p className="text-secondary mb-4">
       <span style={{color:"red",fontSize:"20px",fontWeight:"bold"}}>{showRegister}</span> <br></br>You're successfully logged in.
      </p>

      <button
        type="button"
        className="btn btn-primary px-4 rounded-pill"
        onClick={() => setShowWelcome(false)}
      >
        Continue
      </button>
    </div>
  </div>
)}





      {/* ================= HERO ================= */}
         <section
      className="hero hero-light  position-relative overflow-hidden"
      id="hero"
    >

      {/* Background Effects */}
      <div className="hero-glow hero-glow-one position-absolute"></div>
      <div className="hero-glow hero-glow-two position-absolute"></div>

      <div className="container position-relative">

        <div className="row align-items-center min-vh-100 py-5">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
          {/* search */}

  {/* Search */}
      <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0 me-3 nav-search mobile-searchv">

        <div className="input-group">
 
          <input
            id="searchInput"
            type="search"
            className="form-control"
            placeholder=" 🔎︎ Search React, Git, Tailwind..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search !== "" && filteredItems.length > 0 && (
            <div
              id="suggestions"
              className="position-absolute bg-white shadow rounded-3 w-100 mt-2"
            >
              {filteredItems.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  className="search-item"
                  onClick={() => {
                    const id = item
                      .toLowerCase()
                      .replace(/\s+/g, "-");

                    const element = document.getElementById(id);

                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });

                      setSearch("");
                      setNavbarOpen(false);
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

        </div>

      </div>

          {/* search end */}

            {/* Badge */}

            <div className="hero-badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-4 rounded-pill">
              <span className="badge-dot"></span>

              <span className="hero-badge-text">Built for Modern Developers</span>

              <i className="bi bi-arrow-up-right"></i>
            </div>


            {/* Heading */}
            <h1 className="hero-title fw-bold mb-4">

              Your Complete{" "}

              <span className="gradient-text d-block">
                Developer Toolkit
              </span>

            </h1>


            {/* Description */}
            <p className="hero-description mb-4">

              Everything developers need to learn, build and grow.
              Explore roadmaps, cheatsheets, resources, tools and
              real-world projects — all in one place.

            </p>
            


            {/* Buttons */}
            <div className="hero-buttons d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mb-4">

              <a
                href="#roadmaps"
                className="hero-primary-btn btn d-inline-flex align-items-center justify-content-center text-white"
              >
                <i className="bi bi-map me-2 "></i>

                Explore Roadmaps

                <i className="bi bi-arrow-right ms-2"></i>
              </a>


              <a
                href="#resources"
                className="hero-secondary-btn btn d-inline-flex align-items-center justify-content-center"
              >
                <i className="bi bi-grid-3x3-gap me-2"></i>

                Explore Resources
              </a>

            </div>


            {/* =========================
                STATS
            ========================== */}
           <div className="hero-stats d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">

  {/* Roadmaps */}
  <div className="hero-stat d-flex align-items-center gap-3">

    <div className="hero-stat-icon roadmap-icon">
      <i className="fa-solid fa-route"></i>
    </div>

    <div className="d-flex flex-column">
      <strong>Roadmaps</strong>
      <span>Plan Your Journey</span>
    </div>

  </div>


  <div className="stat-divider"></div>


  {/* Cheat Sheets */}
  <div className="hero-stat d-flex align-items-center gap-3">

    <div className="hero-stat-icon cheatsheet-icon">
      <i className="fa-solid fa-file-code"></i>
    </div>

    <div className="d-flex flex-column">
      <strong>Cheat Sheets</strong>
      <span>Quick Reference</span>
    </div>

  </div>


  <div className="stat-divider"></div>


  {/* Resources */}
  <div className="hero-stat d-flex align-items-center gap-3">

    <div className="hero-stat-icon resources-icon">
      <i className="fa-solid fa-book-open"></i>
    </div>

    <div className="d-flex flex-column">
      <strong>Resources</strong>
      <span>Guides & Docs</span>
    </div>

  </div>

</div>

          </div>


          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">

            <div className="hero-visual position-relative d-flex align-items-center justify-content-center">

              {/* =========================
                  CODE WINDOW
              ========================== */}
              <div className="code-window position-relative w-100">

                {/* Header */}
                <div className="code-window-header d-flex align-items-center justify-content-between px-3">

                  <div className="window-dots d-flex gap-2">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>


                  <div className="window-title">
                    developer.js
                  </div>


                  <i className="bi bi-three-dots"></i>

                </div>


                {/* Code */}
                <div className="code-content">

                  <div>
                    <span className="code-number">01</span>

                    <span className="purple">const</span>{" "}

                    <span className="blue">developer</span> = {"{"}
                  </div>


                  <div>
                    <span className="code-number">02</span>

                    &nbsp;&nbsp;

                    <span className="blue">name</span>:

                    <span className="green">
                      "Future Developer"
                    </span>,
                  </div>


                  <div>
                    <span className="code-number">03</span>

                    &nbsp;&nbsp;

                    <span className="blue">skills</span>: [
                  </div>


                  <div>
                    <span className="code-number">04</span>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <span className="green">
                      "React"
                    </span>,
                  </div>


                  <div>
                    <span className="code-number">05</span>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <span className="green">
                      "Node.js"
                    </span>,
                  </div>


                  <div>
                    <span className="code-number">06</span>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <span className="green">
                      "Python"
                    </span>
                  </div>


                  <div>
                    <span className="code-number">07</span>

                    &nbsp;&nbsp;],
                  </div>


                  <div>
                    <span className="code-number">08</span>

                    &nbsp;&nbsp;

                    <span className="blue">
                      learning
                    </span>:

                    <span className="orange">
                      true
                    </span>,
                  </div>


                  <div>
                    <span className="code-number">09</span>

                    &nbsp;&nbsp;

                    <span className="blue">
                      building
                    </span>:

                    <span className="orange">
                      true
                    </span>
                  </div>


                  <div>
                    <span className="code-number">10</span>

                    {"};"}
                  </div>


                  <div className="code-cursor"></div>

                </div>

              </div>


              {/* =========================
                  ROADMAP CARD
              ========================== */}
              <div className="floating-card roadmap-floating d-flex align-items-center gap-2">

                <div className="floating-icon roadmap-icon d-flex align-items-center justify-content-center flex-shrink-0">
                <i class="fa-solid fa-timeline"></i>
                </div>


                <div>
                  <strong className="d-block">
                    Developer Roadmaps
                  </strong>

                  <span className="d-block">
                    Frontend • Backend • DevOps
                  </span>
                </div>

              </div>


              {/* =========================
                  GIT CARD
              ========================== */}
              <div className="floating-card git-floating d-flex align-items-center gap-2">

                <div className="floating-icon git-icon d-flex align-items-center justify-content-center flex-shrink-0">
                 <i style={{color:"gray",fontSize:"20px"}} class="fa-brands fa-github"></i>
                </div>


                <div>
                  <strong className="d-block">
                    Git & GitHub
                  </strong>

                  <span className="d-block">
                    Quick Commands
                  </span>
                </div>

              </div>


              {/* =========================
                  SUCCESS CARD
              ========================== */}
              <div className="floating-card success-floating d-flex align-items-center gap-2">

                <i className="bi bi-check-circle-fill"></i>

                <div>
                  <strong className="d-block">
                    Keep Building!
                  </strong>

                  <span className="d-block">
                    1% better every day
                  </span>
                </div>

              </div>


              {/* Decorative Grid */}
              <div className="hero-grid position-absolute"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Navbar
