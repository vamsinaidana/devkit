import React from 'react'

const Developer = () => {
  return (
    <div>
        <section className="toolkit-dev py-5 bottom-animation" id="toolkit-dev">
      <div className="container">

        {/* Heading */}
          <div className="project-heading text-center mb-4 mb-md-5">

          <span className="project-badge right-animation">
            <i className="fa-solid fa-code"></i>
            Developer Kit
          </span>

          <h2>
            Developer Tools
          </h2>

          <p>
            Essential tools and platforms developers use to build,
            test, design and deploy modern applications.
          </p>

        </div>


        <div className="row g-4">

          {/* DATABASE */}
          <div className="col-12 col-md-6 col-lg-4 letter-animation">
            <div  className="toolkit-card h-100" id='database-supabase-mongodb-fairebase'>

              <div className="toolkit-card-title">
                <i  className="fa-solid fa-database"></i>
                <h4>Database</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-leaf tool-small-icon"></i>
                    <span>Supabase</span>
                  </div>

                  <a
                    href="https://supabase.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div   className="tool-item">
                  <div>
                    <i className="fa-solid fa-database tool-small-icon"></i>
                    <span>MongoDB Atlas</span>
                  </div>

                  <a
                    href="https://www.mongodb.com/atlas"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item" >
                  <div>
                    <i className="fa-solid fa-fire tool-small-icon"></i>
                    <span>Firebase</span>
                  </div>

                  <a
                    href="https://firebase.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* API TESTING */}
          <div className="col-12 col-md-6 col-lg-4 right-animation">
            <div  className="toolkit-card h-100" id="api-testing-postman-insomnia">

              <div className="toolkit-card-title">
                <i className="fa-solid fa-plug"></i>
                <h4>API Testing</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-paper-plane tool-small-icon"></i>
                    <span>Postman</span>
                  </div>

                  <a
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-bolt tool-small-icon"></i>
                    <span>Insomnia</span>
                  </div>

                  <a
                    href="https://insomnia.rest/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* PACKAGES */}
          <div className="col-12 col-md-6 col-lg-4 left-animation">
            <div  className="toolkit-card h-100" id="packages-npm-yarn">

              <div className="toolkit-card-title">
                <i className="fa-solid fa-box"></i>
                <h4>Packages</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-npm tool-small-icon"></i>
                    <span>npm</span>
                  </div>

                  <a
                    href="https://www.npmjs.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-box-open tool-small-icon"></i>
                    <span>Yarn</span>
                  </div>

                  <a
                    href="https://yarnpkg.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* DESIGN */}
          <div className="col-12 col-md-6 col-lg-4 right-animation">
            <div  className="toolkit-card h-100" id="design-figma-canva">

              <div className="toolkit-card-title">
                <i className="fa-solid fa-pen-ruler"></i>
                <h4>Design</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-figma tool-small-icon"></i>
                    <span>Figma</span>
                  </div>

                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-palette tool-small-icon"></i>
                    <span>Canva</span>
                  </div>

                  <a
                    href="https://www.canva.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* AI CODING */}
          <div className="col-12 col-md-6 col-lg-4 left-animation">
            <div  className="toolkit-card h-100" id="ai-coding-chatgpt-lovableai-claude-githubcopilot">

              <div className="toolkit-card-title">
                <i className="fa-solid fa-robot"></i>
                <h4>AI Coding</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-github tool-small-icon"></i>
                    <span>GitHub Copilot</span>
                  </div>

                  <a
                    href="https://github.com/features/copilot"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
                 <div className="tool-item">
                  <div>
                   <i className="fa-solid fa-heart tool-small-icon"></i>
                    <span>Lovable AI</span>
                  </div>

                  <a
                    href="https://lovable.dev/dashboard"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
                 <div className="tool-item">
                  <div>
                    <i  className="fa-solid fa-wand-magic-sparkles tool-small-icon "></i>
                    <span>Claude AI</span>
                  </div>

                  <a
                    href="https://claude.ai/login"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-comments tool-small-icon"></i>
                    <span>ChatGPT</span>
                  </div>

                  <a
                    href="https://chatgpt.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* AUTH */}
          <div className="col-12 col-md-6 col-lg-4 right-animation">
            <div  className="toolkit-card h-100" id="authentication-clerk-auth0-supabase-auth">

              <div className="toolkit-card-title">
                <i className="fa-solid fa-user-shield"></i>
                <h4>Authentication</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-user-lock tool-small-icon"></i>
                    <span>Clerk</span>
                  </div>

                  <a
                    href="https://clerk.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-shield-halved tool-small-icon"></i>
                    <span>Auth0</span>
                  </div>

                  <a
                    href="https://auth0.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-lock tool-small-icon"></i>
                    <span>Supabase Auth</span>
                  </div>

                  <a
                    href="https://supabase.com/auth"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* ANALYTICS */}
          <div className="col-12 col-md-6 col-lg-4 left-animation">
            <div  className="toolkit-card h-100" id="analytics-google-analytics-vercel-analytics">

              <div className="toolkit-card-title">
                <i className="fa-solid fa-chart-line"></i>
                <h4>Analytics</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-google tool-small-icon"></i>
                    <span>Google Analytics</span>
                  </div>

                  <a
                    href="https://analytics.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-chart-simple tool-small-icon"></i>
                    <span>Vercel Analytics</span>
                  </div>

                  <a
                    href="https://vercel.com/analytics"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* CLOUD */}
          <div className="col-12 col-md-6 col-lg-4 right-animation">
            <div  className="toolkit-card h-100" id="cloud-aws-azure-google-cloud">

              <div className="toolkit-card-title">
                <i className="fa-solid fa-cloud"></i>
                <h4>Cloud</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-aws tool-small-icon"></i>
                    <span>AWS</span>
                  </div>

                  <a
                    href="https://aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-microsoft tool-small-icon"></i>
                    <span>Azure</span>
                  </div>

                  <a
                    href="https://azure.microsoft.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-solid fa-cloud tool-small-icon"></i>
                    <span>Google Cloud</span>
                  </div>

                  <a
                    href="https://cloud.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>


          {/* DEVOPS */}
          <div className="col-12 col-md-6 col-lg-4 left-animation">
            <div  className="toolkit-card h-100" id="devops-docker-github-actions">

              <div className="toolkit-card-title">
                <i className="fa-brands fa-docker"></i>
                <h4>DevOps</h4>
              </div>

              <div className="tool-list">

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-docker tool-small-icon"></i>
                    <span>Docker</span>
                  </div>

                  <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

                <div className="tool-item">
                  <div>
                    <i className="fa-brands fa-github tool-small-icon"></i>
                    <span>GitHub Actions</span>
                  </div>

                  <a
                    href="https://github.com/features/actions"
                    target="_blank"
                    rel="noreferrer"
                    className="tool-visit-btn"
                  >
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Developer
