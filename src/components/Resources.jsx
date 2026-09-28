import React from 'react'
import { useState } from "react";

const Resources = () => {
  const [mode, setMode] = useState(false);
  return (
    <div>
       <section className="developer-resources py-5 top-animation" id="resources" >
      <div className="container">

        {/* Heading */}
       {/* Heading */}
          <div className="project-heading text-center mb-4 mb-md-5">

          <span className="project-badge right-animation">
            <i className="fa-solid fa-code"></i>
            Developer Resources
          </span>

          <h2>
            Resources
          </h2>

          <p>
            Explore official documentation and developer resources
          </p>

        </div>


        {/* Resource Cards */}
        <div className="row g-1 g-md-4">


          {/* ================= REACT ================= */}
          <div className="col-6 col-md-4 col-lg-3">

            <div id='react-docs' className="resource-card h-100 right-animation">

              <div className="resource-icon react-resource">
                <i className="fa-brands fa-react"></i>
              </div>

              <h5>React</h5>

              <p>
                Official documentation for building user interfaces
                with React.
              </p>

              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Official Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= JAVASCRIPT ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="javascript-docs">

              <div className="resource-icon javascript-resource">
                <i className="fa-brands fa-js"></i>
              </div>

              <h5>JavaScript</h5>

              <p>
                JavaScript language guide, reference and web
                development documentation.
              </p>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                MDN Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= PYTHON ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="python-docs">

              <div className="resource-icon python-resource">
                <i className="fa-brands fa-python"></i>
              </div>

              <h5>Python</h5>

              <p>
                Official Python documentation, tutorials,
                library reference and language guide.
              </p>

              <a
                href="https://docs.python.org/3/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Python Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= JAVA ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="java-docs">

              <div className="resource-icon java-resource">
                <i className="fa-brands fa-java"></i>
              </div>

              <h5>Java</h5>

              <p>
                Official Java documentation including Java SE,
                tutorials and API documentation.
              </p>

              <a
                href="https://docs.oracle.com/en/java/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Java Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= NODE JS ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="nodejs-docs">

              <div className="resource-icon node-resource">
                <i className="fa-brands fa-node-js"></i>
              </div>

              <h5>Node.js</h5>

              <p>
                Official Node.js API reference and runtime
                documentation.
              </p>

              <a
                href="https://nodejs.org/docs/latest/api/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Node Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= EXPRESS ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="expressjs-docs">

              <div className="resource-icon express-resource">
                <i className="fa-solid fa-server"></i>
              </div>

              <h5>Express.js</h5>

              <p>
                Fast, minimalist web framework documentation
                for Node.js applications.
              </p>

              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Express Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= ANGULAR ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="angular-docs">

              <div className="resource-icon angular-resource">
                <i className="fa-brands fa-angular"></i>
              </div>

              <h5>Angular</h5>

              <p>
                Official Angular framework documentation,
                guides and tutorials.
              </p>

              <a
                href="https://angular.dev/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Angular Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= TYPESCRIPT ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="typescript-docs">

              <div className="resource-icon typescript-resource">
                <i className="fa-solid fa-code"></i>
              </div>

              <h5>TypeScript</h5>

              <p>
                TypeScript handbook, reference documentation
                and language guides.
              </p>

              <a
                href="https://www.typescriptlang.org/docs/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                TypeScript Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= HTML ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="html-docs">

              <div className="resource-icon html-resource">
                <i className="fa-brands fa-html5"></i>
              </div>

              <h5>HTML</h5>

              <p>
                HTML elements, APIs and web platform documentation
                from MDN.
              </p>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                HTML Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= CSS ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="css-docs">

              <div className="resource-icon css-resource">
                <i className="fa-brands fa-css3-alt"></i>
              </div>

              <h5>CSS</h5>

              <p>
                CSS properties, selectors, layout and web styling
                documentation.
              </p>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                CSS Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= BOOTSTRAP ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="bootstrap-docs">

              <div className="resource-icon bootstrap-resource">
                <i className="fa-brands fa-bootstrap"></i>
              </div>

              <h5>Bootstrap</h5>

              <p>
                Official Bootstrap documentation, components,
                utilities and examples.
              </p>

              <a
                href="https://getbootstrap.com/docs/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Bootstrap Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= TAILWIND ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="tailwind-docs">

              <div className="resource-icon tailwind-resource">
                <i className="fa-solid fa-wind"></i>
              </div>

              <h5>Tailwind CSS</h5>

              <p>
                Utility-first CSS framework documentation and
                installation guides.
              </p>

              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Tailwind Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= DJANGO ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="django-docs">

              <div className="resource-icon django-resource">
                <i className="fa-solid fa-d"></i>
              </div>

              <h5>Django</h5>

              <p>
                Official Django documentation, tutorials and
                framework reference.
              </p>

              <a
                href="https://docs.djangoproject.com/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Django Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= SPRING BOOT ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="springboot-docs">

              <div className="resource-icon spring-resource">
                <i className="fa-solid fa-leaf"></i>
              </div>

              <h5>Spring Boot</h5>

              <p>
                Official Spring Boot reference documentation,
                guides and tutorials.
              </p>

              <a
                href="https://docs.spring.io/spring-boot/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Spring Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= MONGODB ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="mongodb-docs">

              <div className="resource-icon mongodb-resource">
                <i className="fa-solid fa-database"></i>
              </div>

              <h5>MongoDB</h5>

              <p>
                MongoDB manual, CRUD operations, queries,
                aggregation and database guides.
              </p>

              <a
                href="https://www.mongodb.com/docs/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                MongoDB Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= MYSQL ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="mysql-docs">

              <div className="resource-icon mysql-resource">
                <i className="fa-solid fa-database"></i>
              </div>

              <h5>MySQL</h5>

              <p>
                Official MySQL reference manual, SQL syntax
                and database documentation.
              </p>

              <a
                href="https://dev.mysql.com/doc/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                MySQL Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= POSTGRESQL ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="postgresql-docs">

              <div className="resource-icon postgres-resource">
                <i className="fa-solid fa-database"></i>
              </div>

              <h5>PostgreSQL</h5>

              <p>
                Official PostgreSQL manuals, SQL reference
                and database documentation.
              </p>

              <a
                href="https://www.postgresql.org/docs/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                PostgreSQL Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= GIT ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="git-docs">

              <div className="resource-icon git-resource">
                <i className="fa-brands fa-git-alt"></i>
              </div>

              <h5>Git</h5>

              <p>
                Official Git documentation, reference,
                tutorials and command guides.
              </p>

              <a
                href="https://git-scm.com/doc"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Git Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= GITHUB ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="github-docs">

              <div className="resource-icon github-resource">
                <i className="fa-brands fa-github"></i>
              </div>

              <h5>GitHub</h5>

              <p>
                Official GitHub documentation for repositories,
                Actions, security and collaboration.
              </p>

              <a
                href="https://docs.github.com/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                GitHub Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= DOCKER ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="docker-docs">

              <div className="resource-icon docker-resource">
                <i className="fa-brands fa-docker"></i>
              </div>

              <h5>Docker</h5>

              <p>
                Official Docker documentation, containers,
                images and deployment guides.
              </p>

              <a
                href="https://docs.docker.com/"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Docker Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= VUE ================= */}
          <div className="col-6 col-md-4 col-lg-3 right-animation">

            <div className="resource-card h-100" id="vuejs-docs">

              <div className="resource-icon vue-resource">
                <i className="fa-brands fa-vuejs"></i>
              </div>

              <h5>Vue.js</h5>

              <p>
                Official Vue documentation, tutorials and
                API reference for Vue applications.
              </p>

              <a
                href="https://vuejs.org/guide/introduction.html"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Vue Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>


          {/* ================= NEXT JS ================= */}
          <div className="col-6 col-md-4 col-lg-3 left-animation">

            <div className="resource-card h-100" id="nextjs-docs">

              <div className="resource-icon next-resource">
                <i className="fa-solid fa-n"></i>
              </div>

              <h5>Next.js</h5>

              <p>
                Official Next.js documentation for building
                full-stack React applications.
              </p>

              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Next.js Docs
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Resources
