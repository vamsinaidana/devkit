import React from 'react'
import { useState } from 'react'

const Roadmaps = () => {
  const [road, setRoad] = useState(false)
  return (
    <div>
      <section className="developer-roadmaps py-5" id='roadmaps-frontend-backend-fullstack-mern-stack-mean-stack-python-developer-java-developer-devops-engineer'>
      <div className="container" id='roadmaps'>

        {/* Heading */}
      {/* Heading */}
          <div className="project-heading text-center mb-4 mb-md-5">

          <span className="project-badge right-animation">
            <i className="fa-solid fa-code"></i>
            Developer Roadmaps
          </span>

          <h2>
            Raodmaps
          </h2>

          <p>
            Roadmaps for Frontend, Backend, Fullstack, MERN, MEAN, Python, Java, DevOps
          </p>

        </div>

        <div className="row g-4">

          {/* Frontend Developer */}
          <div className="col-12 col-lg-6" id='frontend-roadmap'   data-bs-toggle="modal"
  data-bs-target="#front">
            <div className="roadmap-card h-100 p-4" id='typescrip'>

              <div className="d-flex align-items-center gap-3 mb-4" >
                <div className="roadmap-img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcF3RIFeWcH-JP8gemYkWl7V9M7l_O6UhxuNmRm2ESA&s=10" alt="Frontend Developer" />
                </div>

                <div>
                  <h4 className="fw-bold mb-1">
                    Frontend Developer
                  </h4>
                  <p className="text-muted mb-0">
                    Build modern and responsive websites
                  </p>
                </div>
              </div>

              <div className="roadmap-flow">
                <span>HTML</span>
                <i className="bi bi-arrow-right"></i>

                <span>CSS</span>
                <i className="bi bi-arrow-right"></i>

                <span>JavaScript</span>
                <i className="bi bi-arrow-right"></i>

                <span>Git</span>
                <i className="bi bi-arrow-right"></i>

                <span>React</span>
                <i className="bi bi-arrow-right"></i>

                <span>Tailwind</span>
                <i className="bi bi-arrow-right"></i>

                <span>APIs</span>
                <i className="bi bi-arrow-right"></i>

                <span>Projects</span>
                <i className="bi bi-arrow-right"></i>

                <span>Deploy</span>
              </div>

            </div>
          </div>

          {/* model */}

<div
  className="modal fade"
  id="front"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl" style={{marginTop:"150px"}}>
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Frontend Developer Roadmap
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
      <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-solid fa-code"></i>
          </div>

          <div className="html-heading-title">
            <h1>Frontend Developer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to become a professional
              Frontend Developer.
            </p>
          </div>

        </div>

        {/* 1. Internet Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>1. Internet Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Internet
How Websites Work
Client & Server
HTTP / HTTPS
Domain & Hosting
DNS
Browser Basics`}</pre>
          </div>
        </div>

        {/* 2. HTML */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-html5"></i>
            <h2>2. HTML</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Basics
HTML Structure
Headings
Paragraphs
Links
Images
Lists
Tables
Forms
Input Types
Buttons
Semantic HTML
HTML5 Features
Accessibility`}</pre>
          </div>
        </div>

        {/* 3. CSS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-css3-alt"></i>
            <h2>3. CSS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CSS Syntax
Selectors
Colors
Fonts
Text Styling
Box Model
Margin
Padding
Border
Display
Position
Flexbox
Grid
Responsive Design
Media Queries
Transitions
Animations
Pseudo Classes
Pseudo Elements`}</pre>
          </div>
        </div>

        {/* 4. Responsive Design */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-mobile-screen"></i>
            <h2>4. Responsive Design</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Mobile First Design
Responsive Units
%
rem
em
vw
vh
Media Queries
Responsive Images
Responsive Navigation
Mobile Layouts
Tablet Layouts
Desktop Layouts`}</pre>
          </div>
        </div>

        {/* 5. Bootstrap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-bootstrap"></i>
            <h2>5. Bootstrap</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Bootstrap Installation
Containers
Rows & Columns
Grid System
Buttons
Cards
Navbar
Forms
Alerts
Modal
Carousel
Utilities
Spacing
Responsive Classes
Flex Utilities`}</pre>
          </div>
        </div>

        {/* 6. JavaScript Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-js"></i>
            <h2>6. JavaScript Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Variables
let
const
var
Data Types
Strings
Numbers
Boolean
Arrays
Objects
Operators
Conditions
if / else
switch
Loops
for
while
Functions
Arrow Functions`}</pre>
          </div>
        </div>

        {/* 7. JavaScript Advanced */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>7. Advanced JavaScript</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DOM Manipulation
Events
Event Listeners
Forms
Local Storage
Session Storage
JSON
Destructuring
Spread Operator
Rest Operator
Template Literals
Modules
Promises
Async / Await
Fetch API
Error Handling
Callbacks
Higher Order Functions
Array Methods`}</pre>
          </div>
        </div>

        {/* 8. Git */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-git-alt"></i>
            <h2>8. Git & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`git init
git status
git add .
git commit
git log
git branch
git checkout
git switch
git merge
git pull
git push
git clone
GitHub Repository
Pull Requests
Branches
README.md`}</pre>
          </div>
        </div>

        {/* 9. Package Managers */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>9. Package Managers</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm
npm init
npm install
npm uninstall
npm update
package.json
package-lock.json
Dependencies
Dev Dependencies
npm scripts
npx`}</pre>
          </div>
        </div>

        {/* 10. React */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-react"></i>
            <h2>10. React.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`React Basics
Components
JSX
Props
State
useState
useEffect
Events
Conditional Rendering
Lists
Keys
Forms
useRef
useContext
useMemo
useCallback
Custom Hooks
API Integration
React Router`}</pre>
          </div>
        </div>

        {/* 11. TypeScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>11. TypeScript</h2>
          </div>

          <div className="html-code-box">
            <pre>{`TypeScript Basics
Types
String
Number
Boolean
Array
Tuple
Object
Interface
Type Alias
Union Type
Generics
Enums
Type Assertions
Type Guards
Optional Properties
React Props with TypeScript
useState with TypeScript`}</pre>
          </div>
        </div>

        {/* 12. API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>12. API Integration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`What is API
REST API
HTTP Methods
GET
POST
PUT
PATCH
DELETE
Fetch API
Axios
Request
Response
JSON
Loading State
Error Handling
Authentication
API Integration with React`}</pre>
          </div>
        </div>

        {/* 13. State Management */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>13. State Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`React State
Props
Context API
useReducer
Global State
Redux
Redux Toolkit
Zustand
State Persistence
Local Storage`}</pre>
          </div>
        </div>

        {/* 14. Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>14. Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Testing Basics
Unit Testing
Integration Testing
Component Testing
Jest
Vitest
React Testing Library
Test Cases
Assertions
Mocking`}</pre>
          </div>
        </div>

        {/* 15. Performance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gauge-high"></i>
            <h2>15. Frontend Performance</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Code Splitting
Lazy Loading
Image Optimization
Minification
Compression
Caching
Browser Caching
Memoization
React.memo
useMemo
useCallback
Performance Monitoring
Core Web Vitals`}</pre>
          </div>
        </div>

        {/* 16. Security */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>16. Frontend Security</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTTPS
Authentication
Authorization
JWT
Cookies
Secure Storage
XSS
CSRF
CORS
Input Validation
Environment Variables
API Security`}</pre>
          </div>
        </div>

        {/* 17. Deployment */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rocket"></i>
            <h2>17. Deployment</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Build Project
npm run build
Production Build
Environment Variables
Hosting
Netlify
Vercel
GitHub Pages
Custom Domain
CI/CD Basics`}</pre>
          </div>
        </div>

        {/* 18. Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>18. Frontend Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Portfolio Website
Landing Page
Blog Website
Todo Application
Weather App
Movie App
Food Ordering App
E-Commerce Website
Dashboard
Chat Application
Social Media UI
Admin Panel
Developer Toolkit`}</pre>
          </div>
        </div>

        {/* 19. Portfolio */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user"></i>
            <h2>19. Portfolio & Resume</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Build Portfolio
GitHub Profile
LinkedIn Profile
Resume
Projects
Live Demo
GitHub Repository
Technical Skills
Achievements
Certificates
About Me
Contact Section`}</pre>
          </div>
        </div>

        {/* 20. Job Preparation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-briefcase"></i>
            <h2>20. Job Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Interview Questions
CSS Interview Questions
JavaScript Interview Questions
React Interview Questions
Coding Practice
Problem Solving
Frontend Projects
Git & GitHub
Resume Preparation
Mock Interviews
Technical Interview
HR Interview
Apply for Jobs`}</pre>
          </div>
        </div>

      </div>
    </section>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>
          {/* model */}


          {/* Backend Developer */}
          <div className="col-12 col-lg-6" data-bs-toggle="modal"
  data-bs-target="#back">
            <div className="roadmap-card h-100 p-4">

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="roadmap-img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QNNFUw3js-csWwUy_5M0zeuUoXQatCk5jpHIdbp1YA&s=10" alt="Backend Developer" />
                </div>

                <div>
                  <h4 className="fw-bold mb-1">
                    Backend Developer
                  </h4>
                  <p className="text-muted mb-0">
                    Build powerful server-side applications
                  </p>
                </div>
              </div>

              <div className="roadmap-flow">
                <span>Programming</span>
                <i className="bi bi-arrow-right"></i>

                <span>Git</span>
                <i className="bi bi-arrow-right"></i>

                <span>SQL</span>
                <i className="bi bi-arrow-right"></i>

                <span>APIs</span>
                <i className="bi bi-arrow-right"></i>

                <span>Authentication</span>
                <i className="bi bi-arrow-right"></i>

                <span>Backend</span>
                <i className="bi bi-arrow-right"></i>

                <span>Testing</span>
                <i className="bi bi-arrow-right"></i>

                <span>Deploy</span>
              </div>

            </div>
          </div>
 {/* model */}

<div
  className="modal fade"
  id="back"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl" style={{marginTop:"150px"}}>
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
        Backend  Developer Roadmap
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
    <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-solid fa-server"></i>
          </div>

          <div className="html-heading-title">
            <h1>Backend Developer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to become a professional
              Backend Developer.
            </p>
          </div>

        </div>

        {/* 1. Programming Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>1. Programming Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Programming Fundamentals
Variables
Data Types
Operators
Conditions
if / else
switch
Loops
for
while
Functions
Arrays
Objects
Error Handling
Problem Solving`}</pre>
          </div>
        </div>

        {/* 2. Choose Backend Language */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>2. Choose a Backend Language</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JavaScript / Node.js
Python
Java
C#
PHP
Go
Ruby

Choose one language
Learn syntax
Learn fundamentals
Practice coding
Build small programs`}</pre>
          </div>
        </div>

        {/* 3. Node.js */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-node-js"></i>
            <h2>3. Node.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Node.js Basics
npm
package.json
Modules
CommonJS
ES Modules
File System
Path
HTTP Module
Events
Streams
Environment Variables
Async Programming
Promises
Async / Await
Error Handling`}</pre>
          </div>
        </div>

        {/* 4. Express.js */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>4. Express.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Install Express
Create Server
Routes
GET
POST
PUT
PATCH
DELETE
Request
Response
Middleware
Router
Route Parameters
Query Parameters
Request Body
JSON Response
Error Handling
Static Files`}</pre>
          </div>
        </div>

        {/* 5. Python Django */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-python"></i>
            <h2>5. Python & Django</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Python Basics
Functions
OOP
Modules
Packages
Virtual Environment
pip
Django
Django Project
Django App
Views
URLs
Templates
Models
Migrations
Django ORM
Forms
Authentication
REST API`}</pre>
          </div>
        </div>

        {/* 6. Java Spring Boot */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-java"></i>
            <h2>6. Java & Spring Boot</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Java Basics
OOP
Collections
Exception Handling
Maven
Spring
Spring Boot
Controllers
Services
Repositories
Entities
Dependency Injection
REST API
Spring Data JPA
Database Connection
Authentication
Authorization`}</pre>
          </div>
        </div>

        {/* 7. Databases */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>7. Databases</h2>
          </div>

          <div className="html-code-box">
            <pre>{`What is Database
SQL
Tables
Rows
Columns
Primary Key
Foreign Key
Relationships
CRUD Operations
Queries
Joins
Indexes
Transactions
Normalization
Database Design`}</pre>
          </div>
        </div>

        {/* 8. SQL */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>8. SQL</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE DATABASE
CREATE TABLE
INSERT
SELECT
WHERE
UPDATE
DELETE
ORDER BY
GROUP BY
HAVING
JOIN
INNER JOIN
LEFT JOIN
RIGHT JOIN
UNION
Subqueries
Indexes
Views
Transactions`}</pre>
          </div>
        </div>

        {/* 9. MongoDB */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-leaf"></i>
            <h2>9. MongoDB</h2>
          </div>

          <div className="html-code-box">
            <pre>{`NoSQL Database
Collections
Documents
Insert
Find
Update
Delete
Query Operators
Arrays
Embedded Documents
Indexes
Aggregation
Lookup
Transactions
MongoDB Atlas
Mongoose
Schema
Model
CRUD Operations`}</pre>
          </div>
        </div>

        {/* 10. REST API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>10. REST API</h2>
          </div>

          <div className="html-code-box">
            <pre>{`What is API
REST
HTTP
GET
POST
PUT
PATCH
DELETE
Request
Response
Headers
Body
Status Codes
JSON
Query Parameters
Path Parameters
API Versioning`}</pre>
          </div>
        </div>

        {/* 11. Authentication */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-lock"></i>
            <h2>11. Authentication</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Authentication
Authorization
Login
Register
Password Hashing
bcrypt
Sessions
Cookies
JWT
Access Token
Refresh Token
Logout
Protected Routes
Role Based Access
OAuth Basics`}</pre>
          </div>
        </div>

        {/* 12. Security */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>12. Backend Security</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTTPS
Password Hashing
JWT Security
CORS
CSRF
XSS
SQL Injection
Input Validation
Data Sanitization
Rate Limiting
Helmet
Environment Variables
Secrets Management
Secure Cookies`}</pre>
          </div>
        </div>

        {/* 13. Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-check"></i>
            <h2>13. Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Input Validation
Required Fields
Email Validation
Password Validation
Number Validation
String Validation
Schema Validation
Joi
Zod
Express Validator
Django Forms
Database Validation`}</pre>
          </div>
        </div>

        {/* 14. Error Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>14. Error Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Try / Catch
Custom Errors
Error Middleware
HTTP Error Codes
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Server Error
Global Error Handler
Logging Errors
API Error Response`}</pre>
          </div>
        </div>

        {/* 15. Git */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-git-alt"></i>
            <h2>15. Git & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`git init
git status
git add .
git commit
git log
git branch
git checkout
git switch
git merge
git clone
git pull
git push
GitHub Repository
Pull Requests
Branches
README.md`}</pre>
          </div>
        </div>

        {/* 16. Package Managers */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>16. Package Managers</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm
npm init
npm install
npm uninstall
npm update
package.json
package-lock.json
Dependencies
Dev Dependencies
npm scripts
pip
requirements.txt
Maven
pom.xml`}</pre>
          </div>
        </div>

        {/* 17. Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>17. Backend Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Unit Testing
Integration Testing
API Testing
Jest
Vitest
PyTest
JUnit
Postman
Assertions
Mocking
Test Cases
Test Database`}</pre>
          </div>
        </div>

        {/* 18. API Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-flask"></i>
            <h2>18. API Testing Tools</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Postman
GET Request
POST Request
PUT Request
DELETE Request
Headers
Authorization
Bearer Token
Request Body
JSON
Collections
Environment Variables
API Documentation`}</pre>
          </div>
        </div>

        {/* 19. Caching */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>19. Caching</h2>
          </div>

          <div className="html-code-box">
            <pre>{`What is Caching
Browser Cache
Server Cache
Redis
Cache Keys
Cache Expiration
Session Storage
Database Caching
API Response Caching
Cache Invalidation`}</pre>
          </div>
        </div>

        {/* 20. Deployment */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rocket"></i>
            <h2>20. Deployment</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Production Environment
Environment Variables
Linux Basics
Server
Hosting
VPS
Docker
Cloud Deployment
AWS
Azure
Render
Railway
CI/CD
Domain
SSL / HTTPS`}</pre>
          </div>
        </div>

        {/* 21. Docker */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-docker"></i>
            <h2>21. Docker</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Docker Basics
Images
Containers
Dockerfile
docker build
docker run
docker stop
docker start
Docker Compose
Volumes
Networks
Environment Variables
Container Logs`}</pre>
          </div>
        </div>

        {/* 22. Cloud */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>22. Cloud Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Cloud Computing
AWS
EC2
S3
RDS
Lambda
IAM
VPC
Azure
Google Cloud
Cloud Database
Cloud Storage
Server Deployment`}</pre>
          </div>
        </div>

        {/* 23. Architecture */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>23. Backend Architecture</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Client
Server
Controller
Service
Repository
Database
Routes
Middleware
Models
DTO
Authentication
Business Logic
API Layer
Database Layer
MVC Architecture
Clean Architecture`}</pre>
          </div>
        </div>

        {/* 24. WebSockets */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plug"></i>
            <h2>24. Real-Time Applications</h2>
          </div>

          <div className="html-code-box">
            <pre>{`WebSockets
Socket.IO
Real-Time Communication
Chat Applications
Live Notifications
Online Users
Rooms
Events
Broadcasting
Server Events`}</pre>
          </div>
        </div>

        {/* 25. Logging */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>25. Logging & Monitoring</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Application Logs
Error Logs
Access Logs
Console Logs
Winston
Morgan
Monitoring
Server Health
CPU Usage
Memory Usage
Application Performance
Alerts`}</pre>
          </div>
        </div>

        {/* 26. Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>26. Backend Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`REST API
Authentication API
Blog API
E-Commerce API
Food Ordering API
Payment API
Chat Application
Social Media API
Task Management API
URL Shortener
File Upload API
Admin Dashboard API`}</pre>
          </div>
        </div>

        {/* 27. Documentation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-book"></i>
            <h2>27. API Documentation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`API Documentation
Swagger
OpenAPI
Endpoints
Request Parameters
Request Body
Response
Status Codes
Authentication
Examples
Postman Collections`}</pre>
          </div>
        </div>

        {/* 28. Job Preparation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-briefcase"></i>
            <h2>28. Job Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Programming Questions
OOP Questions
Database Questions
SQL Questions
API Questions
HTTP Questions
Authentication
System Design Basics
Git & GitHub
Backend Projects
Resume
GitHub Profile
Mock Interviews
Technical Interview
HR Interview`}</pre>
          </div>
        </div>

      </div>
    </section>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>
          {/* model */}


          {/* Python Developer */}
          <div className="col-12 col-lg-6" data-bs-toggle="modal"
  data-bs-target="#pythoon">
            <div className="roadmap-card h-100 p-4">

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="roadmap-img">
                  <img src="/python.jpg" alt="Python Developer" />
                </div>

                <div>
                  <h4 className="fw-bold mb-1">
                    Python Developer
                  </h4>
                  <p className="text-muted mb-0">
                    Learn Python and backend development
                  </p>
                </div>
              </div>

              <div className="roadmap-flow">
                <span>Python</span>
                <i className="bi bi-arrow-right"></i>

                <span>OOP</span>
                <i className="bi bi-arrow-right"></i>

                <span>Git</span>
                <i className="bi bi-arrow-right"></i>

                <span>SQL</span>
                <i className="bi bi-arrow-right"></i>

                <span>Django</span>
                <i className="bi bi-arrow-right"></i>

                <span>REST APIs</span>
                <i className="bi bi-arrow-right"></i>

                <span>Testing</span>
                <i className="bi bi-arrow-right"></i>

                <span>Deploy</span>
              </div>

            </div>
          </div>
 {/* model */}

<div
  className="modal fade"
  id="pythoon"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl" style={{marginTop:"150px"}}>
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         Python Developer Roadmap
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
       <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-brands fa-python"></i>
          </div>

          <div className="html-heading-title">
            <h1>Python Developer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to master Python programming.
            </p>
          </div>

        </div>

        {/* 1. Python Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-python"></i>
            <h2>1. Python Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Python Introduction
Python Installation
Python Syntax
Comments
Variables
Constants
Keywords
Indentation
Input
Output
print()
input()`}</pre>
          </div>
        </div>

        {/* 2. Data Types */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>2. Data Types</h2>
          </div>

          <div className="html-code-box">
            <pre>{`int
float
complex
str
bool
list
tuple
set
dict
None
type()
isinstance()`}</pre>
          </div>
        </div>

        {/* 3. Variables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>3. Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Variable Declaration
Variable Assignment
Multiple Assignment
Multiple Values
Global Variables
Local Variables
Variable Naming
Constants
Dynamic Typing`}</pre>
          </div>
        </div>

        {/* 4. Operators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>4. Operators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Arithmetic Operators
+
-
*
/
%
**
//

Comparison Operators
==
!=
>
<
>=
<=

Logical Operators
and
or
not

Assignment Operators
=
+=
-=
*=
/=

Membership
in
not in

Identity
is
is not`}</pre>
          </div>
        </div>

        {/* 5. Strings */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>5. Strings</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Creating Strings
Single Quotes
Double Quotes
Triple Quotes
String Indexing
String Slicing
String Concatenation
String Formatting
f-Strings
String Length
Escape Characters`}</pre>
          </div>
        </div>

        {/* 6. String Methods */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <h2>6. String Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>{`upper()
lower()
capitalize()
title()
strip()
replace()
split()
join()
find()
index()
startswith()
endswith()
count()
isalpha()
isdigit()
isalnum()`}</pre>
          </div>
        </div>

        {/* 7. Conditional Statements */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>7. Conditional Statements</h2>
          </div>

          <div className="html-code-box">
            <pre>{`if
if else
if elif else
Nested if
Multiple Conditions
and
or
not
Conditional Expression`}</pre>
          </div>
        </div>

        {/* 8. Loops */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>8. Loops</h2>
          </div>

          <div className="html-code-box">
            <pre>{`for Loop
while Loop
Nested Loops
range()
enumerate()
break
continue
pass
else with Loops`}</pre>
          </div>
        </div>

        {/* 9. Lists */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>9. Lists</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Creating Lists
Indexing
Slicing
Adding Elements
Removing Elements
Updating Elements
Nested Lists
List Length
List Iteration
List Comprehension`}</pre>
          </div>
        </div>

        {/* 10. List Methods */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list-check"></i>
            <h2>10. List Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>{`append()
insert()
extend()
remove()
pop()
clear()
index()
count()
sort()
reverse()
copy()`}</pre>
          </div>
        </div>

        {/* 11. Tuples */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>11. Tuples</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Creating Tuple
Tuple Indexing
Tuple Slicing
Tuple Packing
Tuple Unpacking
Nested Tuples
count()
index()
Immutable Data`}</pre>
          </div>
        </div>

        {/* 12. Sets */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-nodes"></i>
            <h2>12. Sets</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Creating Set
Adding Elements
Removing Elements
Set Union
Set Intersection
Set Difference
Symmetric Difference
Subset
Superset
Membership Testing`}</pre>
          </div>
        </div>

        {/* 13. Dictionaries */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-book"></i>
            <h2>13. Dictionaries</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Creating Dictionary
Keys
Values
Key Value Pairs
Access Values
Add Items
Update Items
Delete Items
Nested Dictionaries
Dictionary Comprehension`}</pre>
          </div>
        </div>

        {/* 14. Dictionary Methods */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>14. Dictionary Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>{`keys()
values()
items()
get()
update()
pop()
popitem()
clear()
copy()
setdefault()`}</pre>
          </div>
        </div>

        {/* 15. Functions */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-function"></i>
            <h2>15. Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`def
Function Definition
Function Calling
Parameters
Arguments
Return
Default Arguments
Keyword Arguments
Positional Arguments
Variable Arguments
*args
**kwargs`}</pre>
          </div>
        </div>

        {/* 16. Lambda */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>16. Lambda Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Lambda Function
Anonymous Function
Lambda Parameters
Lambda Expression
Lambda with map()
Lambda with filter()
Lambda with sorted()
Lambda with reduce()`}</pre>
          </div>
        </div>

        {/* 17. Map Filter Reduce */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>17. Map, Filter & Reduce</h2>
          </div>

          <div className="html-code-box">
            <pre>{`map()
filter()
reduce()
Functional Programming
Lambda with map
Lambda with filter
Lambda with reduce
Iterable Processing`}</pre>
          </div>
        </div>

        {/* 18. Modules */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h2>18. Modules</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Creating Modules
import
from import
import as
Built-in Modules
Custom Modules
Module Aliases
__name__
__main__`}</pre>
          </div>
        </div>

        {/* 19. Packages */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box-open"></i>
            <h2>19. Packages</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Python Packages
Package Structure
__init__.py
Import Packages
Nested Packages
Third Party Packages
Package Management`}</pre>
          </div>
        </div>

        {/* 20. Exception Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>20. Exception Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`try
except
else
finally
Multiple Exceptions
Exception as
raise
Custom Exceptions
Exception Types
Error Handling`}</pre>
          </div>
        </div>

        {/* 21. File Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file"></i>
            <h2>21. File Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`open()
read()
readline()
readlines()
write()
writelines()
append
close()
with open()
File Modes
r
w
a
x
b`}</pre>
          </div>
        </div>

        {/* 22. JSON */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>22. JSON</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JSON Data
json module
json.loads()
json.dumps()
json.load()
json.dump()
JSON to Python
Python to JSON
Reading JSON
Writing JSON`}</pre>
          </div>
        </div>

        {/* 23. OOP */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cubes"></i>
            <h2>23. Object Oriented Programming</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Classes
Objects
Attributes
Methods
__init__()
self
Instance Variables
Class Variables
Instance Methods
Class Methods
Static Methods`}</pre>
          </div>
        </div>

        {/* 24. Encapsulation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>24. Encapsulation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Public Members
Protected Members
Private Members
_
__
Name Mangling
Getters
Setters
@property`}</pre>
          </div>
        </div>

        {/* 25. Inheritance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>25. Inheritance</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Single Inheritance
Multiple Inheritance
Multilevel Inheritance
Hierarchical Inheritance
Hybrid Inheritance
super()
Method Overriding
Method Resolution Order`}</pre>
          </div>
        </div>

        {/* 26. Polymorphism */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shapes"></i>
            <h2>26. Polymorphism</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Method Overriding
Duck Typing
Operator Overloading
Magic Methods
__str__()
__len__()
__add__()
__eq__()`}</pre>
          </div>
        </div>

        {/* 27. Abstraction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye-slash"></i>
            <h2>27. Abstraction</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Abstraction
ABC
abstractmethod
Abstract Class
Abstract Method
Concrete Class
Interface Concept`}</pre>
          </div>
        </div>

        {/* 28. Iterators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>28. Iterators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Iterator
Iterable
iter()
next()
__iter__()
__next__()
StopIteration
Custom Iterator`}</pre>
          </div>
        </div>

        {/* 29. Generators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-spin"></i>
            <h2>29. Generators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Generator
yield
yield from
Generator Function
Generator Expression
Lazy Evaluation
Memory Efficient Iteration`}</pre>
          </div>
        </div>

        {/* 30. Decorators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>30. Decorators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Decorator
Function Decorator
@decorator
Nested Functions
Wrapper Function
Multiple Decorators
Class Decorators
functools.wraps`}</pre>
          </div>
        </div>

        {/* 31. Regular Expressions */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>31. Regular Expressions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`re module
re.search()
re.match()
re.findall()
re.finditer()
re.sub()
re.split()
Patterns
Character Classes
Quantifiers
Groups`}</pre>
          </div>
        </div>

        {/* 32. Date Time */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calendar"></i>
            <h2>32. Date & Time</h2>
          </div>

          <div className="html-code-box">
            <pre>{`datetime
date
time
timedelta
datetime.now()
date.today()
strftime()
strptime()
Date Formatting
Date Arithmetic`}</pre>
          </div>
        </div>

        {/* 33. Math */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-square-root-variable"></i>
            <h2>33. Math & Random</h2>
          </div>

          <div className="html-code-box">
            <pre>{`math module
sqrt()
pow()
ceil()
floor()
factorial()
pi
random module
random()
randint()
choice()
shuffle()
sample()`}</pre>
          </div>
        </div>

        {/* 34. Collections */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>34. Collections</h2>
          </div>

          <div className="html-code-box">
            <pre>{`collections module
Counter
defaultdict
deque
namedtuple
ChainMap
OrderedDict
Counter Methods
Deque Methods`}</pre>
          </div>
        </div>

        {/* 35. Itertools */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>35. Itertools</h2>
          </div>

          <div className="html-code-box">
            <pre>{`itertools
count()
cycle()
repeat()
chain()
product()
permutations()
combinations()
groupby()
islice()`}</pre>
          </div>
        </div>

        {/* 36. Functional Programming */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>36. Functional Programming</h2>
          </div>

          <div className="html-code-box">
            <pre>{`First Class Functions
Higher Order Functions
Lambda
map()
filter()
reduce()
sorted()
zip()
enumerate()
any()
all()`}</pre>
          </div>
        </div>

        {/* 37. Type Hints */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-tags"></i>
            <h2>37. Type Hints</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Type Hints
Variable Annotations
Function Annotations
List[str]
Dict[str, int]
Tuple
Optional
Union
Any
Callable
Type Alias`}</pre>
          </div>
        </div>

        {/* 38. Dataclasses */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>38. Dataclasses</h2>
          </div>

          <div className="html-code-box">
            <pre>{`dataclasses
@dataclass
Fields
Default Values
field()
Frozen Dataclass
Post Init
Data Validation
Automatic __init__()
Automatic __repr__()`}</pre>
          </div>
        </div>

        {/* 39. Virtual Environment */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box-open"></i>
            <h2>39. Virtual Environment</h2>
          </div>

          <div className="html-code-box">
            <pre>{`python -m venv venv
Activate Environment
Deactivate Environment
pip install
pip uninstall
pip freeze
requirements.txt
pip install -r requirements.txt`}</pre>
          </div>
        </div>

        {/* 40. PIP */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-download"></i>
            <h2>40. PIP</h2>
          </div>

          <div className="html-code-box">
            <pre>{`pip install package
pip uninstall package
pip list
pip show package
pip freeze
pip check
pip cache
pip upgrade
pip requirements`}</pre>
          </div>
        </div>

        {/* 41. Debugging */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bug"></i>
            <h2>41. Debugging</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Debugging Basics
print Debugging
pdb
breakpoint()
Traceback
Exception Messages
Stack Trace
Debugging Techniques
Code Inspection
Logging`}</pre>
          </div>
        </div>

        {/* 42. Logging */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>42. Logging</h2>
          </div>

          <div className="html-code-box">
            <pre>{`logging module
DEBUG
INFO
WARNING
ERROR
CRITICAL
basicConfig()
Logger
Handler
Formatter
Log File`}</pre>
          </div>
        </div>

        {/* 43. Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>43. Python Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Testing Basics
unittest
TestCase
setUp()
tearDown()
Assertions
pytest
Test Functions
Fixtures
Mocking
Test Coverage`}</pre>
          </div>
        </div>

        {/* 44. SQLite */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>44. SQLite with Python</h2>
          </div>

          <div className="html-code-box">
            <pre>{`sqlite3
Connect Database
Create Table
Cursor
execute()
INSERT
SELECT
UPDATE
DELETE
commit()
fetchone()
fetchall()
close()`}</pre>
          </div>
        </div>

        {/* 45. Multithreading */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>45. Multithreading</h2>
          </div>

          <div className="html-code-box">
            <pre>{`threading module
Thread
start()
join()
Multiple Threads
Thread Synchronization
Lock
Race Condition
Thread Safety`}</pre>
          </div>
        </div>

        {/* 46. Multiprocessing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-microchip"></i>
            <h2>46. Multiprocessing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`multiprocessing
Process
start()
join()
Pool
CPU Bound Tasks
Process Communication
Queue
Pipe
Process Synchronization`}</pre>
          </div>
        </div>

        {/* 47. Async Python */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>47. Async Python</h2>
          </div>

          <div className="html-code-box">
            <pre>{`async
await
asyncio
Coroutine
Event Loop
async def
asyncio.run()
asyncio.create_task()
Gather
Async Programming`}</pre>
          </div>
        </div>

        {/* 48. Memory Management */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-memory"></i>
            <h2>48. Memory Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Python Memory
References
Garbage Collection
Reference Counting
gc module
Mutable Objects
Immutable Objects
Memory Optimization
Generators`}</pre>
          </div>
        </div>

        {/* 49. Python Standard Library */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-book-open"></i>
            <h2>49. Python Standard Library</h2>
          </div>

          <div className="html-code-box">
            <pre>{`os
sys
math
random
datetime
json
re
collections
itertools
functools
pathlib
logging
sqlite3
statistics
string`}</pre>
          </div>
        </div>

        {/* 50. Python Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>50. Python Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Calculator
Number Guessing Game
Todo Application
Contact Book
Expense Tracker
Quiz Application
Password Generator
File Organizer
Web Scraper
CLI Application
Inventory System
Library Management System
Student Management System
Automation Scripts`}</pre>
          </div>
        </div>

      </div>
    </section>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>
          {/* model */}


          {/* Java Developer */}
          <div className="col-12 col-lg-6" data-bs-toggle="modal"
  data-bs-target="#jaava">
            <div className="roadmap-card h-100 p-4">

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="roadmap-img">
                  <img src="/java.png" alt="Java Developer" />
                </div>

                <div>
                  <h4 className="fw-bold mb-1">
                    Java Developer
                  </h4>
                  <p className="text-muted mb-0">
                    Build enterprise applications with Java
                  </p>
                </div>
              </div>

              <div className="roadmap-flow">
                <span>Java</span>
                <i className="bi bi-arrow-right"></i>

                <span>OOP</span>
                <i className="bi bi-arrow-right"></i>

                <span>Collections</span>
                <i className="bi bi-arrow-right"></i>

                <span>SQL</span>
                <i className="bi bi-arrow-right"></i>

                <span>Spring</span>
                <i className="bi bi-arrow-right"></i>

                <span>Spring Boot</span>
                <i className="bi bi-arrow-right"></i>

                <span>REST API</span>
                <i className="bi bi-arrow-right"></i>

                <span>Deploy</span>
              </div>

            </div>
          </div>

 {/* model */}

<div
  className="modal fade"
  id="jaava"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl" style={{marginTop:"150px"}}>
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         Java Developer Roadmap
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
          <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-brands fa-java"></i>
          </div>

          <div className="html-heading-title">
            <h1>Java Developer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to become a professional
              Java Developer.
            </p>
          </div>

        </div>

        {/* 1. Java Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-java"></i>
            <h2>1. Java Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Java Introduction
JDK
JRE
JVM
Java Installation
Java Program Structure
main() Method
Comments
Keywords
Identifiers
Variables
Constants
Naming Conventions`}</pre>
          </div>
        </div>

        {/* 2. Data Types */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>2. Data Types</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Primitive Data Types
byte
short
int
long
float
double
char
boolean

Non-Primitive Types
String
Arrays
Classes
Objects
Wrapper Classes`}</pre>
          </div>
        </div>

        {/* 3. Operators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>3. Operators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Arithmetic Operators
+
-
*
/
%

Relational Operators
==
!=
>
<
>=
<=

Logical Operators
&&
||
!

Assignment Operators
=
+=
-=
*=
/=

Increment / Decrement
++
--`}</pre>
          </div>
        </div>

        {/* 4. Conditional Statements */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>4. Conditional Statements</h2>
          </div>

          <div className="html-code-box">
            <pre>{`if
if else
if else if
Nested if
switch
case
default
Ternary Operator
Nested Conditions`}</pre>
          </div>
        </div>

        {/* 5. Loops */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>5. Loops</h2>
          </div>

          <div className="html-code-box">
            <pre>{`for Loop
while Loop
do while Loop
Nested Loops
Enhanced for Loop
break
continue
Infinite Loop`}</pre>
          </div>
        </div>

        {/* 6. Methods */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>6. Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Method Declaration
Method Calling
Parameters
Arguments
Return Type
void
Method Overloading
Static Methods
Instance Methods
Recursive Methods
Varargs`}</pre>
          </div>
        </div>

        {/* 7. Arrays */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table-cells"></i>
            <h2>7. Arrays</h2>
          </div>

          <div className="html-code-box">
            <pre>{`One Dimensional Array
Two Dimensional Array
Array Declaration
Array Initialization
Array Indexing
Array Traversal
Array Length
Enhanced for Loop
Arrays Class
Arrays.sort()
Arrays.copyOf()`}</pre>
          </div>
        </div>

        {/* 8. Strings */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>8. Strings</h2>
          </div>

          <div className="html-code-box">
            <pre>{`String
String Creation
String Pool
String Immutability
length()
charAt()
substring()
equals()
equalsIgnoreCase()
contains()
startsWith()
endsWith()
replace()
split()
trim()
toUpperCase()
toLowerCase()`}</pre>
          </div>
        </div>

        {/* 9. StringBuilder */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen-to-square"></i>
            <h2>9. StringBuilder & StringBuffer</h2>
          </div>

          <div className="html-code-box">
            <pre>{`StringBuilder
StringBuffer
append()
insert()
delete()
reverse()
replace()
capacity()
toString()
Mutable Strings
Performance`}</pre>
          </div>
        </div>

        {/* 10. OOP */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cubes"></i>
            <h2>10. Object Oriented Programming</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Class
Object
Encapsulation
Inheritance
Polymorphism
Abstraction
Association
Aggregation
Composition
Methods
Fields`}</pre>
          </div>
        </div>

        {/* 11. Classes & Objects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>11. Classes & Objects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Class Declaration
Object Creation
new Keyword
Instance Variables
Instance Methods
Static Variables
Static Methods
this Keyword
Object References
Object Initialization`}</pre>
          </div>
        </div>

        {/* 12. Constructors */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-hammer"></i>
            <h2>12. Constructors</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Default Constructor
Parameterized Constructor
Constructor Overloading
this()
super()
Constructor Chaining
Private Constructor
Copy Constructor Concept`}</pre>
          </div>
        </div>

        {/* 13. Encapsulation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>13. Encapsulation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Data Hiding
private
public
protected
Getters
Setters
JavaBeans
Immutable Classes
Access Control`}</pre>
          </div>
        </div>

        {/* 14. Inheritance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>14. Inheritance</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Single Inheritance
Multilevel Inheritance
Hierarchical Inheritance
Multiple Inheritance Concept
extends
super
Method Overriding
IS-A Relationship`}</pre>
          </div>
        </div>

        {/* 15. Polymorphism */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shapes"></i>
            <h2>15. Polymorphism</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Compile Time Polymorphism
Method Overloading
Runtime Polymorphism
Method Overriding
Dynamic Method Dispatch
Upcasting
Downcasting
@Overriding`}</pre>
          </div>
        </div>

        {/* 16. Abstraction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye-slash"></i>
            <h2>16. Abstraction</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Abstract Class
abstract Keyword
Abstract Method
Concrete Method
Interface
implements
Multiple Interfaces
Default Methods
Static Interface Methods`}</pre>
          </div>
        </div>

        {/* 17. Interfaces */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plug"></i>
            <h2>17. Interfaces</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Interface Declaration
implements
Multiple Interfaces
Default Methods
Static Methods
Functional Interface
@FunctionalInterface
Interface Inheritance
Marker Interface`}</pre>
          </div>
        </div>

        {/* 18. Access Modifiers */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>18. Access Modifiers</h2>
          </div>

          <div className="html-code-box">
            <pre>{`public
private
protected
default
Class Access
Method Access
Variable Access
Package Access`}</pre>
          </div>
        </div>


    {/* 19. Packages */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>19. Packages</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Package Declaration
package
import
Static Import
Built-in Packages
User Defined Packages
Package Naming
Sub Packages
Access Between Packages`}</pre>
          </div>
        </div>

        {/* 20. Exception Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>20. Exception Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Exception
Error
try
catch
finally
throw
throws
Multiple catch
Nested try
Custom Exception
Checked Exception
Unchecked Exception`}</pre>
          </div>
        </div>

        {/* 21. Collections Framework */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>21. Collections Framework</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Collection
List
Set
Queue
Map

ArrayList
LinkedList
HashSet
LinkedHashSet
TreeSet
PriorityQueue
HashMap
LinkedHashMap
TreeMap`}</pre>
          </div>
        </div>

        {/* 22. List */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>22. List</h2>
          </div>

          <div className="html-code-box">
            <pre>{`ArrayList
LinkedList

add()
addAll()
get()
set()
remove()
contains()
indexOf()
size()
isEmpty()
clear()
subList()`}</pre>
          </div>
        </div>

        {/* 23. Set */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-nodes"></i>
            <h2>23. Set</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HashSet
LinkedHashSet
TreeSet

add()
remove()
contains()
size()
isEmpty()
clear()
iterator()

Unique Elements
Sorted Set`}</pre>
          </div>
        </div>

        {/* 24. Map */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-map"></i>
            <h2>24. Map</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HashMap
LinkedHashMap
TreeMap

put()
get()
remove()
containsKey()
containsValue()
keySet()
values()
entrySet()
size()
clear()
getOrDefault()`}</pre>
          </div>
        </div>

        {/* 25. Queue */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <h2>25. Queue</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Queue
PriorityQueue
Deque
ArrayDeque

offer()
add()
peek()
element()
poll()
remove()
push()
pop()`}</pre>
          </div>
        </div>

        {/* 26. Generics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>26. Generics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Generic Class
Generic Method
Generic Interface
Type Parameters
<T>
<K,V>

Bounded Generics
extends
Wildcards
? extends
? super
Raw Types`}</pre>
          </div>
        </div>

        {/* 27. Wrapper Classes */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box-open"></i>
            <h2>27. Wrapper Classes</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Integer
Long
Double
Float
Short
Byte
Character
Boolean

Autoboxing
Unboxing
valueOf()
parseInt()
parseDouble()`}</pre>
          </div>
        </div>

        {/* 28. Enum */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list-check"></i>
            <h2>28. Enum</h2>
          </div>

          <div className="html-code-box">
            <pre>{`enum
Enum Constants
values()
valueOf()
ordinal()
Enum Constructor
Enum Methods
Enum with Fields
Enum with Interface`}</pre>
          </div>
        </div>

        {/* 29. Date and Time */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calendar-days"></i>
            <h2>29. Date & Time API</h2>
          </div>

          <div className="html-code-box">
            <pre>{`LocalDate
LocalTime
LocalDateTime
ZonedDateTime
Instant
Period
Duration

now()
of()
plusDays()
minusDays()
getYear()
getMonth()
getDayOfMonth()
format()`}</pre>
          </div>
        </div>

        {/* 30. Java 8 Features */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>30. Java 8+ Features</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Lambda Expressions
Functional Interfaces
Stream API
Method References
Default Methods
Optional
Date & Time API
forEach()
Predicate
Consumer
Supplier
Function`}</pre>
          </div>
        </div>

        {/* 31. Functional Interfaces */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-function"></i>
            <h2>31. Functional Interfaces</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@FunctionalInterface

Predicate<T>
Consumer<T>
Supplier<T>
Function<T,R>
BiFunction<T,U,R>
UnaryOperator<T>
BinaryOperator<T>

Custom Functional Interface`}</pre>
          </div>
        </div>

        {/* 32. Stream API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-stream"></i>
            <h2>32. Stream API</h2>
          </div>

          <div className="html-code-box">
            <pre>{`stream()
filter()
map()
flatMap()
sorted()
distinct()
limit()
skip()
forEach()
collect()
reduce()
count()
anyMatch()
allMatch()
noneMatch()
findFirst()
findAny()`}</pre>
          </div>
        </div>

        {/* 33. Optional */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>33. Optional</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Optional
Optional.of()
Optional.ofNullable()
Optional.empty()
isPresent()
isEmpty()
get()
orElse()
orElseGet()
orElseThrow()
ifPresent()
map()
filter()`}</pre>
          </div>
        </div>

        {/* 34. Multithreading */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-spin"></i>
            <h2>34. Multithreading</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Thread
Runnable
Callable
Thread Creation
start()
run()
sleep()
join()
interrupt()
isAlive()
Thread Priority
Daemon Thread
Synchronization`}</pre>
          </div>
        </div>

        {/* 35. Synchronization */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>35. Synchronization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`synchronized Method
synchronized Block
Lock
ReentrantLock
Race Condition
Deadlock
Thread Safety
wait()
notify()
notifyAll()`}</pre>
          </div>
        </div>

        {/* 36. Executor Framework */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>36. Executor Framework</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Executor
ExecutorService
Executors
FixedThreadPool
CachedThreadPool
ScheduledThreadPool
submit()
execute()
shutdown()
Future
Callable`}</pre>
          </div>
        </div>

        {/* 37. File Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file"></i>
            <h2>37. File Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`File
FileReader
FileWriter
BufferedReader
BufferedWriter
InputStream
OutputStream
FileInputStream
FileOutputStream
Files
Path
Paths`}</pre>
          </div>
        </div>

        {/* 38. Serialization */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box-archive"></i>
            <h2>38. Serialization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Serialization
Deserialization
Serializable
ObjectOutputStream
ObjectInputStream
serialVersionUID
transient Keyword`}</pre>
          </div>
        </div>

        {/* 39. JDBC */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>39. JDBC</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JDBC
JDBC Driver
Connection
DriverManager
Statement
PreparedStatement
CallableStatement
ResultSet

executeQuery()
executeUpdate()
execute()
close()`}</pre>
          </div>
        </div>

        {/* 40. SQL with Java */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>40. SQL with Java</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Connect Database
Create Table
Insert Data
Select Data
Update Data
Delete Data
Prepared Queries
Transactions
Commit
Rollback
Batch Processing`}</pre>
          </div>
        </div>

        {/* 41. Maven */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-boxes-stacked"></i>
            <h2>41. Maven</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Maven
pom.xml
Dependencies
Plugins
Repositories

mvn clean
mvn compile
mvn test
mvn package
mvn install
mvn clean install
mvn spring-boot:run`}</pre>
          </div>
        </div>

        {/* 42. Gradle */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>42. Gradle</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Gradle
build.gradle
Dependencies
Plugins

gradle build
gradle test
gradle clean
gradle bootRun

Gradle Wrapper
gradlew`}</pre>
          </div>
        </div>

        {/* 43. Unit Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>43. Unit Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JUnit
Test Class
@Test
@BeforeEach
@AfterEach
@BeforeAll
@AfterAll

Assertions
assertEquals()
assertTrue()
assertFalse()
assertThrows()`}</pre>
          </div>
        </div>

        {/* 44. Debugging */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bug"></i>
            <h2>44. Debugging</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Breakpoints
Debug Mode
Step Into
Step Over
Step Out
Watch Variables
Call Stack
Exception Debugging
IDE Debugger`}</pre>
          </div>
        </div>

        {/* 45. Design Patterns */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>45. Design Patterns</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Singleton
Factory
Abstract Factory
Builder
Prototype

Adapter
Decorator
Facade
Proxy

Observer
Strategy
Template Method
MVC`}</pre>
          </div>
        </div>

        {/* 46. SOLID Principles */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cubes-stacked"></i>
            <h2>46. SOLID Principles</h2>
          </div>

          <div className="html-code-box">
            <pre>{`S - Single Responsibility
O - Open / Closed
L - Liskov Substitution
I - Interface Segregation
D - Dependency Inversion

Clean Code
Loose Coupling
High Cohesion`}</pre>
          </div>
        </div>

        {/* 47. JVM Internals */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-microchip"></i>
            <h2>47. JVM Internals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JVM Architecture
Class Loader
Method Area
Heap
Stack
PC Register
Native Method Stack
Execution Engine
JIT Compiler
Garbage Collector`}</pre>
          </div>
        </div>

        {/* 48. Garbage Collection */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash-can"></i>
            <h2>48. Garbage Collection</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Garbage Collection
Heap Memory
Young Generation
Old Generation
Minor GC
Major GC
Full GC
Memory Leaks
GC Algorithms
JVM Memory Management`}</pre>
          </div>
        </div>

        {/* 49. Java Networking */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-network-wired"></i>
            <h2>49. Java Networking</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Networking Basics
URL
URI
Socket
ServerSocket
TCP
UDP
HttpClient
HttpRequest
HttpResponse
HTTP Methods
REST Communication`}</pre>
          </div>
        </div>

        {/* 50. Java Logging */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>50. Java Logging</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Logging
java.util.logging
Logger
Log Levels

SEVERE
WARNING
INFO
CONFIG
FINE
FINER
FINEST

Log Handlers
Log Formatter`}</pre>
          </div>
        </div>

        {/* 51. Java Security */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>51. Java Security</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Input Validation
Secure Coding
Password Hashing
Encryption
Decryption
Message Digest
Secure Random
HTTPS
SSL/TLS
Access Control
Sensitive Data Protection`}</pre>
          </div>
        </div>

        {/* 52. Java Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>52. Java Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Calculator
Student Management System
Library Management System
Bank Management System
Employee Management System
Inventory Management System
Hospital Management System
E-Commerce Application
Chat Application
REST API Project`}</pre>
          </div>
        </div>

        {/* 53. Git & GitHub */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-github"></i>
            <h2>53. Git & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`git init
git clone
git status
git add
git commit
git push
git pull
git fetch
git branch
git checkout
git merge
git rebase
git log
git stash
git reset
GitHub Repository
Pull Request`}</pre>
          </div>
        </div>

        {/* 54. Java Development Tools */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <h2>54. Java Development Tools</h2>
          </div>

          <div className="html-code-box">
            <pre>{`IntelliJ IDEA
Eclipse
VS Code
NetBeans

JDK
Maven
Gradle
Git
GitHub
Postman
MySQL
Docker`}</pre>
          </div>
        </div>

        {/* 55. Core Java Project Preparation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-briefcase"></i>
            <h2>55. Core Java Interview Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Java Basics
OOP Concepts
String
Arrays
Collections
Exception Handling
Multithreading
Java 8 Features
Streams
Lambda
Generics
JVM
Memory Management
Garbage Collection
Design Patterns
SOLID Principles
Coding Problems`}</pre>
          </div>
        </div>

        {/* 56. Advanced Java Direction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-up-right-dots"></i>
            <h2>56. Next Step for Java Developer</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Servlets
JSP
JDBC
JPA
Hibernate
Spring
Spring MVC
Spring Boot
Spring Data JPA
Spring Security
REST API
Microservices
Docker
Cloud
CI/CD`}</pre>
          </div>
        </div>

      </div>
    </section>




        {/* continu */}
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>
          {/* model */}

        




          {/*  */}

        </div>
      </div>



      {/*  */}


      {/* second row mern */}
{/* Show More */}
<div className="container mt-5">

  <div className=" text-center mb-4">
   <h5
  onClick={() => setRoad(!road)}
  style={{
    cursor: "pointer",
    color: "#1687F8",
  }}
>
  {road ? (
    <>
      Hide More <i className="fa-solid fa-chevron-up ms-2"></i>
    </>
  ) : (
    <>
      Show More <i className="fa-solid fa-chevron-down ms-2"></i>
    </>
  )}
</h5>
  </div>

  {road && (
    <div className="row g-4">

      {/* MERN Stack */}
      <div className="col-12 col-lg-6"  data-bs-toggle="modal"
  data-bs-target="#mernModal"
  style={{ cursor: "pointer" }}>
        <div className="roadmap-card h-100 p-4">

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="roadmap-img">
              <img src="/mern.jpg" alt="MERN Stack" />
            </div>

            <div>
              <h4 className="fw-bold mb-1">
                MERN Full Stack
              </h4>

              <p className="text-muted mb-0">
                Become a complete JavaScript developer
              </p>
            </div>
          </div>

          <div className="roadmap-flow">
            <span>HTML</span>
            <i className="bi bi-arrow-right"></i>

            <span>CSS</span>
            <i className="bi bi-arrow-right"></i>

            <span>JavaScript</span>
            <i className="bi bi-arrow-right"></i>

            <span>React</span>
            <i className="bi bi-arrow-right"></i>

            <span>Node.js</span>
            <i className="bi bi-arrow-right"></i>

            <span>Express</span>
            <i className="bi bi-arrow-right"></i>

            <span>MongoDB</span>
            <i className="bi bi-arrow-right"></i>

            <span>Deploy</span>
          </div>

        </div>
      </div>
      {/* model */}

<div
  className="modal fade"
  id="mernModal"
  tabIndex="-1"
  aria-labelledby="mernModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header">
        

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
       <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-brands fa-node-js"></i>
          </div>

          <div className="html-heading-title">
            <h1>MERN Full Stack Developer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to become a professional MERN
              Full Stack Developer.
            </p>
          </div>
        </div>

        {/* 1. Web Fundamentals */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>1. Web Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`How Websites Work
Client & Server
Frontend & Backend
HTTP
HTTPS
Request & Response
URL
Domain
Hosting
DNS
Browser
Web Server
API Basics`}</pre>
          </div>
        </div>

        {/* 2. HTML */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-html5"></i>
            <h2>2. HTML</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Structure
HTML Tags
Elements
Attributes
Headings
Paragraphs
Links
Images
Lists
Tables
Forms
Input Types
Buttons
Semantic HTML
Audio & Video
iframes
HTML5 Features`}</pre>
          </div>
        </div>

        {/* 3. CSS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-css3-alt"></i>
            <h2>3. CSS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CSS Syntax
Selectors
Colors
Backgrounds
Fonts
Text
Box Model
Margin
Padding
Border
Display
Position
Z-Index
Flexbox
Grid
Transitions
Transforms
Animations
Media Queries
Responsive Design`}</pre>
          </div>
        </div>

        {/* 4. Bootstrap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-bootstrap"></i>
            <h2>4. Bootstrap</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Bootstrap Installation
Containers
Rows & Columns
Grid System
Responsive Classes
Typography
Buttons
Cards
Navbar
Forms
Alerts
Modals
Carousel
Utilities
Spacing
Flexbox Utilities
Responsive Design`}</pre>
          </div>
        </div>

        {/* 5. JavaScript Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-js"></i>
            <h2>5. JavaScript Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Variables
let
const
var
Data Types
Strings
Numbers
Boolean
Null
Undefined
Arrays
Objects
Operators
Type Conversion
Template Literals`}</pre>
          </div>
        </div>

        {/* 6. JavaScript Control Flow */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>6. JavaScript Control Flow</h2>
          </div>

          <div className="html-code-box">
            <pre>{`if
else
else if
switch
for
while
do while
for of
for in
break
continue
Ternary Operator
Logical Operators`}</pre>
          </div>
        </div>

        {/* 7. JavaScript Functions */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>7. JavaScript Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Function Declaration
Function Expression
Arrow Function
Parameters
Arguments
Return
Default Parameters
Rest Parameters
Callback Functions
Higher Order Functions
IIFE
Closures
Recursion`}</pre>
          </div>
        </div>

        {/* 8. JavaScript Arrays */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>8. JavaScript Arrays</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Array Creation
push()
pop()
shift()
unshift()
slice()
splice()
concat()
includes()
indexOf()
find()
findIndex()
map()
filter()
reduce()
forEach()
some()
every()
sort()`}</pre>
          </div>
        </div>

        {/* 9. JavaScript Objects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>9. JavaScript Objects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Object Creation
Properties
Methods
Object.keys()
Object.values()
Object.entries()
Destructuring
Spread Operator
Rest Operator
Nested Objects
Optional Chaining
Computed Properties`}</pre>
          </div>
        </div>

        {/* 10. DOM */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>10. DOM Manipulation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`document
getElementById()
querySelector()
querySelectorAll()
createElement()
appendChild()
remove()
innerHTML
textContent
classList
style
Events
addEventListener()`}</pre>
          </div>
        </div>

        {/* 11. JavaScript ES6+ */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>11. Modern JavaScript ES6+</h2>
          </div>

          <div className="html-code-box">
            <pre>{`let & const
Arrow Functions
Template Literals
Destructuring
Spread Operator
Rest Operator
Default Parameters
Modules
Classes
Promises
Async/Await
Optional Chaining
Nullish Coalescing
Map
Set`}</pre>
          </div>
        </div>

        {/* 12. Promises */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-clock"></i>
            <h2>12. Promises & Async JavaScript</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Promise
Pending
Resolved
Rejected
then()
catch()
finally()
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
async
await
try
catch`}</pre>
          </div>
        </div>

        {/* 13. Fetch API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>13. Fetch API</h2>
          </div>

          <div className="html-code-box">
            <pre>{`fetch()
GET Request
POST Request
PUT Request
PATCH Request
DELETE Request
Headers
Request Body
JSON
response.json()
Status Codes
Error Handling
Async/Await`}</pre>
          </div>
        </div>

        {/* 14. Git */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-git-alt"></i>
            <h2>14. Git & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`git init
git clone
git status
git add
git commit
git push
git pull
git fetch
git branch
git checkout
git merge
git rebase
git stash
git log
GitHub Repository
Pull Request
Merge Conflicts`}</pre>
          </div>
        </div>

        {/* 15. npm */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-npm"></i>
            <h2>15. npm & Package Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm init
npm init -y
npm install
npm uninstall
npm update
npm install -g
npm install --save-dev
package.json
package-lock.json
node_modules
npm scripts
npm run
npm start
npm build`}</pre>
          </div>
        </div>

        {/* 16. React Introduction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-react"></i>
            <h2>16. React.js Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`React Introduction
Vite
Create React App
Components
JSX
className
Props
State
Events
Conditional Rendering
Lists
Keys
Fragments
Component Reusability`}</pre>
          </div>
        </div>

        {/* 17. React Hooks */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>17. React Hooks</h2>
          </div>

          <div className="html-code-box">
            <pre>{`useState()
useEffect()
useRef()
useContext()
useMemo()
useCallback()
useReducer()
useLayoutEffect()
Custom Hooks

State Management
Side Effects
References
Performance Optimization`}</pre>
          </div>
        </div>

        {/* 18. React Forms */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rectangle-list"></i>
            <h2>18. React Forms</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Input
Textarea
Select
Checkbox
Radio
Controlled Components
Uncontrolled Components
Form Submit
Form Validation
Error Messages
Form State
Form Libraries`}</pre>
          </div>
        </div>

        {/* 19. React Router */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>19. React Router</h2>
          </div>

          <div className="html-code-box">
            <pre>{`react-router-dom
BrowserRouter
Routes
Route
Link
NavLink
useNavigate()
useParams()
useLocation()
Nested Routes
Dynamic Routes
Protected Routes
404 Page`}</pre>
          </div>
        </div>

        {/* 20. React API Integration */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plug"></i>
            <h2>20. React API Integration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`REST API
fetch()
Axios
GET
POST
PUT
PATCH
DELETE
Loading State
Error State
Response Handling
API Services
Environment Variables`}</pre>
          </div>
        </div>

        {/* 21. React State Management */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>21. React State Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Local State
Global State
Context API
useReducer
Redux
Redux Toolkit
Actions
Reducers
Store
Selectors
Dispatch
Async State
Zustand Concept`}</pre>
          </div>
        </div>

        {/* 22. React Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>22. React Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Todo App
Calculator
Weather App
Movie App
Blog App
E-Commerce UI
Food Ordering UI
Dashboard
Portfolio
API Based Application
Authentication UI`}</pre>
          </div>
        </div>

        {/* 23. Node.js Introduction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-node-js"></i>
            <h2>23. Node.js Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Node.js Introduction
Node.js Installation
Node Version
npm
Modules
CommonJS
ES Modules
require()
import
export
process
Environment Variables
Global Objects`}</pre>
          </div>
        </div>

        {/* 24. Node Core Modules */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>24. Node.js Core Modules</h2>
          </div>

          <div className="html-code-box">
            <pre>{`fs
path
http
url
os
events
crypto
util
stream
buffer
querystring
process`}</pre>
          </div>
        </div>

        {/* 25. File System */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file"></i>
            <h2>25. Node.js File System</h2>
          </div>

          <div className="html-code-box">
            <pre>{`readFile()
writeFile()
appendFile()
unlink()
mkdir()
rmdir()
readdir()
rename()
existsSync()
Promises API
Async File Operations`}</pre>
          </div>
        </div>

        {/* 26. Express */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>26. Express.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Express Installation
express()
app.listen()
app.get()
app.post()
app.put()
app.patch()
app.delete()
app.use()
Router
Middleware
Request
Response
next()`}</pre>
          </div>
        </div>

        {/* 27. Express Routing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>27. Express Routing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Routes
Route Parameters
Query Parameters
Request Body
Router
express.Router()
Nested Routes
Route Controllers
HTTP Methods
Route Organization
API Endpoints`}</pre>
          </div>
        </div>

        {/* 28. Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>28. Express Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Application Middleware
Router Middleware
Built-in Middleware
Third-party Middleware
Custom Middleware
Authentication Middleware
Logging Middleware
Error Middleware
next()
Request Processing`}</pre>
          </div>
        </div>

        {/* 29. REST API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>29. REST API</h2>
          </div>

          <div className="html-code-box">
            <pre>{`REST
Resources
Endpoints
GET
POST
PUT
PATCH
DELETE
HTTP Status Codes
JSON
Request
Response
CRUD API
API Versioning`}</pre>
          </div>
        </div>

        {/* 30. MongoDB */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>30. MongoDB Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MongoDB
NoSQL
Database
Collection
Document
Field
MongoDB Atlas
MongoDB Compass
Mongo Shell
CRUD Operations
ObjectId
JSON
BSON`}</pre>
          </div>
        </div>

        {/* 31. MongoDB CRUD */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>31. MongoDB CRUD</h2>
          </div>

          <div className="html-code-box">
            <pre>{`insertOne()
insertMany()
find()
findOne()
updateOne()
updateMany()
replaceOne()
deleteOne()
deleteMany()
countDocuments()
distinct()
sort()
limit()
skip()`}</pre>
          </div>
        </div>

        {/* 32. MongoDB Queries */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>32. MongoDB Queries</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin
$and
$or
$not
$exists
$regex
$elemMatch`}</pre>
          </div>
        </div>

        {/* 33. Mongoose */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-leaf"></i>
            <h2>33. Mongoose</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Mongoose
Connection
Schema
Model
Documents
Validation
Default Values
Timestamps
Middleware
Schema Methods
Virtuals
Populate
References`}</pre>
          </div>
        </div>

        {/* 34. Mongoose CRUD */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>34. Mongoose CRUD</h2>
          </div>

          <div className="html-code-box">
            <pre>{`create()
find()
findOne()
findById()
findByIdAndUpdate()
findOneAndUpdate()
findByIdAndDelete()
findOneAndDelete()
updateOne()
updateMany()
deleteOne()
deleteMany()`}</pre>
          </div>
        </div>

        {/* 35. Authentication */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-lock"></i>
            <h2>35. Authentication</h2>
          </div>

          <div className="html-code-box">
            <pre>{`User Registration
User Login
Logout
Password Hashing
bcrypt
Password Verification
Authentication
Authorization
Sessions
Cookies
JWT
Access Token
Refresh Token`}</pre>
          </div>
        </div>

        {/* 36. JWT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>36. JWT Authentication</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JWT
Token Creation
Token Verification
jsonwebtoken
Payload
Secret Key
Bearer Token
Authorization Header
Access Token
Refresh Token
Protected Routes
Token Expiration`}</pre>
          </div>
        </div>

        {/* 37. Backend Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-check"></i>
            <h2>37. Backend Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Input Validation
Request Validation
Schema Validation
Required Fields
Email Validation
Password Validation
Data Types
Error Messages
Joi
Express Validator
Mongoose Validation`}</pre>
          </div>
        </div>

        {/* 38. Error Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>38. Error Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`try
catch
next()
Express Error Middleware
Custom Errors
Error Classes
404 Errors
500 Errors
Validation Errors
Database Errors
Async Error Handling
API Error Response`}</pre>
          </div>
        </div>

        {/* 39. CORS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>39. CORS & Security</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CORS
cors package
Origin
HTTP Headers
Helmet
Rate Limiting
Input Sanitization
Password Security
Environment Variables
HTTPS
Secure Cookies
Authentication Security`}</pre>
          </div>
        </div>

        {/* 40. API Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>40. API Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Postman
GET Request
POST Request
PUT Request
PATCH Request
DELETE Request
Headers
Authorization
Bearer Token
Request Body
JSON
Status Codes
Collections
Environment Variables`}</pre>
          </div>
        </div>

        {/* 41. MVC Architecture */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>41. MVC Architecture</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MVC
Model
View
Controller
Routes
Controllers
Services
Models
Middleware
Utils
Config
Separation of Concerns
Reusable Code`}</pre>
          </div>
        </div>

        {/* 42. Backend Project Structure */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder-tree"></i>
            <h2>42. MERN Project Structure</h2>
          </div>

          <div className="html-code-box">
            <pre>{`client/
server/

frontend/
components/
pages/
services/
hooks/
context/

backend/
controllers/
models/
routes/
middleware/
config/
utils/

.env
package.json`}</pre>
          </div>
        </div>

        {/* 43. Environment Variables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>43. Environment Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>{`dotenv
.env
.env.local
Environment Variables
PORT
MONGO_URI
JWT_SECRET
API_URL
Database Credentials
Secret Keys
Environment Configuration`}</pre>
          </div>
        </div>

        {/* 44. Full Stack Integration */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>44. Frontend & Backend Integration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`React Frontend
Express Backend
REST API
Axios
Fetch
CORS
API Endpoints
Request
Response
JSON
Authentication
Protected Routes
Error Handling`}</pre>
          </div>
        </div>

        {/* 45. File Upload */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-upload"></i>
            <h2>45. File Upload</h2>
          </div>

          <div className="html-code-box">
            <pre>{`File Upload
Multer
multipart/form-data
Single File
Multiple Files
File Validation
File Size
File Type
Cloud Storage
Image Upload
URL Storage`}</pre>
          </div>
        </div>

        {/* 46. Email */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-envelope"></i>
            <h2>46. Email Integration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Nodemailer
SMTP
Email Configuration
Send Email
HTML Email
Attachments
Registration Email
Password Reset Email
OTP Email
Email Verification`}</pre>
          </div>
        </div>

        {/* 47. Pagination */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list-ol"></i>
            <h2>47. Pagination & Search</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Pagination
Page Number
Page Size
skip()
limit()
Search
Filtering
Sorting
Query Parameters
Search API
Pagination API
Infinite Scroll`}</pre>
          </div>
        </div>

        {/* 48. Performance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gauge-high"></i>
            <h2>48. Performance Optimization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`React.memo
useMemo
useCallback
Lazy Loading
Code Splitting
Image Optimization
Caching
Database Indexing
API Optimization
Pagination
Compression
Production Build`}</pre>
          </div>
        </div>

        {/* 49. Docker */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-docker"></i>
            <h2>49. Docker Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Docker
Dockerfile
Image
Container
Docker Compose
docker build
docker run
docker ps
docker stop
docker images
Docker Network
Docker Volume
MERN Containers`}</pre>
          </div>
        </div>

        {/* 50. Deployment */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <h2>50. Deployment</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Production Build
Frontend Deployment
Backend Deployment
Environment Variables
Domain
DNS
HTTPS
Cloud Hosting
Database Hosting
API URL
CORS Configuration
Deployment Logs`}</pre>
          </div>
        </div>

        {/* 51. CI/CD */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>51. CI/CD</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CI/CD
GitHub Actions
Automated Testing
Build
Deployment
Workflow
Secrets
Environment Variables
Continuous Integration
Continuous Deployment`}</pre>
          </div>
        </div>

        {/* 52. Cloud Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>52. Cloud Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Cloud Computing
Servers
Storage
Databases
AWS Basics
EC2
S3
Cloud Deployment
Environment Variables
Networking
Security Groups`}</pre>
          </div>
        </div>

        {/* 53. Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial-circle-check"></i>
            <h2>53. Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Unit Testing
Integration Testing
API Testing
Jest
React Testing Library
Supertest
Test Cases
Mocking
Assertions
Test Coverage
Automated Testing`}</pre>
          </div>
        </div>

        {/* 54. Real Time */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>54. Real-Time Applications</h2>
          </div>

          <div className="html-code-box">
            <pre>{`WebSockets
Socket.IO
Real-Time Communication
Client Connection
Server Connection
Events
emit()
on()
Rooms
Broadcasting
Chat Applications
Notifications`}</pre>
          </div>
        </div>

        {/* 55. Advanced Backend */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>55. Advanced Backend</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Caching
Redis
Queues
Background Jobs
Cron Jobs
Workers
Rate Limiting
Load Balancing
API Versioning
Logging
Monitoring
Scalable Architecture`}</pre>
          </div>
        </div>

        {/* 56. Full Stack Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>56. MERN Full Stack Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Todo Application
Blog Application
E-Commerce Website
Food Ordering Application
Social Media Application
Chat Application
Job Portal
Learning Management System
Expense Tracker
Event Management System
Real Estate Application
Admin Dashboard`}</pre>
          </div>
        </div>

        {/* 57. Portfolio */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-id-card"></i>
            <h2>57. Portfolio & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Developer Portfolio
GitHub Profile
GitHub Repositories
Project README
Live Projects
Project Screenshots
Clean Code
Git Commits
Documentation
Resume
LinkedIn Profile`}</pre>
          </div>
        </div>

        {/* 58. Interview Preparation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-briefcase"></i>
            <h2>58. MERN Interview Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Questions
CSS Questions
JavaScript Questions
React Questions
Node.js Questions
Express Questions
MongoDB Questions
REST API
Authentication
JWT
Git & GitHub
Data Structures
Algorithms
Coding Problems
Project Explanation`}</pre>
          </div>
        </div>

        {/* 59. DSA */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>59. Data Structures & Algorithms</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Arrays
Strings
Objects
Linked List
Stack
Queue
Hash Table
Trees
Graphs
Recursion
Searching
Sorting
Time Complexity
Space Complexity
Problem Solving`}</pre>
          </div>
        </div>

        {/* 60. Final MERN Roadmap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-flag-checkered"></i>
            <h2>60. Become a MERN Full Stack Developer</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML
CSS
JavaScript
Git & GitHub
React.js
React Router
React Hooks
API Integration
Node.js
Express.js
REST API
MongoDB
Mongoose
Authentication
JWT
Security
Testing
Docker
Deployment
Cloud
Projects
Portfolio
Resume
Interview Preparation

Build Real-World Projects
Practice Regularly
Deploy Projects
Maintain GitHub
Prepare for Interviews`}</pre>
          </div>
        </div>

      </div>
    </section>
         
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>

      {/* model */}


      {/* MEAN Stack */}
      <div className="col-12 col-lg-6" data-bs-toggle="modal"
  data-bs-target="#meanModal"
  style={{ cursor: "pointer" }}>
        <div className="roadmap-card h-100 p-4">

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="roadmap-img">
              <img src="/mean.jpg" alt="MEAN Stack" />
            </div>

            <div>
              <h4 className="fw-bold mb-1">
                MEAN Full Stack
              </h4>

              <p className="text-muted mb-0">
                Full stack development with Angular
              </p>
            </div>
          </div>

          <div className="roadmap-flow">
            <span>HTML</span>
            <i className="bi bi-arrow-right"></i>

            <span>CSS</span>
            <i className="bi bi-arrow-right"></i>

            <span>JavaScript</span>
            <i className="bi bi-arrow-right"></i>

            <span>Angular</span>
            <i className="bi bi-arrow-right"></i>

            <span>Node.js</span>
            <i className="bi bi-arrow-right"></i>

            <span>Express</span>
            <i className="bi bi-arrow-right"></i>

            <span>MongoDB</span>
            <i className="bi bi-arrow-right"></i>

            <span>Deploy</span>
          </div>

        </div>
      </div>
  {/* model */}

<div
  className="modal fade"
  id="meanModal"
  tabIndex="-1"
  aria-labelledby="mernModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header">
         

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
       <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-brands fa-angular"></i>
          </div>

          <div className="html-heading-title">
            <h1>MEAN Stack Developer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to become a professional MEAN
              Full Stack Developer.
            </p>
          </div>
        </div>

        {/* 1. Web Fundamentals */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>1. Web Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Internet Basics
Client & Server
Frontend & Backend
HTTP
HTTPS
Request & Response
URL
Domain
DNS
Browser
Web Server
API Basics
REST API Basics`}</pre>
          </div>
        </div>

        {/* 2. HTML */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-html5"></i>
            <h2>2. HTML</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Structure
Tags
Elements
Attributes
Headings
Paragraphs
Links
Images
Lists
Tables
Forms
Input Types
Buttons
Semantic HTML
HTML5
Audio
Video
iframe`}</pre>
          </div>
        </div>

        {/* 3. CSS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-css3-alt"></i>
            <h2>3. CSS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Selectors
Colors
Background
Fonts
Text
Box Model
Margin
Padding
Border
Display
Position
Z-Index
Flexbox
Grid
Transitions
Transforms
Animations
Media Queries
Responsive Design`}</pre>
          </div>
        </div>

        {/* 4. Bootstrap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-bootstrap"></i>
            <h2>4. Bootstrap</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Bootstrap Installation
Containers
Rows
Columns
Grid System
Responsive Classes
Typography
Buttons
Cards
Navbar
Forms
Modal
Carousel
Utilities
Spacing
Flexbox Utilities
Responsive Design`}</pre>
          </div>
        </div>

        {/* 5. JavaScript Basics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-js"></i>
            <h2>5. JavaScript Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Variables
var
let
const
Data Types
String
Number
Boolean
Null
Undefined
Array
Object
Operators
Type Conversion
Template Literals`}</pre>
          </div>
        </div>

        {/* 6. JavaScript Control Flow */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>6. JavaScript Control Flow</h2>
          </div>

          <div className="html-code-box">
            <pre>{`if
else
else if
switch
case
for
while
do while
for of
for in
break
continue
Ternary Operator
Logical Operators`}</pre>
          </div>
        </div>

        {/* 7. JavaScript Functions */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>7. JavaScript Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Function Declaration
Function Expression
Arrow Function
Parameters
Arguments
Return
Default Parameters
Rest Parameters
Callback Functions
Higher Order Functions
IIFE
Closures
Recursion`}</pre>
          </div>
        </div>

        {/* 8. JavaScript Arrays */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>8. JavaScript Arrays</h2>
          </div>

          <div className="html-code-box">
            <pre>{`push()
pop()
shift()
unshift()
slice()
splice()
concat()
includes()
indexOf()
find()
findIndex()
map()
filter()
reduce()
forEach()
some()
every()
sort()`}</pre>
          </div>
        </div>

        {/* 9. JavaScript Objects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>9. JavaScript Objects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Object Creation
Properties
Methods
Object.keys()
Object.values()
Object.entries()
Destructuring
Spread Operator
Rest Operator
Nested Objects
Optional Chaining
Computed Properties`}</pre>
          </div>
        </div>

        {/* 10. Modern JavaScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>10. Modern JavaScript ES6+</h2>
          </div>

          <div className="html-code-box">
            <pre>{`let & const
Arrow Functions
Template Literals
Destructuring
Spread Operator
Rest Operator
Default Parameters
Modules
Classes
Promises
Async/Await
Optional Chaining
Nullish Coalescing
Map
Set`}</pre>
          </div>
        </div>

        {/* 11. DOM */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>11. DOM Manipulation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`document
getElementById()
querySelector()
querySelectorAll()
createElement()
appendChild()
remove()
innerHTML
textContent
classList
style
addEventListener()
Events`}</pre>
          </div>
        </div>

        {/* 12. Async JavaScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-clock"></i>
            <h2>12. Async JavaScript</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Callbacks
Promises
then()
catch()
finally()
async
await
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
try
catch`}</pre>
          </div>
        </div>

        {/* 13. Fetch API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>13. Fetch API</h2>
          </div>

          <div className="html-code-box">
            <pre>{`fetch()
GET
POST
PUT
PATCH
DELETE
Headers
Request Body
JSON
response.json()
Status Codes
Error Handling
Async/Await`}</pre>
          </div>
        </div>

        {/* 14. Git */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-git-alt"></i>
            <h2>14. Git & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`git init
git clone
git status
git add
git commit
git push
git pull
git fetch
git branch
git checkout
git merge
git rebase
git stash
git log
GitHub Repository
Pull Request
Merge Conflicts`}</pre>
          </div>
        </div>

        {/* 15. npm */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-npm"></i>
            <h2>15. npm & Package Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm init
npm init -y
npm install
npm uninstall
npm update
npm install -g
npm install --save-dev
package.json
package-lock.json
node_modules
npm scripts
npm run
npm start`}</pre>
          </div>
        </div>

        {/* 16. TypeScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>16. TypeScript Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`TypeScript Introduction
Installation
tsconfig.json
Types
String
Number
Boolean
Array
Tuple
Object
any
unknown
Union Types
Interfaces
Type Aliases
Generics
Enums
Functions
Classes`}</pre>
          </div>
        </div>

        {/* 17. Angular Introduction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-angular"></i>
            <h2>17. Angular Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Angular Introduction
Angular CLI
Node.js
npm
Project Creation
Angular Workspace
Components
Templates
Modules
Services
Dependency Injection
Data Binding
Directives
Pipes`}</pre>
          </div>
        </div>

        {/* 18. Angular Components */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-angular"></i>
            <h2>18. Angular Components</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Component
@Component
Selector
Template
Template URL
Style URL
Component Class
Component Lifecycle
ngOnInit()
ngOnChanges()
ngOnDestroy()
ViewChild
ContentChild`}</pre>
          </div>
        </div>

        {/* 19. Angular Templates */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>19. Angular Templates</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Interpolation
Property Binding
Event Binding
Two-Way Binding
ngModel
Template Expressions
Template Variables
Template Reference
Event Handling`}</pre>
          </div>
        </div>

        {/* 20. Angular Directives */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>20. Angular Directives</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Directives
Attribute Directives
Structural Directives
ngIf
ngFor
ngSwitch
ngClass
ngStyle
Custom Directives
HostListener
HostBinding`}</pre>
          </div>
        </div>

        {/* 21. Angular Services */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>21. Angular Services</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Services
@Injectable
Dependency Injection
Service Creation
Shared Services
Singleton Services
Service Methods
Component Communication
Business Logic`}</pre>
          </div>
        </div>

        {/* 22. Angular Routing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>22. Angular Routing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Angular Router
Routes
RouterModule
routerLink
router-outlet
navigate()
navigateByUrl()
Route Parameters
Query Parameters
Child Routes
Lazy Loading
Route Guards
404 Page`}</pre>
          </div>
        </div>

        {/* 23. Angular Forms */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rectangle-list"></i>
            <h2>23. Angular Forms</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Template Driven Forms
Reactive Forms
FormControl
FormGroup
FormBuilder
Validators
Required
Email
MinLength
MaxLength
Form Submit
Form Errors
Custom Validators`}</pre>
          </div>
        </div>

        {/* 24. Angular HTTP */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>24. Angular HTTP Client</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HttpClient
HttpClientModule
GET
POST
PUT
PATCH
DELETE
Headers
Params
Request Body
Response
Error Handling
HttpClient Service`}</pre>
          </div>
        </div>

        {/* 25. Angular RxJS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-spin"></i>
            <h2>25. RxJS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Observable
Observer
Subscription
subscribe()
unsubscribe()
Subject
BehaviorSubject
ReplaySubject
Operators
map()
filter()
tap()
switchMap()
mergeMap()
catchError()`}</pre>
          </div>
        </div>

        {/* 26. Angular State Management */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>26. Angular State Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Component State
Service State
RxJS State
BehaviorSubject
Signals
Computed Signals
Effects
NgRx
Store
Actions
Reducers
Selectors
Effects`}</pre>
          </div>
        </div>

        {/* 27. Angular Authentication */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-lock"></i>
            <h2>27. Angular Authentication</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Login
Registration
Logout
JWT
Access Token
Refresh Token
Auth Service
Auth Guard
HTTP Interceptor
Protected Routes
Authorization
Token Storage`}</pre>
          </div>
        </div>

        {/* 28. Angular Interceptors */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>28. HTTP Interceptors</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTTP Interceptor
Request Interceptor
Response Interceptor
Authorization Header
JWT Token
Error Handling
Logging
Loading Indicator
Request Modification`}</pre>
          </div>
        </div>

        {/* 29. Angular Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>29. Angular Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Unit Testing
Component Testing
Service Testing
Jasmine
Karma
TestBed
describe()
it()
expect()
Mock Services
Test Coverage
Integration Testing`}</pre>
          </div>
        </div>

        {/* 30. Angular Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>30. Angular Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Todo Application
Weather Application
Blog Application
Admin Dashboard
E-Commerce UI
Food Ordering UI
Portfolio
Employee Management
Student Management
API Based Application`}</pre>
          </div>
        </div>

        {/* 31. Node.js */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-node-js"></i>
            <h2>31. Node.js Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Node.js Introduction
Installation
Node Version
npm
Modules
CommonJS
ES Modules
require()
import
export
process
Environment Variables
Global Objects`}</pre>
          </div>
        </div>

        {/* 32. Node Core Modules */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>32. Node.js Core Modules</h2>
          </div>

          <div className="html-code-box">
            <pre>{`fs
path
http
url
os
events
crypto
util
stream
buffer
process
querystring`}</pre>
          </div>
        </div>

        {/* 33. Express */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>33. Express.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Express Installation
express()
app.listen()
app.get()
app.post()
app.put()
app.patch()
app.delete()
app.use()
Router
Middleware
Request
Response
next()`}</pre>
          </div>
        </div>

        {/* 34. Express Routing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>34. Express Routing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Routes
Route Parameters
Query Parameters
Request Body
Router
express.Router()
Nested Routes
Route Controllers
HTTP Methods
API Endpoints`}</pre>
          </div>
        </div>

        {/* 35. Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>35. Express Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Application Middleware
Router Middleware
Built-in Middleware
Third-party Middleware
Custom Middleware
Authentication Middleware
Logging Middleware
Error Middleware
next()
Request Processing`}</pre>
          </div>
        </div>

        {/* 36. REST API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>36. REST API</h2>
          </div>

          <div className="html-code-box">
            <pre>{`REST
Resources
Endpoints
GET
POST
PUT
PATCH
DELETE
HTTP Status Codes
JSON
Request
Response
CRUD API
API Versioning`}</pre>
          </div>
        </div>

        {/* 37. MongoDB */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>37. MongoDB Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MongoDB
NoSQL
Database
Collection
Document
Field
ObjectId
BSON
MongoDB Atlas
MongoDB Compass
Mongo Shell
CRUD Operations`}</pre>
          </div>
        </div>

        {/* 38. MongoDB CRUD */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>38. MongoDB CRUD</h2>
          </div>

          <div className="html-code-box">
            <pre>{`insertOne()
insertMany()
find()
findOne()
updateOne()
updateMany()
replaceOne()
deleteOne()
deleteMany()
countDocuments()
distinct()
sort()
limit()
skip()`}</pre>
          </div>
        </div>

        {/* 39. MongoDB Queries */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>39. MongoDB Queries</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin
$and
$or
$not
$exists
$regex
$elemMatch`}</pre>
          </div>
        </div>

        {/* 40. Mongoose */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-leaf"></i>
            <h2>40. Mongoose</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Mongoose
Connection
Schema
Model
Documents
Validation
Default Values
Timestamps
Middleware
Schema Methods
Virtuals
Populate
References`}</pre>
          </div>
        </div>

        {/* 41. Mongoose CRUD */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>41. Mongoose CRUD</h2>
          </div>

          <div className="html-code-box">
            <pre>{`create()
find()
findOne()
findById()
findByIdAndUpdate()
findOneAndUpdate()
findByIdAndDelete()
findOneAndDelete()
updateOne()
updateMany()
deleteOne()
deleteMany()`}</pre>
          </div>
        </div>

        {/* 42. Authentication */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-lock"></i>
            <h2>42. Authentication</h2>
          </div>

          <div className="html-code-box">
            <pre>{`User Registration
User Login
Logout
Password Hashing
bcrypt
Password Verification
Authentication
Authorization
JWT
Sessions
Cookies
Protected Routes`}</pre>
          </div>
        </div>

        {/* 43. JWT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>43. JWT Authentication</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JWT
Token Creation
Token Verification
jsonwebtoken
Payload
Secret Key
Bearer Token
Authorization Header
Access Token
Refresh Token
Token Expiration
Protected API`}</pre>
          </div>
        </div>

        {/* 44. Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-check"></i>
            <h2>44. Backend Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Input Validation
Request Validation
Schema Validation
Required Fields
Email Validation
Password Validation
Data Types
Error Messages
Joi
Express Validator
Mongoose Validation`}</pre>
          </div>
        </div>

        {/* 45. Error Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>45. Error Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`try
catch
next()
Express Error Middleware
Custom Errors
Error Classes
404 Errors
500 Errors
Validation Errors
Database Errors
Async Error Handling
API Error Response`}</pre>
          </div>
        </div>

        {/* 46. CORS & Security */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>46. CORS & Security</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CORS
cors package
Origin
HTTP Headers
Helmet
Rate Limiting
Input Sanitization
Password Security
Environment Variables
HTTPS
Secure Cookies
Security Headers`}</pre>
          </div>
        </div>

        {/* 47. API Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>47. API Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Postman
GET
POST
PUT
PATCH
DELETE
Headers
Authorization
Bearer Token
Request Body
JSON
Status Codes
Collections
Environment Variables`}</pre>
          </div>
        </div>

        {/* 48. MVC */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>48. MVC Architecture</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MVC
Model
View
Controller
Routes
Controllers
Services
Models
Middleware
Utils
Config
Separation of Concerns
Reusable Code`}</pre>
          </div>
        </div>

        {/* 49. Project Structure */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder-tree"></i>
            <h2>49. MEAN Project Structure</h2>
          </div>

          <div className="html-code-box">
            <pre>{`client/
server/

frontend/
components/
pages/
services/
guards/
interceptors/
models/

backend/
controllers/
models/
routes/
middleware/
config/
utils/

.env
package.json`}</pre>
          </div>
        </div>

        {/* 50. Environment Variables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>50. Environment Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>{`dotenv
.env
.env.local
PORT
MONGO_URI
JWT_SECRET
API_URL
Database Credentials
Secret Keys
Environment Configuration
Production Variables`}</pre>
          </div>
        </div>

        {/* 51. File Upload */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-upload"></i>
            <h2>51. File Upload</h2>
          </div>

          <div className="html-code-box">
            <pre>{`File Upload
Multer
multipart/form-data
Single File
Multiple Files
File Validation
File Size
File Type
Cloud Storage
Image Upload
URL Storage`}</pre>
          </div>
        </div>

        {/* 52. Email */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-envelope"></i>
            <h2>52. Email Integration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Nodemailer
SMTP
Email Configuration
Send Email
HTML Email
Attachments
Registration Email
Password Reset
OTP Email
Email Verification`}</pre>
          </div>
        </div>

        {/* 53. Pagination */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list-ol"></i>
            <h2>53. Pagination & Search</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Pagination
Page Number
Page Size
skip()
limit()
Search
Filtering
Sorting
Query Parameters
Search API
Pagination API
Infinite Scroll`}</pre>
          </div>
        </div>

        {/* 54. Performance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gauge-high"></i>
            <h2>54. Performance Optimization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Angular Lazy Loading
Change Detection
OnPush
TrackBy
Pure Pipes
Code Splitting
Image Optimization
Caching
Database Indexing
API Optimization
Pagination
Production Build`}</pre>
          </div>
        </div>

        {/* 55. Docker */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-docker"></i>
            <h2>55. Docker Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Docker
Dockerfile
Image
Container
Docker Compose
docker build
docker run
docker ps
docker stop
docker images
Docker Network
Docker Volume
MEAN Containers`}</pre>
          </div>
        </div>

        {/* 56. Deployment */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <h2>56. Deployment</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Angular Production Build
Backend Deployment
Database Hosting
Environment Variables
Domain
DNS
HTTPS
Cloud Hosting
API URL
CORS Configuration
Deployment Logs`}</pre>
          </div>
        </div>

        {/* 57. CI/CD */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>57. CI/CD</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CI/CD
GitHub Actions
Automated Testing
Build
Deployment
Workflow
Secrets
Environment Variables
Continuous Integration
Continuous Deployment`}</pre>
          </div>
        </div>

        {/* 58. Real-Time Applications */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>58. Real-Time Applications</h2>
          </div>

          <div className="html-code-box">
            <pre>{`WebSockets
Socket.IO
Real-Time Communication
Client Connection
Server Connection
Events
emit()
on()
Rooms
Broadcasting
Chat Applications
Notifications`}</pre>
          </div>
        </div>

        {/* 59. MEAN Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>59. MEAN Full Stack Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Todo Application
Blog Application
E-Commerce Website
Food Ordering Application
Social Media Application
Chat Application
Job Portal
Learning Management System
Expense Tracker
Event Management System
Employee Management System
Admin Dashboard`}</pre>
          </div>
        </div>

        {/* 60. Portfolio & GitHub */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-id-card"></i>
            <h2>60. Portfolio & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Developer Portfolio
GitHub Profile
GitHub Repositories
Project README
Live Projects
Project Screenshots
Clean Code
Git Commits
Documentation
Resume
LinkedIn Profile`}</pre>
          </div>
        </div>

        {/* 61. DSA */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>61. Data Structures & Algorithms</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Arrays
Strings
Objects
Linked List
Stack
Queue
Hash Table
Trees
Graphs
Recursion
Searching
Sorting
Time Complexity
Space Complexity
Problem Solving`}</pre>
          </div>
        </div>

        {/* 62. Interview Preparation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-briefcase"></i>
            <h2>62. MEAN Interview Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Questions
CSS Questions
JavaScript Questions
TypeScript Questions
Angular Questions
Node.js Questions
Express Questions
MongoDB Questions
REST API
Authentication
JWT
Git & GitHub
Data Structures
Algorithms
Coding Problems
Project Explanation`}</pre>
          </div>
        </div>

        {/* 63. Advanced MEAN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rocket"></i>
            <h2>63. Advanced MEAN Development</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Advanced Angular
NgRx
RxJS
Angular Signals
Microservices
Redis
Caching
Message Queues
Background Jobs
Logging
Monitoring
Load Balancing
Scalable Architecture
Cloud Deployment`}</pre>
          </div>
        </div>

        {/* 64. Complete MEAN Roadmap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-flag-checkered"></i>
            <h2>64. Become a MEAN Full Stack Developer</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML
CSS
Bootstrap
JavaScript
TypeScript
Git & GitHub
npm
Angular
Angular Components
Angular Routing
Angular Forms
Angular Services
RxJS
Angular HTTP
Angular Authentication
Node.js
Express.js
REST API
MongoDB
Mongoose
Authentication
JWT
Security
Testing
Docker
Deployment
Cloud
Projects
Portfolio
Resume
Interview Preparation

Build Real-World Projects
Practice Regularly
Deploy Projects
Maintain GitHub
Prepare for Interviews`}</pre>
          </div>
        </div>

      </div>
    </section>
       
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>

      {/* model */}


      {/* Full Stack Developer */}
      <div className="col-12 col-lg-6" data-bs-toggle="modal"
  data-bs-target="#fullModal"
  style={{ cursor: "pointer" }}>
        <div className="roadmap-card h-100 p-4">

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="roadmap-img">
              <img src="/full.png" alt="Full Stack Developer" />
            </div>

            <div>
              <h4 className="fw-bold mb-1">
                Full Stack Developer
              </h4>

              <p className="text-muted mb-0">
                Master frontend and backend development
              </p>
            </div>
          </div>

          <div className="roadmap-flow">
            <span>HTML</span>
            <i className="bi bi-arrow-right"></i>

            <span>CSS</span>
            <i className="bi bi-arrow-right"></i>

            <span>JavaScript</span>
            <i className="bi bi-arrow-right"></i>

            <span>React</span>
            <i className="bi bi-arrow-right"></i>

            <span>Backend</span>
            <i className="bi bi-arrow-right"></i>

            <span>Database</span>
            <i className="bi bi-arrow-right"></i>

            <span>APIs</span>
            <i className="bi bi-arrow-right"></i>

            <span>Deploy</span>
          </div>

        </div>
      </div>

  {/* model */}

<div
  className="modal fade"
  id="fullModal"
  tabIndex="-1"
  aria-labelledby="mernModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header">
        

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        
         <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>

          <div className="html-heading-title">
            <h1>Full Stack Developer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to become a professional
              Full Stack Developer.
            </p>
          </div>
        </div>

        {/* 1. Computer Fundamentals */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-computer"></i>
            <h2>1. Computer & Programming Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Computer Basics
Operating Systems
Files & Folders
Command Line
Terminal
Programming Concepts
Variables
Data Types
Operators
Conditions
Loops
Functions
Debugging
Problem Solving`}</pre>
          </div>
        </div>

        {/* 2. Internet Fundamentals */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>2. Internet & Web Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Internet
WWW
Client
Server
Frontend
Backend
Browser
Web Server
DNS
Domain
Hosting
HTTP
HTTPS
Request
Response
URL
Cookies
Sessions
APIs`}</pre>
          </div>
        </div>

        {/* 3. HTML */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-html5"></i>
            <h2>3. HTML</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Structure
Tags
Elements
Attributes
Headings
Paragraphs
Links
Images
Lists
Tables
Forms
Input Types
Buttons
Semantic HTML
HTML5
Audio
Video
iframe
Accessibility
SEO Basics`}</pre>
          </div>
        </div>

        {/* 4. CSS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-css3-alt"></i>
            <h2>4. CSS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Selectors
Colors
Background
Fonts
Text
Box Model
Margin
Padding
Border
Display
Position
Z-Index
Flexbox
Grid
Transitions
Transforms
Animations
Media Queries
Responsive Design
CSS Variables`}</pre>
          </div>
        </div>

        {/* 5. Bootstrap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-bootstrap"></i>
            <h2>5. Bootstrap</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Bootstrap Installation
Containers
Rows
Columns
Grid System
Responsive Classes
Typography
Buttons
Cards
Navbar
Forms
Modal
Carousel
Alerts
Utilities
Spacing
Flexbox Utilities
Responsive Design`}</pre>
          </div>
        </div>

        {/* 6. JavaScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-js"></i>
            <h2>6. JavaScript</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Variables
let
const
var
Data Types
Strings
Numbers
Boolean
Arrays
Objects
Operators
Type Conversion
Conditions
Loops
Functions
Arrow Functions
Scope
Hoisting
Closures
Destructuring
Spread Operator
Rest Operator`}</pre>
          </div>
        </div>

        {/* 7. JavaScript Advanced */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>7. Advanced JavaScript</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DOM
Events
Event Delegation
Callbacks
Promises
Async/Await
Fetch API
Modules
Classes
Prototypes
This Keyword
Map
Set
Optional Chaining
Nullish Coalescing
Error Handling
JSON
Local Storage
Session Storage`}</pre>
          </div>
        </div>

        {/* 8. Git */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-git-alt"></i>
            <h2>8. Git & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`git init
git clone
git status
git add
git commit
git push
git pull
git fetch
git branch
git checkout
git merge
git rebase
git stash
git log
GitHub
Repositories
Pull Requests
Issues
Merge Conflicts
GitHub Actions Basics`}</pre>
          </div>
        </div>

        {/* 9. Package Management */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>9. Package Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm
npm init
npm install
npm uninstall
npm update
package.json
package-lock.json
node_modules
npm scripts
npm run
Dependencies
Dev Dependencies
Semantic Versioning
npx
Yarn
pnpm`}</pre>
          </div>
        </div>

        {/* 10. Frontend Framework */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>10. Frontend Framework</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Choose a Framework

React.js
Angular
Vue.js

Components
Templates
State
Props
Events
Routing
Forms
API Integration
Reusable Components
Component Architecture`}</pre>
          </div>
        </div>

        {/* 11. React */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-react"></i>
            <h2>11. React.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`React
JSX
Components
Props
State
Events
Conditional Rendering
Lists
Keys
Forms
useState
useEffect
useRef
useContext
useMemo
useCallback
Custom Hooks
React Router`}</pre>
          </div>
        </div>

        {/* 12. Angular */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-angular"></i>
            <h2>12. Angular</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Angular
TypeScript
Components
Templates
Services
Dependency Injection
Directives
Pipes
Routing
Forms
HttpClient
RxJS
Guards
Interceptors
Signals
State Management`}</pre>
          </div>
        </div>

        {/* 13. TypeScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>13. TypeScript</h2>
          </div>

          <div className="html-code-box">
            <pre>{`TypeScript
Types
Interfaces
Type Aliases
Union Types
Intersection Types
Generics
Enums
Functions
Classes
Access Modifiers
Type Guards
Utility Types
keyof
typeof
Optional Properties
tsconfig.json`}</pre>
          </div>
        </div>

        {/* 14. Frontend State Management */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>14. Frontend State Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Local State
Global State
Context API
Redux
Redux Toolkit
Actions
Reducers
Store
Selectors
Dispatch
Async State
Zustand
Signals
State Persistence`}</pre>
          </div>
        </div>

        {/* 15. Frontend API Integration */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plug"></i>
            <h2>15. Frontend API Integration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`REST API
fetch()
Axios
GET
POST
PUT
PATCH
DELETE
Headers
Request Body
JSON
Loading State
Error State
Authentication
API Services
Environment Variables`}</pre>
          </div>
        </div>

        {/* 16. Frontend Projects */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>16. Frontend Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Portfolio
Todo App
Calculator
Weather App
Movie App
Blog App
Dashboard
E-Commerce UI
Food Ordering UI
Admin Dashboard
API Based Application
Authentication UI`}</pre>
          </div>
        </div>

        {/* 17. Backend Fundamentals */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>17. Backend Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Backend Concepts
Client Server Architecture
Request Response
HTTP Methods
Status Codes
REST
API
CRUD
Authentication
Authorization
Middleware
Sessions
Cookies
Environment Variables
Error Handling`}</pre>
          </div>
        </div>

        {/* 18. Backend Language */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>18. Choose Backend Language</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Node.js
Python
Java
C#
PHP
Go

Choose One Backend Stack

Node.js + Express
Python + Django
Java + Spring Boot
C# + .NET
PHP + Laravel`}</pre>
          </div>
        </div>

        {/* 19. Node.js */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-node-js"></i>
            <h2>19. Node.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Node.js
npm
Modules
CommonJS
ES Modules
require()
import
export
process
Environment Variables
fs
path
http
events
crypto
streams
buffers`}</pre>
          </div>
        </div>

        {/* 20. Express */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>20. Express.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Express
express()
app.listen()
GET
POST
PUT
PATCH
DELETE
Router
Middleware
Request
Response
next()
Route Parameters
Query Parameters
Request Body
Error Middleware`}</pre>
          </div>
        </div>

        {/* 21. REST API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>21. REST API Development</h2>
          </div>

          <div className="html-code-box">
            <pre>{`REST
Resources
Endpoints
GET
POST
PUT
PATCH
DELETE
CRUD
JSON
HTTP Status Codes
API Versioning
Pagination
Filtering
Sorting
Searching`}</pre>
          </div>
        </div>

        {/* 22. API Architecture */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>22. Backend Architecture</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MVC
Models
Views
Controllers
Routes
Services
Repositories
Middleware
Utils
Config
Controllers
Business Logic
Separation of Concerns
Reusable Code`}</pre>
          </div>
        </div>

        {/* 23. Database Fundamentals */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>23. Database Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Database
Tables
Rows
Columns
Records
Primary Key
Foreign Key
Relationships
Indexes
Queries
Transactions
Normalization
CRUD
Backup
Database Security`}</pre>
          </div>
        </div>

        {/* 24. SQL */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>24. SQL</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MySQL
PostgreSQL
SQL Server

CREATE
SELECT
INSERT
UPDATE
DELETE
WHERE
ORDER BY
GROUP BY
HAVING
JOIN
INNER JOIN
LEFT JOIN
Subqueries
Indexes
Transactions`}</pre>
          </div>
        </div>

        {/* 25. NoSQL */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-leaf"></i>
            <h2>25. NoSQL & MongoDB</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MongoDB
NoSQL
Database
Collection
Document
Field
ObjectId
BSON
MongoDB Atlas
MongoDB Compass
CRUD
Queries
Indexes
Aggregation
Transactions`}</pre>
          </div>
        </div>

        {/* 26. ORM / ODM */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>26. ORM & ODM</h2>
          </div>

          <div className="html-code-box">
            <pre>{`ORM
ODM

Sequelize
Prisma
Hibernate
Entity Framework
Mongoose

Models
Schemas
Relations
Validation
Queries
Migrations`}</pre>
          </div>
        </div>

        {/* 27. Authentication */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-lock"></i>
            <h2>27. Authentication</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Registration
Login
Logout
Password Hashing
bcrypt
Password Verification
Authentication
Authorization
Sessions
Cookies
JWT
Access Token
Refresh Token
Protected Routes`}</pre>
          </div>
        </div>

        {/* 28. JWT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>28. JWT & Authorization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`JWT
Token Creation
Token Verification
Payload
Secret Key
Bearer Token
Authorization Header
Access Token
Refresh Token
Token Expiration
Roles
Permissions
Role Based Access Control`}</pre>
          </div>
        </div>

        {/* 29. Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-check"></i>
            <h2>29. Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Input Validation
Request Validation
Schema Validation
Required Fields
Email Validation
Password Validation
Data Types
Custom Validation
Joi
Zod
Express Validator
Database Validation`}</pre>
          </div>
        </div>

        {/* 30. Error Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>30. Error Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`try
catch
Custom Errors
Error Classes
404 Errors
400 Errors
401 Errors
403 Errors
500 Errors
Validation Errors
Database Errors
Global Error Handler
API Error Response
Logging Errors`}</pre>
          </div>
        </div>

        {/* 31. Security */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>31. Web Security</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTTPS
CORS
CSRF
XSS
SQL Injection
NoSQL Injection
Helmet
Rate Limiting
Input Sanitization
Password Security
Secure Cookies
Security Headers
Environment Secrets`}</pre>
          </div>
        </div>

        {/* 32. API Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial"></i>
            <h2>32. API Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Postman
GET
POST
PUT
PATCH
DELETE
Headers
Authorization
Bearer Token
Request Body
JSON
Status Codes
Collections
Environment Variables
API Documentation`}</pre>
          </div>
        </div>

        {/* 33. Testing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-vial-circle-check"></i>
            <h2>33. Application Testing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Unit Testing
Integration Testing
End-to-End Testing
Jest
Vitest
React Testing Library
Cypress
Playwright
Supertest
Mocking
Assertions
Test Coverage
Test Automation`}</pre>
          </div>
        </div>

        {/* 34. File Upload */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-upload"></i>
            <h2>34. File Upload</h2>
          </div>

          <div className="html-code-box">
            <pre>{`File Upload
multipart/form-data
Multer
Single File
Multiple Files
File Validation
File Size
File Type
Image Upload
Cloud Storage
File URL
File Deletion`}</pre>
          </div>
        </div>

        {/* 35. Email */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-envelope"></i>
            <h2>35. Email Integration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SMTP
Email Service
Nodemailer
Send Email
HTML Email
Attachments
Email Verification
Registration Email
Password Reset
OTP
Notifications
Email Templates`}</pre>
          </div>
        </div>

        {/* 36. Real Time */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>36. Real-Time Applications</h2>
          </div>

          <div className="html-code-box">
            <pre>{`WebSockets
Socket.IO
Real-Time Communication
Client Connection
Server Connection
Events
emit()
on()
Rooms
Broadcasting
Chat
Notifications
Live Updates`}</pre>
          </div>
        </div>

        {/* 37. Caching */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-memory"></i>
            <h2>37. Caching</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Caching
Browser Cache
HTTP Cache
Server Cache
Redis
Cache Keys
Cache Expiration
Cache Invalidation
Session Storage
Performance Optimization`}</pre>
          </div>
        </div>

        {/* 38. Background Jobs */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>38. Background Jobs</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Background Jobs
Queues
Workers
Cron Jobs
Scheduled Tasks
BullMQ
Message Queues
Email Jobs
Notification Jobs
Data Processing`}</pre>
          </div>
        </div>

        {/* 39. Docker */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-docker"></i>
            <h2>39. Docker</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Docker
Dockerfile
Images
Containers
Docker Compose
docker build
docker run
docker ps
docker stop
docker images
Docker Network
Docker Volume
Containerized Applications`}</pre>
          </div>
        </div>

        {/* 40. Linux */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-linux"></i>
            <h2>40. Linux & Server Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Linux
Terminal
pwd
ls
cd
mkdir
touch
cp
mv
rm
cat
grep
chmod
chown
ps
kill
ssh
Environment Variables`}</pre>
          </div>
        </div>

        {/* 41. Cloud */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>41. Cloud Computing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Cloud Computing
AWS
Azure
Google Cloud
Virtual Servers
Storage
Databases
Networking
IAM
Security Groups
Load Balancers
Cloud Deployment
Environment Variables`}</pre>
          </div>
        </div>

        {/* 42. Deployment */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <h2>42. Deployment</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Production Build
Frontend Deployment
Backend Deployment
Database Hosting
Domain
DNS
HTTPS
SSL
Environment Variables
API URL
CORS
Deployment Logs
Monitoring`}</pre>
          </div>
        </div>

        {/* 43. CI/CD */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>43. CI/CD</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CI/CD
GitHub Actions
GitLab CI
Automated Testing
Build
Deployment
Workflow
Secrets
Environment Variables
Continuous Integration
Continuous Deployment
Deployment Pipeline`}</pre>
          </div>
        </div>

        {/* 44. Monitoring */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-chart-line"></i>
            <h2>44. Logging & Monitoring</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Application Logs
Error Logs
Access Logs
Monitoring
Metrics
Performance
Health Checks
Uptime
Alerts
Debugging
Log Management
Server Monitoring`}</pre>
          </div>
        </div>

        {/* 45. Performance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gauge-high"></i>
            <h2>45. Performance Optimization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Lazy Loading
Code Splitting
Image Optimization
Caching
Database Indexing
API Optimization
Pagination
Compression
CDN
Minification
Bundle Optimization
Query Optimization
Load Testing`}</pre>
          </div>
        </div>

        {/* 46. Architecture */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>46. Software Architecture</h2>
          </div>

          <div className="html-code-box">
            <pre>{`MVC
Layered Architecture
Clean Architecture
Microservices
Monolith
Service Oriented Architecture
API Gateway
Load Balancing
Scalability
High Availability
Fault Tolerance
Separation of Concerns`}</pre>
          </div>
        </div>

        {/* 47. System Design */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>47. System Design Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Scalability
Availability
Reliability
Load Balancer
Caching
Database Scaling
Horizontal Scaling
Vertical Scaling
CDN
Message Queue
Database Replication
Sharding
CAP Theorem`}</pre>
          </div>
        </div>

        {/* 48. Full Stack Project */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>48. Full Stack Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Blog Application
E-Commerce Website
Food Ordering Application
Social Media Application
Chat Application
Job Portal
Learning Management System
Expense Tracker
Event Management System
Hospital Management System
Real Estate Application
Admin Dashboard`}</pre>
          </div>
        </div>

        {/* 49. Portfolio */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-id-card"></i>
            <h2>49. Portfolio & GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Developer Portfolio
GitHub Profile
GitHub Repositories
Project README
Live Projects
Project Screenshots
Clean Code
Git Commits
Documentation
Resume
LinkedIn Profile
Project Demo`}</pre>
          </div>
        </div>

        {/* 50. DSA */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>50. Data Structures & Algorithms</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Arrays
Strings
Linked List
Stack
Queue
Hash Table
Trees
Graphs
Recursion
Searching
Sorting
Binary Search
Two Pointers
Sliding Window
Time Complexity
Space Complexity
Problem Solving`}</pre>
          </div>
        </div>

        {/* 51. Interview */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-briefcase"></i>
            <h2>51. Full Stack Interview Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`HTML Questions
CSS Questions
JavaScript Questions
TypeScript Questions
Frontend Framework
Backend Questions
Database Questions
REST API
Authentication
Security
Git & GitHub
Testing
Docker
Cloud
System Design
DSA
Coding Problems
Project Explanation`}</pre>
          </div>
        </div>

        {/* 52. Job Preparation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-tie"></i>
            <h2>52. Job Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Resume Preparation
Portfolio
GitHub
LinkedIn
Technical Skills
Projects
Project Explanation
Mock Interviews
Coding Practice
DSA Practice
System Design
Technical Interview
HR Interview
Communication Skills
Job Applications`}</pre>
          </div>
        </div>

        {/* 53. Complete Roadmap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-flag-checkered"></i>
            <h2>53. Become a Full Stack Developer</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Computer Fundamentals
Web Fundamentals
HTML
CSS
Bootstrap
JavaScript
Advanced JavaScript
Git & GitHub
npm
TypeScript
React / Angular / Vue
Frontend State Management
API Integration
Backend Language
Node.js / Python / Java / C#
Express / Django / Spring Boot / .NET
REST API
SQL
MongoDB
Authentication
JWT
Security
Testing
Docker
Linux
Cloud
Deployment
CI/CD
Caching
Monitoring
System Design
Real-World Projects
Portfolio
Resume
DSA
Interview Preparation
Job Applications`}</pre>
          </div>
        </div>

      </div>
    </section>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>

      {/* model */}

      {/* DevOps */}
      <div className="col-12 col-lg-6" data-bs-toggle="modal"
  data-bs-target="#devModal"
  style={{ cursor: "pointer" }}>
        <div className="roadmap-card h-100 p-4">

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="roadmap-img">
              <img src="/devops.png" alt="DevOps" />
            </div>

            <div>
              <h4 className="fw-bold mb-1">
                DevOps Engineer
              </h4>

              <p className="text-muted mb-0">
                Automate, deploy and manage applications
              </p>
            </div>
          </div>

          <div className="roadmap-flow">
            <span>Linux</span>
            <i className="bi bi-arrow-right"></i>

            <span>Git</span>
            <i className="bi bi-arrow-right"></i>

            <span>Docker</span>
            <i className="bi bi-arrow-right"></i>

            <span>CI/CD</span>
            <i className="bi bi-arrow-right"></i>

            <span>AWS</span>
            <i className="bi bi-arrow-right"></i>

            <span>Kubernetes</span>
            <i className="bi bi-arrow-right"></i>

            <span>Monitoring</span>
            <i className="bi bi-arrow-right"></i>

            <span>Deploy</span>
          </div>

        </div>
      </div>

        {/* model */}

<div
  className="modal fade"
  id="devModal"
  tabIndex="-1"
  aria-labelledby="mernModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header">
        

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">


       <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-solid fa-gears"></i>
          </div>

          <div className="html-heading-title">
            <h1>DevOps Engineer Roadmap</h1>
            <p>
              Follow this step-by-step roadmap to become a professional
              DevOps Engineer.
            </p>
          </div>
        </div>

        {/* 1 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-computer"></i>
            <h2>1. Computer Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Computer Basics
Operating Systems
CPU & Memory
Files & Directories
Processes
Programs
System Resources
Environment Variables
Networking Basics
Command Line`}</pre>
          </div>
        </div>

        {/* 2 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>2. Linux Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Linux
Ubuntu
CentOS
File System
Directories
Users
Groups
Permissions
Processes
Services
Package Management
Environment Variables
Shell
Terminal`}</pre>
          </div>
        </div>

        {/* 3 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>3. Linux Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>{`pwd
ls
cd
mkdir
touch
cp
mv
rm
cat
less
head
tail
grep
find
locate
chmod
chown
ps
top
kill
df
du
free`}</pre>
          </div>
        </div>

        {/* 4 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user"></i>
            <h2>4. Linux Users & Permissions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Users
Groups
useradd
usermod
userdel
passwd
groups
su
sudo
chmod
chown
chgrp
Read Permission
Write Permission
Execute Permission
File Ownership`}</pre>
          </div>
        </div>

        {/* 5 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-network-wired"></i>
            <h2>5. Networking Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Networking Basics
IP Address
IPv4
IPv6
MAC Address
Port
Protocol
TCP
UDP
HTTP
HTTPS
DNS
DHCP
SSH
FTP
SMTP
Firewall
Proxy`}</pre>
          </div>
        </div>

        {/* 6 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>6. DNS & Domain</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DNS
Domain
Nameserver
A Record
AAAA Record
CNAME
MX Record
TXT Record
NS Record
DNS Resolution
DNS Cache
TTL
Subdomain
Reverse DNS`}</pre>
          </div>
        </div>

        {/* 7 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>7. Git</h2>
          </div>

          <div className="html-code-box">
            <pre>{`git init
git clone
git status
git add
git commit
git push
git pull
git fetch
git branch
git checkout
git switch
git merge
git rebase
git stash
git log
git diff
git reset
git revert`}</pre>
          </div>
        </div>

        {/* 8 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-github"></i>
            <h2>8. GitHub</h2>
          </div>

          <div className="html-code-box">
            <pre>{`GitHub
Repositories
Branches
Pull Requests
Issues
Code Review
Merge
Merge Conflicts
GitHub Actions
Secrets
Webhooks
GitHub Pages
Repository Management
README`}</pre>
          </div>
        </div>

        {/* 9 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>9. Shell Scripting</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Bash
Shell Script
Variables
Arguments
if
else
for
while
case
Functions
Exit Codes
Input
Output
Command Substitution
Pipes
Redirection
Cron Scripts`}</pre>
          </div>
        </div>

        {/* 10 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-python"></i>
            <h2>10. Programming for DevOps</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Python Basics
Variables
Data Types
Conditions
Loops
Functions
Files
JSON
APIs
Requests
Automation Scripts
System Scripts
Error Handling
Modules
Virtual Environment`}</pre>
          </div>
        </div>

        {/* 11 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cubes"></i>
            <h2>11. Build Tools</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Build Process
Dependencies
Package Management
npm
Maven
Gradle
pip
requirements.txt
Build Artifacts
Version Management
Build Automation
Application Packaging`}</pre>
          </div>
        </div>

        {/* 12 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>12. Artifact Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Artifacts
Packages
Docker Images
Versioning
Artifact Repository
Nexus
JFrog Artifactory
Package Storage
Build Artifacts
Release Artifacts
Artifact Retention`}</pre>
          </div>
        </div>

        {/* 13 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-docker"></i>
            <h2>13. Docker Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Docker
Images
Containers
Dockerfile
Docker Engine
Docker Registry
Docker Hub
Volumes
Networks
Ports
Environment Variables
Container Lifecycle`}</pre>
          </div>
        </div>

        {/* 14 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-docker"></i>
            <h2>14. Docker Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>{`docker pull
docker build
docker run
docker ps
docker ps -a
docker stop
docker start
docker restart
docker rm
docker rmi
docker logs
docker exec
docker inspect
docker images
docker push`}</pre>
          </div>
        </div>

        {/* 15 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>15. Docker Compose</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Docker Compose
docker-compose.yml
Services
Networks
Volumes
Environment Variables
depends_on
build
ports
restart
docker compose up
docker compose down
docker compose logs`}</pre>
          </div>
        </div>

        {/* 16 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>16. CI/CD Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CI
CD
Continuous Integration
Continuous Delivery
Continuous Deployment
Build
Test
Package
Deploy
Pipeline
Automation
Release
Deployment Strategy`}</pre>
          </div>
        </div>

        {/* 17 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-jenkins"></i>
            <h2>17. Jenkins</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Jenkins
Installation
Jenkins Server
Jobs
Build
Pipeline
Jenkinsfile
Stages
Steps
Agents
Plugins
Credentials
Webhooks
Git Integration
Docker Integration
Automated Deployment`}</pre>
          </div>
        </div>

        {/* 18 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-github"></i>
            <h2>18. GitHub Actions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`GitHub Actions
Workflow
YAML
Events
Jobs
Steps
Runners
Actions
Secrets
Environment Variables
Build
Test
Deploy
Artifacts
CI/CD Pipeline`}</pre>
          </div>
        </div>

        {/* 19 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>19. Cloud Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Cloud Computing
IaaS
PaaS
SaaS
Regions
Availability Zones
Virtual Machines
Storage
Databases
Networking
Security
IAM
Load Balancing
Auto Scaling`}</pre>
          </div>
        </div>

        {/* 20 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-aws"></i>
            <h2>20. AWS Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`AWS
Regions
Availability Zones
IAM
EC2
S3
VPC
RDS
CloudWatch
Route 53
Load Balancer
Auto Scaling
ECR
ECS
Lambda`}</pre>
          </div>
        </div>

        {/* 21 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>21. AWS EC2</h2>
          </div>

          <div className="html-code-box">
            <pre>{`EC2
Instances
AMI
Instance Types
Security Groups
Key Pairs
Elastic IP
EBS
SSH
User Data
Instance Monitoring
Auto Scaling
Load Balancer`}</pre>
          </div>
        </div>

        {/* 22 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-hard-drive"></i>
            <h2>22. AWS Storage</h2>
          </div>

          <div className="html-code-box">
            <pre>{`S3
Buckets
Objects
Bucket Policies
IAM Permissions
Versioning
Lifecycle Rules
Encryption
Static Website Hosting
CloudFront
EBS
EFS`}</pre>
          </div>
        </div>

        {/* 23 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-network-wired"></i>
            <h2>23. AWS Networking</h2>
          </div>

          <div className="html-code-box">
            <pre>{`VPC
Subnets
Public Subnet
Private Subnet
Route Tables
Internet Gateway
NAT Gateway
Security Groups
Network ACL
Load Balancer
VPC Peering
DNS`}</pre>
          </div>
        </div>

        {/* 24 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>24. Cloud Databases</h2>
          </div>

          <div className="html-code-box">
            <pre>{`RDS
MySQL
PostgreSQL
SQL Server
Aurora
Database Backups
Snapshots
Read Replicas
Multi-AZ
MongoDB Atlas
Database Security
Connection Management`}</pre>
          </div>
        </div>

        {/* 25 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>25. Infrastructure as Code</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Infrastructure as Code
Terraform
Providers
Resources
Variables
Outputs
Modules
State
terraform init
terraform plan
terraform apply
terraform destroy
Remote State`}</pre>
          </div>
        </div>

        {/* 26 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>26. Terraform</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Terraform
Configuration
Providers
Resources
Data Sources
Variables
Locals
Outputs
Modules
State File
Backend
Workspace
Plan
Apply
Destroy`}</pre>
          </div>
        </div>

        {/* 27 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-dharmachakra"></i>
            <h2>27. Kubernetes Fundamentals</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Kubernetes
Cluster
Node
Pod
Container
Deployment
Service
Namespace
ConfigMap
Secret
Ingress
Volume
ReplicaSet
Labels
Selectors`}</pre>
          </div>
        </div>

        {/* 28 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>28. Kubernetes Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>{`kubectl get pods
kubectl get nodes
kubectl get services
kubectl get deployments
kubectl apply
kubectl delete
kubectl describe
kubectl logs
kubectl exec
kubectl scale
kubectl rollout
kubectl config
kubectl create`}</pre>
          </div>
        </div>

        {/* 29 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>29. Kubernetes Architecture</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Control Plane
API Server
Scheduler
Controller Manager
etcd
Worker Node
Kubelet
Kube Proxy
Container Runtime
Pods
Services
Ingress
Deployments`}</pre>
          </div>
        </div>

        {/* 30 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-network-wired"></i>
            <h2>30. Kubernetes Networking</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Pod Network
Service Network
ClusterIP
NodePort
LoadBalancer
Ingress
DNS
Network Policies
Service Discovery
Internal Communication
External Communication`}</pre>
          </div>
        </div>

        {/* 31 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>31. Kubernetes Security</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Secrets
ConfigMaps
RBAC
Roles
ClusterRoles
Service Accounts
Network Policies
Security Context
Pod Security
TLS
Certificates
Authentication
Authorization`}</pre>
          </div>
        </div>

        {/* 32 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-chart-line"></i>
            <h2>32. Monitoring</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Monitoring
Metrics
CPU Usage
Memory Usage
Disk Usage
Network Usage
Application Health
Server Health
Alerts
Dashboards
Uptime
Performance Monitoring`}</pre>
          </div>
        </div>

        {/* 33 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-chart-area"></i>
            <h2>33. Prometheus</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Prometheus
Metrics
Targets
Scraping
PromQL
Exporters
Node Exporter
Alerting
Alert Rules
Time Series
Monitoring
Service Discovery`}</pre>
          </div>
        </div>

        {/* 34 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-chart-simple"></i>
            <h2>34. Grafana</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Grafana
Dashboards
Panels
Data Sources
Prometheus
Queries
Variables
Alerts
Metrics
Visualization
Monitoring Dashboard
Application Dashboard`}</pre>
          </div>
        </div>

        {/* 35 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>35. Logging</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Application Logs
System Logs
Access Logs
Error Logs
Log Levels
Log Rotation
Centralized Logging
Log Aggregation
ELK Stack
Elasticsearch
Logstash
Kibana`}</pre>
          </div>
        </div>

        {/* 36 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>36. DevSecOps</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DevSecOps
Security in CI/CD
Dependency Scanning
Container Scanning
Code Scanning
Secret Scanning
SAST
DAST
Vulnerability Scanning
Security Testing
Security Policies
Compliance`}</pre>
          </div>
        </div>

        {/* 37 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>37. Secrets Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Secrets
API Keys
Passwords
Tokens
Environment Variables
GitHub Secrets
AWS Secrets Manager
Parameter Store
Vault
Secret Rotation
Access Control
Encryption`}</pre>
          </div>
        </div>

        {/* 38 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-commit"></i>
            <h2>38. Deployment Strategies</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Rolling Deployment
Blue Green Deployment
Canary Deployment
Recreate Deployment
Zero Downtime
Rollback
Version Management
Release Management
Health Checks
Traffic Management`}</pre>
          </div>
        </div>

        {/* 39 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>39. Backup & Disaster Recovery</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Backup
Restore
Snapshots
Database Backup
Application Backup
Disaster Recovery
RTO
RPO
Failover
High Availability
Replication
Recovery Plan`}</pre>
          </div>
        </div>

        {/* 40 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gauge-high"></i>
            <h2>40. Performance Optimization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Performance
CPU Optimization
Memory Optimization
Disk Optimization
Network Optimization
Caching
CDN
Load Balancing
Auto Scaling
Database Optimization
Container Optimization
Application Optimization`}</pre>
          </div>
        </div>

        {/* 41 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>41. High Availability</h2>
          </div>

          <div className="html-code-box">
            <pre>{`High Availability
Fault Tolerance
Redundancy
Load Balancer
Auto Scaling
Multiple Instances
Multiple Availability Zones
Health Checks
Failover
Replication
Disaster Recovery`}</pre>
          </div>
        </div>

        {/* 42 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-left-right"></i>
            <h2>42. Scaling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Scaling
Vertical Scaling
Horizontal Scaling
Auto Scaling
Load Balancing
Container Scaling
Kubernetes Scaling
Database Scaling
Read Replicas
Caching
CDN`}</pre>
          </div>
        </div>

        {/* 43 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>43. GitOps</h2>
          </div>

          <div className="html-code-box">
            <pre>{`GitOps
Infrastructure as Code
Git Repository
Declarative Configuration
Automated Deployment
Pull Requests
Environment Management
Argo CD
Flux
Kubernetes
Continuous Delivery`}</pre>
          </div>
        </div>

        {/* 44 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-robot"></i>
            <h2>44. DevOps Automation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Automation
Shell Scripts
Python Scripts
CI/CD
Infrastructure Automation
Configuration Management
Deployment Automation
Testing Automation
Monitoring Automation
Backup Automation
Cloud Automation`}</pre>
          </div>
        </div>

        {/* 45 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>45. Configuration Management</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Configuration Management
Ansible
Playbooks
Inventory
Roles
Tasks
Variables
Handlers
Templates
Ansible Vault
Remote Configuration
Server Automation`}</pre>
          </div>
        </div>

        {/* 46 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud"></i>
            <h2>46. Multi-Cloud Basics</h2>
          </div>

          <div className="html-code-box">
            <pre>{`AWS
Azure
Google Cloud
Cloud Networking
Cloud Storage
Cloud Compute
Cloud Databases
IAM
Security
Monitoring
Cost Management
Multi-Cloud Architecture`}</pre>
          </div>
        </div>

        {/* 47 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-money-bill"></i>
            <h2>47. Cloud Cost Optimization</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Cloud Costs
Resource Monitoring
Right Sizing
Auto Scaling
Reserved Instances
Storage Optimization
Unused Resources
Cost Alerts
Budgets
Cost Reports
Resource Tagging`}</pre>
          </div>
        </div>

        {/* 48 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>48. DevOps Projects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Deploy a Web Application
Dockerize Application
CI/CD Pipeline
Jenkins Pipeline
GitHub Actions Pipeline
AWS Deployment
Terraform Infrastructure
Kubernetes Deployment
Monitoring Dashboard
Centralized Logging
Automated Backup
Complete DevOps Pipeline`}</pre>
          </div>
        </div>

        {/* 49 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-briefcase"></i>
            <h2>49. DevOps Interview Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Linux Questions
Networking Questions
Git Questions
Docker Questions
Kubernetes Questions
Jenkins Questions
CI/CD Questions
AWS Questions
Terraform Questions
Ansible Questions
Monitoring Questions
Security Questions
Scenario Based Questions
Troubleshooting Questions`}</pre>
          </div>
        </div>

        {/* 50 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-tie"></i>
            <h2>50. DevOps Job Preparation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DevOps Resume
GitHub Projects
Cloud Projects
CI/CD Projects
Docker Projects
Kubernetes Projects
Terraform Projects
Monitoring Projects
Portfolio
LinkedIn
Resume
Mock Interviews
Technical Interviews
Scenario Based Practice`}</pre>
          </div>
        </div>

        {/* 51 */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-flag-checkered"></i>
            <h2>51. Complete DevOps Roadmap</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Linux
Networking
Git
GitHub
Shell Scripting
Python
Build Tools
Docker
Docker Compose
CI/CD
Jenkins
GitHub Actions
AWS
Cloud Computing
Terraform
Ansible
Kubernetes
Prometheus
Grafana
ELK
Monitoring
Logging
DevSecOps
Secrets Management
GitOps
Automation
Security
Scaling
High Availability
Disaster Recovery
Cloud Cost Optimization
Real-World Projects
Portfolio
Resume
Interview Preparation
Job Preparation`}</pre>
          </div>
        </div>

      </div>
    </section>
        
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>

      {/* model */}


    </div>
  )}

</div>

     {/* second row mern */}
    </section>
    </div>
  )
}

export default Roadmaps
