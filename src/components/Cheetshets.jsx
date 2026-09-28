import React from 'react'
import {data} from "../components/data/catagories";
import {showdata} from "../components/data/catagories";

const Cheetshets = () => {
  return (
    <div className=''>
       <section className="cheatsheets py-5" id="cheetsheets" >
      <div className="container" id="cheetsheets-html-css-js-bootstrap-tailwind-mern-mean-django-python-java-springboot-sql-ts">

      <div className="project-heading text-center mb-4 mb-md-5">

          <span className="project-badge right-animation">
            <i className="fa-solid fa-code"></i>
            Cheet Sheets
          </span>

          <h2>
            Quick Cheat Sheets
          </h2>

          <p>
            Quick cheat sheets for HTML, CSS, JS, Bootstrap, Tailwind, MERN, MEAN, Django, Python, Java, Spring Boot, SQL, TypeScript
          </p>

        </div>


        <div className="cheatsheet-scroll">

          {/* ROW 1 */}
          <div className="cheatsheet-row">

            {/* Card 1 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#htmlCheatsheet">
              <img
                src={data[0].img}
                alt={data[0].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[0].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>



            <div style={{ marginTop: "150px"}}
  className="modal fade "
  id="htmlCheatsheet"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content ">

      <div className="modal-header">
        <h5 className="modal-title" id="htmlCheatsheet">
          HTML Cheat Sheet
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}

   <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-brands fa-html5"></i>
          </div>

          <div className="html-heading-title">
            <h1>HTML Cheat Sheet</h1>
            <p>
              Quick reference for HTML tags, attributes, forms and semantic
              elements.
            </p>
          </div>
        </div>


        {/* ================= BASIC STRUCTURE ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>1. Basic HTML Structure</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>

<body>

    <h1>Hello World</h1>

</body>

</html>`}
            </pre>
          </div>

        </div>


        {/* ================= HEADINGS ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-heading"></i>
            <h2>2. Headings</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
            </pre>
          </div>

        </div>


        {/* ================= TEXT ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>3. Text Formatting</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<p>Paragraph</p>

<strong>Bold Text</strong>
<b>Bold Text</b>

<em>Italic Text</em>
<i>Italic Text</i>

<u>Underline</u>

<mark>Highlighted Text</mark>

<small>Small Text</small>`}
            </pre>
          </div>

        </div>


        {/* ================= LINKS ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>4. Links</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<a href="https://example.com">
    Visit Website
</a>

<a href="https://example.com" target="_blank">
    Open in New Tab
</a>`}
            </pre>
          </div>

        </div>


        {/* ================= IMAGES ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-regular fa-image"></i>
            <h2>5. Images</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<img
    src="image.jpg"
    alt="Example Image"
    width="300"
>`}
            </pre>
          </div>

        </div>


        {/* ================= LISTS ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>6. Lists</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<!-- Unordered List -->

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>


<!-- Ordered List -->

<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>`}
            </pre>
          </div>

        </div>


        {/* ================= BUTTON ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>7. Button</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<button>Click Me</button>`}
            </pre>
          </div>

        </div>


        {/* ================= DIV SPAN ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>8. Div & Span</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div>
    Content inside div
</div>

<span>
    Inline content
</span>`}
            </pre>
          </div>

        </div>


        {/* ================= FORM ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>9. Forms</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<form>

    <label>Name:</label>
    <input type="text">

    <label>Email:</label>
    <input type="email">

    <label>Password:</label>
    <input type="password">

    <button type="submit">
        Submit
    </button>

</form>`}
            </pre>
          </div>

        </div>


        {/* ================= INPUT TYPES ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-keyboard"></i>
            <h2>10. Input Types</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<input type="text">

<input type="email">

<input type="password">

<input type="number">

<input type="date">

<input type="file">

<input type="checkbox">

<input type="radio">

<input type="submit">

<input type="reset">`}
            </pre>
          </div>

        </div>


        {/* ================= TABLE ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>11. Table</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<table>

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Vamsi</td>
        <td>22</td>
    </tr>

</table>`}
            </pre>
          </div>

        </div>


        {/* ================= SEMANTIC ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>12. Semantic HTML</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<header>
    Header
</header>

<nav>
    Navigation
</nav>

<main>
    Main Content
</main>

<section>
    Section
</section>

<article>
    Article
</article>

<aside>
    Sidebar
</aside>

<footer>
    Footer
</footer>`}
            </pre>
          </div>

        </div>


        {/* ================= HTML5 ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-brands fa-html5"></i>
            <h2>13. Useful HTML5 Tags</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<audio controls></audio>

<video controls></video>

<iframe src=""></iframe>

<figure>

    <img src="image.jpg" alt="Image">

    <figcaption>
        Image Caption
    </figcaption>

</figure>`}
            </pre>
          </div>

        </div>


        {/* ================= COMMENTS ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-comment"></i>
            <h2>14. Comments</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<!-- This is an HTML comment -->`}
            </pre>
          </div>

        </div>


        {/* ================= ATTRIBUTES ================= */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-tags"></i>
            <h2>15. Common Attributes</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`id="uniqueId"

class="container"

src="image.jpg"

href="page.html"

alt="Image description"

title="Tooltip"

placeholder="Enter your name"

required

disabled

readonly`}
            </pre>
          </div>

        </div>

      </div>
    </section>
        {/* content */}
      </div>

    </div>
  </div>
</div>


            {/* Card 2 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#cssModal">
              <img
                src={data[1].img}
                alt={data[1].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[1].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>

            {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="cssModal"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="cssModalLabel">
          CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
 <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-brands fa-css3-alt"></i>
          </div>

          <div className="html-heading-title">
            <h1>CSS Cheat Sheet</h1>
            <p>
              Quick reference for CSS selectors, properties, layouts,
              colors and responsive design.
            </p>
          </div>

        </div>


        {/* 1. CSS Syntax */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>1. CSS Syntax</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`selector {
    property: value;
}

p {
    color: blue;
    font-size: 16px;
}`}
            </pre>
          </div>

        </div>


        {/* 2. Selectors */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>2. CSS Selectors</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`/* Element Selector */
p {
    color: red;
}

/* Class Selector */
.box {
    padding: 20px;
}

/* ID Selector */
#header {
    background: black;
}

/* Universal Selector */
* {
    margin: 0;
}

/* Multiple Selector */
h1, h2, p {
    color: blue;
}`}
            </pre>
          </div>

        </div>


        {/* 3. Colors */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-palette"></i>
            <h2>3. Colors</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`color: red;

color: #1687f8;

color: rgb(22, 135, 248);

color: rgba(22, 135, 248, 0.5);

color: hsl(210, 94%, 53%);

background-color: #ffffff;`}
            </pre>
          </div>

        </div>


        {/* 4. Text */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>4. Text Properties</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`color: #102a56;

font-size: 18px;

font-family: Arial, sans-serif;

font-weight: 700;

font-style: italic;

text-align: center;

text-decoration: underline;

text-transform: uppercase;

line-height: 1.6;

letter-spacing: 1px;`}
            </pre>
          </div>

        </div>


        {/* 5. Background */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-fill-drip"></i>
            <h2>5. Background</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`background-color: #ffffff;

background-image: url("image.jpg");

background-size: cover;

background-position: center;

background-repeat: no-repeat;

background: linear-gradient(
    90deg,
    #6336e8,
    #1687f8
);`}
            </pre>
          </div>

        </div>


        {/* 6. Box Model */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>6. Box Model</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`width: 300px;

height: 200px;

padding: 20px;

margin: 20px;

border: 1px solid #ddd;

box-sizing: border-box;`}
            </pre>
          </div>

        </div>


        {/* 7. Border */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-border-all"></i>
            <h2>7. Border & Radius</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`border: 1px solid #dce8f5;

border-width: 2px;

border-style: solid;

border-color: blue;

border-radius: 10px;

border-top: 1px solid black;

border-bottom: 2px solid gray;`}
            </pre>
          </div>

        </div>


        {/* 8. Flexbox */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-left-right"></i>
            <h2>8. Flexbox</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`.container {
    display: flex;

    flex-direction: row;

    justify-content: center;

    align-items: center;

    gap: 20px;

    flex-wrap: wrap;
}

.item {
    flex: 1;
}`}
            </pre>
          </div>

        </div>


        {/* 9. Grid */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-table-cells"></i>
            <h2>9. CSS Grid</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`.container {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.item {
    padding: 20px;
}`}
            </pre>
          </div>

        </div>


        {/* 10. Position */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-location-dot"></i>
            <h2>10. Position</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`position: static;

position: relative;

position: absolute;

position: fixed;

position: sticky;

top: 0;

right: 0;

bottom: 0;

left: 0;

z-index: 1000;`}
            </pre>
          </div>

        </div>


        {/* 11. Display */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-display"></i>
            <h2>11. Display</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`display: block;

display: inline;

display: inline-block;

display: flex;

display: grid;

display: none;`}
            </pre>
          </div>

        </div>


        {/* 12. Width Height */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-ruler-combined"></i>
            <h2>12. Width & Height</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`width: 100%;

width: 300px;

max-width: 1200px;

min-width: 200px;

height: 200px;

min-height: 100px;

max-height: 500px;`}
            </pre>
          </div>

        </div>


        {/* 13. Shadows */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-sun"></i>
            <h2>13. Shadows</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.1);

text-shadow:
    2px 2px 5px gray;`}
            </pre>
          </div>

        </div>


        {/* 14. Transitions */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <h2>14. Transitions</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`.box {
    transition: all 0.3s ease;
}

.box:hover {
    transform: translateY(-5px);
    background: #1687f8;
}`}
            </pre>
          </div>

        </div>


        {/* 15. Transform */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-rotate"></i>
            <h2>15. Transform</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`transform: translateX(20px);

transform: translateY(20px);

transform: scale(1.1);

transform: rotate(45deg);

transform: skew(10deg);`}
            </pre>
          </div>

        </div>


        {/* 16. Overflow */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-up-down-left-right"></i>
            <h2>16. Overflow</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`overflow: visible;

overflow: hidden;

overflow: scroll;

overflow: auto;

overflow-x: auto;

overflow-y: hidden;`}
            </pre>
          </div>

        </div>


        {/* 17. Responsive Design */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-mobile-screen"></i>
            <h2>17. Responsive Design</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`@media (max-width: 768px) {

    .container {
        width: 100%;
        padding: 15px;
    }

    .title {
        font-size: 24px;
    }

}`}
            </pre>
          </div>

        </div>


        {/* 18. CSS Variables */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-sliders"></i>
            <h2>18. CSS Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`:root {
    --primary: #1687f8;
    --text: #102a56;
    --background: #ffffff;
}

.button {
    background: var(--primary);
    color: var(--background);
}`}
            </pre>
          </div>

        </div>


        {/* 19. Pseudo Classes */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>19. Pseudo Classes</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`a:hover {
    color: blue;
}

input:focus {
    border-color: #1687f8;
}

button:active {
    transform: scale(0.98);
}

input:disabled {
    opacity: 0.5;
}

li:first-child {
    color: red;
}

li:last-child {
    color: blue;
}`}
            </pre>
          </div>

        </div>


        {/* 20. Comments */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-comment"></i>
            <h2>20. CSS Comments</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`/* This is a CSS comment */

/*
   Multiple line
   CSS comment
*/`}
            </pre>
          </div>

        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

            {/* Card 3 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#javascript">
              <img
                src={data[2].img}
                alt={data[2].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[2].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>

              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="javascript"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="javaScript">
        JavaScript  CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}

 <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-brands fa-js"></i>
          </div>

          <div className="html-heading-title">
            <h1>JavaScript Cheat Sheet</h1>
            <p>
              Quick reference for JavaScript syntax, variables, functions,
              arrays, objects, DOM and events.
            </p>
          </div>

        </div>


        {/* 1. Variables */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>1. Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`let name = "Vamsi";

const age = 22;

var city = "Hyderabad";

let isDeveloper = true;`}
            </pre>
          </div>

        </div>


        {/* 2. Data Types */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>2. Data Types</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`let name = "Vamsi";       // String

let age = 22;             // Number

let active = true;        // Boolean

let value = null;         // Null

let data;                 // Undefined

let numbers = [1, 2, 3];  // Array

let user = {
    name: "Vamsi",
    age: 22
};                        // Object`}
            </pre>
          </div>

        </div>


        {/* 3. Operators */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>3. Operators</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`// Arithmetic
+   -   *   /   %   **

// Comparison
==   ===   !=   !==
>    <    >=   <=

// Logical
&&   ||   !

// Assignment
=    +=   -=   *=   /=

// Increment / Decrement
++
--`}
            </pre>
          </div>

        </div>


        {/* 4. If Else */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>4. If / Else</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`let age = 22;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}`}
            </pre>
          </div>

        </div>


        {/* 5. Switch */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-shuffle"></i>
            <h2>5. Switch Statement</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}`}
            </pre>
          </div>

        </div>


        {/* 6. Loops */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>6. Loops</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`// For Loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// While Loop

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}


// For Of

for (let item of items) {
    console.log(item);
}`}
            </pre>
          </div>

        </div>


        {/* 7. Functions */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>7. Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`// Normal Function

function greet() {
    console.log("Hello");
}

greet();


// Function with Parameters

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Arrow Function

const multiply = (a, b) => {
    return a * b;
};`}
            </pre>
          </div>

        </div>


        {/* 8. Arrays */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>8. Arrays</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const fruits = [
    "Apple",
    "Banana",
    "Orange"
];

console.log(fruits[0]);

fruits.push("Mango");

fruits.pop();

fruits.shift();

fruits.unshift("Grapes");

console.log(fruits.length);`}
            </pre>
          </div>

        </div>


        {/* 9. Array Methods */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-list-check"></i>
            <h2>9. Array Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const numbers = [1, 2, 3, 4, 5];

numbers.map(item => item * 2);

numbers.filter(item => item > 2);

numbers.find(item => item === 3);

numbers.includes(3);

numbers.forEach(item => {
    console.log(item);
});

numbers.reduce((sum, item) => {
    return sum + item;
}, 0);`}
            </pre>
          </div>

        </div>


        {/* 10. Objects */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>10. Objects</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const user = {
    name: "Vamsi",
    age: 22,
    role: "Developer"
};

console.log(user.name);

console.log(user["age"]);

user.city = "Hyderabad";

delete user.role;`}
            </pre>
          </div>

        </div>


        {/* 11. String Methods */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>11. String Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`let text = "Hello JavaScript";

text.length;

text.toUpperCase();

text.toLowerCase();

text.includes("JavaScript");

text.indexOf("Java");

text.slice(0, 5);

text.replace("Hello", "Hi");

text.trim();`}
            </pre>
          </div>

        </div>


        {/* 12. DOM Selection */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-window-maximize"></i>
            <h2>12. DOM Selection</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`document.getElementById("title");

document.getElementsByClassName("box");

document.getElementsByTagName("p");

document.querySelector(".box");

document.querySelector("#title");

document.querySelectorAll(".item");`}
            </pre>
          </div>

        </div>


        {/* 13. DOM Manipulation */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-pen-to-square"></i>
            <h2>13. DOM Manipulation</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const title = document.querySelector("#title");

title.textContent = "Hello";

title.innerHTML = "<b>Hello</b>";

title.style.color = "blue";

title.classList.add("active");

title.classList.remove("active");

title.classList.toggle("active");`}
            </pre>
          </div>

        </div>


        {/* 14. Events */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>14. Events</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("Button clicked");
});


element.addEventListener("mouseover", () => {
    console.log("Mouse over");
});


input.addEventListener("input", (event) => {
    console.log(event.target.value);
});`}
            </pre>
          </div>

        </div>


        {/* 15. Template Literals */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-quote-left"></i>
            <h2>15. Template Literals</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const name = "Vamsi";
const age = 22;

const message =
    \`My name is \${name}
and I am \${age} years old.\`;

console.log(message);`}
            </pre>
          </div>

        </div>


        {/* 16. Destructuring */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>16. Destructuring</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const user = {
    name: "Vamsi",
    age: 22
};

const { name, age } = user;


const numbers = [10, 20];

const [first, second] = numbers;`}
            </pre>
          </div>

        </div>


        {/* 17. Spread Operator */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-expand"></i>
            <h2>17. Spread Operator</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const first = [1, 2, 3];

const second = [4, 5, 6];

const combined = [
    ...first,
    ...second
];


const user = {
    name: "Vamsi"
};

const updatedUser = {
    ...user,
    age: 22
};`}
            </pre>
          </div>

        </div>


        {/* 18. Destructuring Functions */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>18. Default Parameters</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`function greet(name = "Developer") {
    console.log("Hello " + name);
}

greet();

greet("Vamsi");`}
            </pre>
          </div>

        </div>


        {/* 19. Promises */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-clock"></i>
            <h2>19. Promises</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Error");
    }

});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });`}
            </pre>
          </div>

        </div>


        {/* 20. Async Await */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>20. Async / Await</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`async function getData() {

    try {

        const response =
            await fetch("https://api.example.com/data");

        const data =
            await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}`}
            </pre>
          </div>

        </div>


        {/* 21. JSON */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>21. JSON</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const user = {
    name: "Vamsi",
    age: 22
};

const jsonData =
    JSON.stringify(user);

const objectData =
    JSON.parse(jsonData);`}
            </pre>
          </div>

        </div>


        {/* 22. Local Storage */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hard-drive"></i>
            <h2>22. Local Storage</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`localStorage.setItem(
    "name",
    "Vamsi"
);

const name =
    localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.clear();`}
            </pre>
          </div>

        </div>


        {/* 23. Console */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>23. Console Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`console.log("Hello");

console.error("Error");

console.warn("Warning");

console.table(users);

console.clear();`}
            </pre>
          </div>

        </div>


        {/* 24. Comments */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-comment"></i>
            <h2>24. Comments</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`// Single line comment

/*
   Multi-line
   JavaScript comment
*/`}
            </pre>
          </div>

        </div>

      </div>
    </section>
        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}


            {/* Card 4 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#bootstrap">
              <img
                src={data[3].img}
                alt={data[3].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[3].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="bootstrap"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         BOOTSTRAP CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}

   <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-brands fa-bootstrap"></i>
          </div>

          <div className="html-heading-title">
            <h1>Bootstrap Cheat Sheet</h1>
            <p>
              Quick reference for Bootstrap grid, utilities, components,
              buttons, forms and responsive design.
            </p>
          </div>

        </div>


        {/* 1. Container */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>1. Containers</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="container">
    Content
</div>

<div className="container-fluid">
    Full Width Content
</div>

<div className="container-lg">
    Large Container
</div>`}
            </pre>
          </div>

        </div>


        {/* 2. Grid */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-table-cells"></i>
            <h2>2. Grid System</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="container">
    <div className="row">

        <div className="col">
            Column 1
        </div>

        <div className="col">
            Column 2
        </div>

    </div>
</div>`}
            </pre>
          </div>

        </div>


        {/* 3. Responsive Columns */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-mobile-screen"></i>
            <h2>3. Responsive Columns</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="col-12">
    Full Width
</div>

<div className="col-sm-6">
    Tablet Column
</div>

<div className="col-md-4">
    Medium Column
</div>

<div className="col-lg-3">
    Large Column
</div>

<div className="col-xl-2">
    Extra Large Column
</div>`}
            </pre>
          </div>

        </div>


        {/* 4. Typography */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>4. Typography</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<h1 className="h1">Heading</h1>

<p className="lead">
    Lead paragraph
</p>

<p className="text-muted">
    Muted text
</p>

<p className="fw-bold">
    Bold text
</p>

<p className="text-center">
    Center text
</p>

<p className="text-uppercase">
    Uppercase text
</p>`}
            </pre>
          </div>

        </div>


        {/* 5. Colors */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-palette"></i>
            <h2>5. Colors</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="text-primary">
    Primary Text
</div>

<div className="text-success">
    Success Text
</div>

<div className="text-danger">
    Danger Text
</div>

<div className="text-warning">
    Warning Text
</div>

<div className="text-info">
    Info Text
</div>

<div className="bg-primary text-white">
    Primary Background
</div>`}
            </pre>
          </div>

        </div>


        {/* 6. Buttons */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>6. Buttons</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<button className="btn btn-primary">
    Primary
</button>

<button className="btn btn-success">
    Success
</button>

<button className="btn btn-danger">
    Danger
</button>

<button className="btn btn-warning">
    Warning
</button>

<button className="btn btn-outline-primary">
    Outline
</button>

<button className="btn btn-lg btn-primary">
    Large Button
</button>

<button className="btn btn-sm btn-primary">
    Small Button
</button>`}
            </pre>
          </div>

        </div>


        {/* 7. Cards */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-id-card"></i>
            <h2>7. Cards</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="card">

    <div className="card-body">

        <h5 className="card-title">
            Card Title
        </h5>

        <p className="card-text">
            Card content
        </p>

        <button className="btn btn-primary">
            Read More
        </button>

    </div>

</div>`}
            </pre>
          </div>

        </div>


        {/* 8. Navbar */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-bars"></i>
            <h2>8. Navbar</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div className="container">

        <a className="navbar-brand" href="#">
            DevKit
        </a>

        <button
            className="navbar-toggler"
            type="button"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

    </div>

</nav>`}
            </pre>
          </div>

        </div>


        {/* 9. Forms */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>9. Forms</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="mb-3">

    <label className="form-label">
        Email
    </label>

    <input
        type="email"
        className="form-control"
        placeholder="Enter email"
    />

</div>

<div className="mb-3">

    <label className="form-label">
        Password
    </label>

    <input
        type="password"
        className="form-control"
    />

</div>`}
            </pre>
          </div>

        </div>


        {/* 10. Input Group */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-keyboard"></i>
            <h2>10. Input Groups</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="input-group">

    <span className="input-group-text">
        @
    </span>

    <input
        type="text"
        className="form-control"
        placeholder="Username"
    />

</div>`}
            </pre>
          </div>

        </div>


        {/* 11. Alerts */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>11. Alerts</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="alert alert-primary">
    Primary Alert
</div>

<div className="alert alert-success">
    Success Alert
</div>

<div className="alert alert-danger">
    Danger Alert
</div>

<div className="alert alert-warning">
    Warning Alert
</div>

<div className="alert alert-info">
    Info Alert
</div>`}
            </pre>
          </div>

        </div>


        {/* 12. Badges */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-tag"></i>
            <h2>12. Badges</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<span className="badge text-bg-primary">
    Primary
</span>

<span className="badge text-bg-success">
    Success
</span>

<span className="badge text-bg-danger">
    Danger
</span>

<span className="badge text-bg-warning">
    Warning
</span>`}
            </pre>
          </div>

        </div>


        {/* 13. Spacing */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-up-down-left-right"></i>
            <h2>13. Spacing Utilities</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<!-- Margin -->

<div className="m-3">
    Margin All
</div>

<div className="mt-3">
    Margin Top
</div>

<div className="mb-3">
    Margin Bottom
</div>


<!-- Padding -->

<div className="p-3">
    Padding All
</div>

<div className="px-3">
    Padding X
</div>

<div className="py-3">
    Padding Y
</div>`}
            </pre>
          </div>

        </div>


        {/* 14. Flexbox */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-left-right"></i>
            <h2>14. Flexbox Utilities</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="d-flex">

    <div>Item 1</div>

    <div>Item 2</div>

</div>


<div className="d-flex justify-content-center">
    Center
</div>


<div className="d-flex align-items-center">
    Center Vertically
</div>


<div className="d-flex justify-content-between">
    Space Between
</div>


<div className="d-flex gap-3">
    Items
</div>`}
            </pre>
          </div>

        </div>


        {/* 15. Images */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-regular fa-image"></i>
            <h2>15. Images</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<img
    src="image.jpg"
    className="img-fluid"
    alt="Image"
/>


<img
    src="image.jpg"
    className="rounded"
    alt="Image"
/>


<img
    src="image.jpg"
    className="rounded-circle"
    alt="Image"
/>


<img
    src="image.jpg"
    className="img-thumbnail"
    alt="Image"
/>`}
            </pre>
          </div>

        </div>


        {/* 16. Tables */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>16. Tables</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<table className="table">

    <thead>
        <tr>
            <th>Name</th>
            <th>Role</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Vamsi</td>
            <td>Developer</td>
        </tr>
    </tbody>

</table>


<table className="table table-striped">
    ...
</table>


<table className="table table-bordered">
    ...
</table>`}
            </pre>
          </div>

        </div>


        {/* 17. Shadows */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-sun"></i>
            <h2>17. Shadows</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="shadow-sm">
    Small Shadow
</div>

<div className="shadow">
    Normal Shadow
</div>

<div className="shadow-lg">
    Large Shadow
</div>`}
            </pre>
          </div>

        </div>


        {/* 18. Borders */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-border-all"></i>
            <h2>18. Borders</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="border">
    Border
</div>

<div className="border border-primary">
    Primary Border
</div>

<div className="border rounded">
    Rounded Border
</div>

<div className="rounded-pill">
    Pill Shape
</div>`}
            </pre>
          </div>

        </div>


        {/* 19. Display */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-display"></i>
            <h2>19. Display Utilities</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="d-block">
    Block
</div>

<div className="d-inline">
    Inline
</div>

<div className="d-flex">
    Flex
</div>

<div className="d-none">
    Hidden
</div>

<div className="d-md-block">
    Visible from Medium
</div>

<div className="d-lg-none">
    Hidden on Large
</div>`}
            </pre>
          </div>

        </div>


        {/* 20. Responsive Utilities */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <h2>20. Responsive Utilities</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<!-- Responsive Text -->

<h2 className="fs-1 fs-md-2 fs-lg-3">
    Responsive Heading
</h2>


<!-- Responsive Width -->

<div className="w-100">
    Full Width
</div>


<!-- Responsive Flex -->

<div className="d-flex flex-column flex-md-row">
    Responsive Layout
</div>


<!-- Responsive Grid -->

<div className="row">

    <div className="col-12 col-md-6 col-lg-4">
        Responsive Card
    </div>

</div>`}
            </pre>
          </div>

        </div>


        {/* 21. Position */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-location-dot"></i>
            <h2>21. Position Utilities</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="position-relative">
    Parent
</div>

<div className="position-absolute">
    Absolute
</div>

<div className="position-fixed">
    Fixed
</div>

<div className="position-sticky">
    Sticky
</div>

<div className="top-0">
    Top
</div>

<div className="end-0">
    Right
</div>`}
            </pre>
          </div>

        </div>


        {/* 22. Modal */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-window-maximize"></i>
            <h2>22. Modal</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="modal">

    <div className="modal-dialog">

        <div className="modal-content">

            <div className="modal-header">
                <h5 className="modal-title">
                    Modal Title
                </h5>
            </div>

            <div className="modal-body">
                Modal Content
            </div>

        </div>

    </div>

</div>`}
            </pre>
          </div>

        </div>


        {/* 23. Dropdown */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-caret-down"></i>
            <h2>23. Dropdown</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="dropdown">

    <button
        className="btn btn-primary dropdown-toggle"
    >
        Menu
    </button>

    <ul className="dropdown-menu">

        <li>
            <a className="dropdown-item" href="#">
                Home
            </a>
        </li>

        <li>
            <a className="dropdown-item" href="#">
                About
            </a>
        </li>

    </ul>

</div>`}
            </pre>
          </div>

        </div>


        {/* 24. Accordion */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>24. Accordion</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="accordion">

    <div className="accordion-item">

        <h2 className="accordion-header">
            <button className="accordion-button">
                HTML
            </button>
        </h2>

        <div className="accordion-body">
            HTML Content
        </div>

    </div>

</div>`}
            </pre>
          </div>

        </div>


        {/* 25. Spinner */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-spinner"></i>
            <h2>25. Spinners</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="spinner-border">
</div>


<div className="spinner-border text-primary">
</div>


<div className="spinner-grow text-success">
</div>`}
            </pre>
          </div>

        </div>


        {/* 26. Breadcrumb */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-chevron-right"></i>
            <h2>26. Breadcrumb</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<nav>

    <ol className="breadcrumb">

        <li className="breadcrumb-item">
            <a href="#">Home</a>
        </li>

        <li className="breadcrumb-item active">
            Resources
        </li>

    </ol>

</nav>`}
            </pre>
          </div>

        </div>


        {/* 27. Pagination */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>27. Pagination</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<nav>

    <ul className="pagination">

        <li className="page-item">
            <a className="page-link" href="#">
                Previous
            </a>
        </li>

        <li className="page-item active">
            <a className="page-link" href="#">
                1
            </a>
        </li>

        <li className="page-item">
            <a className="page-link" href="#">
                2
            </a>
        </li>

        <li className="page-item">
            <a className="page-link" href="#">
                Next
            </a>
        </li>

    </ul>

</nav>`}
            </pre>
          </div>

        </div>


        {/* 28. Bootstrap Icons */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-icons"></i>
            <h2>28. Bootstrap Icons</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<i className="bi bi-house"></i>

<i className="bi bi-search"></i>

<i className="bi bi-person"></i>

<i className="bi bi-heart"></i>

<i className="bi bi-star"></i>

<i className="bi bi-github"></i>`}
            </pre>
          </div>

        </div>


        {/* 29. Responsive Container */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-expand"></i>
            <h2>29. Responsive Layout</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="container">

    <div className="row g-4">

        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                Card 1
            </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                Card 2
            </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                Card 3
            </div>
        </div>

    </div>

</div>`}
            </pre>
          </div>

        </div>


        {/* 30. Common Utilities */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-toolbox"></i>
            <h2>30. Common Utilities</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`className="text-center"

className="text-start"

className="text-end"

className="fw-bold"

className="rounded"

className="shadow"

className="p-3"

className="m-3"

className="mt-3"

className="mb-3"

className="d-flex"

className="align-items-center"

className="justify-content-center"

className="gap-3"

className="w-100"

className="h-100"`}
            </pre>
          </div>

        </div>

      </div>
    </section>
        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

          <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#jango">
              <img
                src={data[11].img}
                alt={data[11].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[11].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="jango"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         D JANGO CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
   <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-brands fa-python"></i>
          </div>

          <div className="html-heading-title">
            <h1>Django Cheat Sheet</h1>
            <p>
              Quick Django commands, project setup, URLs, views, models,
              templates, forms and commonly used concepts.
            </p>
          </div>
        </div>

        {/* 1. Install Django */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-download"></i>
            <h2>Install Django</h2>
          </div>

          <div className="html-code-box">
            <pre>{`pip install django`}</pre>
          </div>
        </div>

        {/* 2. Check Version */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>Check Django Version</h2>
          </div>

          <div className="html-code-box">
            <pre>{`django-admin --version`}</pre>
          </div>
        </div>

        {/* 3. Create Project */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h2>Create Django Project</h2>
          </div>

          <div className="html-code-box">
            <pre>{`django-admin startproject myproject`}</pre>
          </div>
        </div>

        {/* 4. Move Into Project */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>Move Into Project</h2>
          </div>

          <div className="html-code-box">
            <pre>{`cd myproject`}</pre>
          </div>
        </div>

        {/* 5. Run Server */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>Run Development Server</h2>
          </div>

          <div className="html-code-box">
            <pre>{`python manage.py runserver`}</pre>
          </div>
        </div>

        {/* 6. Create App */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>Create Django App</h2>
          </div>

          <div className="html-code-box">
            <pre>{`python manage.py startapp myapp`}</pre>
          </div>
        </div>

        {/* 7. Project Structure */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>Project Structure</h2>
          </div>

          <div className="html-code-box">
            <pre>{`myproject/
│
├── manage.py
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
└── myapp/
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── views.py
    └── migrations/`}</pre>
          </div>
        </div>

        {/* 8. Register App */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Register App</h2>
          </div>

          <div className="html-code-box">
            <pre>{`# settings.py

INSTALLED_APPS = [
    "myapp",
]`}</pre>
          </div>
        </div>

        {/* 9. Simple View */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye"></i>
            <h2>Simple View</h2>
          </div>

          <div className="html-code-box">
            <pre>{`# views.py

from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello Django")`}</pre>
          </div>
        </div>

        {/* 10. URL Pattern */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>URL Pattern</h2>
          </div>

          <div className="html-code-box">
            <pre>{`# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
]`}</pre>
          </div>
        </div>

        {/* 11. URL Parameters */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>URL Parameters</h2>
          </div>

          <div className="html-code-box">
            <pre>{`path("user/<int:id>/", views.user_detail)`}</pre>
          </div>
        </div>

        {/* 12. Render Template */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>Render Template</h2>
          </div>

          <div className="html-code-box">
            <pre>{`from django.shortcuts import render

def home(request):
    return render(request, "home.html")`}</pre>
          </div>
        </div>

        {/* 13. Template Variable */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Template Variable</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<h1>{{ name }}</h1>`}</pre>
          </div>
        </div>

        {/* 14. Template Context */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Template Context</h2>
          </div>

          <div className="html-code-box">
            <pre>{`def home(request):

    context = {
        "name": "Vamsi",
        "age": 22
    }

    return render(request, "home.html", context)`}</pre>
          </div>
        </div>

        {/* 15. Template If */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>Template If Condition</h2>
          </div>

          <div className="html-code-box">
            <pre>{`{% if user.is_authenticated %}
    <p>Welcome User</p>
{% else %}
    <p>Please Login</p>
{% endif %}`}</pre>
          </div>
        </div>

        {/* 16. Template For Loop */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>Template For Loop</h2>
          </div>

          <div className="html-code-box">
            <pre>{`{% for item in items %}
    <p>{{ item }}</p>
{% endfor %}`}</pre>
          </div>
        </div>

        {/* 17. Template Inheritance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Template Inheritance</h2>
          </div>

          <div className="html-code-box">
            <pre>{`{% extends "base.html" %}

{% block content %}
    <h1>Home Page</h1>
{% endblock %}`}</pre>
          </div>
        </div>

        {/* 18. Static Files */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-image"></i>
            <h2>Static Files</h2>
          </div>

          <div className="html-code-box">
            <pre>{`{% load static %}

<link rel="stylesheet" href="{% static 'css/style.css' %}">

<img src="{% static 'images/logo.png' %}" alt="Logo">`}</pre>
          </div>
        </div>

        {/* 19. Create Model */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Create Model</h2>
          </div>

          <div className="html-code-box">
            <pre>{`from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField()`}</pre>
          </div>
        </div>

        {/* 20. Make Migrations */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>Make Migrations</h2>
          </div>

          <div className="html-code-box">
            <pre>{`python manage.py makemigrations`}</pre>
          </div>
        </div>

        {/* 21. Apply Migrations */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check"></i>
            <h2>Apply Migrations</h2>
          </div>

          <div className="html-code-box">
            <pre>{`python manage.py migrate`}</pre>
          </div>
        </div>

        {/* 22. Admin User */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-shield"></i>
            <h2>Create Superuser</h2>
          </div>

          <div className="html-code-box">
            <pre>{`python manage.py createsuperuser`}</pre>
          </div>
        </div>

        {/* 23. Register Model */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user-gear"></i>
            <h2>Register Model in Admin</h2>
          </div>

          <div className="html-code-box">
            <pre>{`# admin.py

from django.contrib import admin
from .models import Student

admin.site.register(Student)`}</pre>
          </div>
        </div>

        {/* 24. ORM Create */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>Create Database Object</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Student.objects.create(
    name="Vamsi",
    age=22,
    email="vamsi@example.com"
)`}</pre>
          </div>
        </div>

        {/* 25. ORM Get All */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Get All Objects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`students = Student.objects.all()`}</pre>
          </div>
        </div>

        {/* 26. ORM Filter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>Filter Objects</h2>
          </div>

          <div className="html-code-box">
            <pre>{`students = Student.objects.filter(age=22)`}</pre>
          </div>
        </div>

        {/* 27. ORM Get */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>Get Single Object</h2>
          </div>

          <div className="html-code-box">
            <pre>{`student = Student.objects.get(id=1)`}</pre>
          </div>
        </div>

        {/* 28. ORM Update */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>Update Object</h2>
          </div>

          <div className="html-code-box">
            <pre>{`student = Student.objects.get(id=1)

student.name = "Rahul"
student.save()`}</pre>
          </div>
        </div>

        {/* 29. ORM Delete */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Delete Object</h2>
          </div>

          <div className="html-code-box">
            <pre>{`student = Student.objects.get(id=1)

student.delete()`}</pre>
          </div>
        </div>

        {/* 30. Forms */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rectangle-list"></i>
            <h2>Django Form</h2>
          </div>

          <div className="html-code-box">
            <pre>{`from django import forms

class StudentForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()`}</pre>
          </div>
        </div>

        {/* 31. Model Form */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>ModelForm</h2>
          </div>

          <div className="html-code-box">
            <pre>{`from django import forms
from .models import Student

class StudentForm(forms.ModelForm):

    class Meta:
        model = Student
        fields = "__all__"`}</pre>
          </div>
        </div>

        {/* 32. POST Request */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-paper-plane"></i>
            <h2>POST Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`def submit(request):

    if request.method == "POST":
        name = request.POST.get("name")

        print(name)`}</pre>
          </div>
        </div>

        {/* 33. CSRF */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield"></i>
            <h2>CSRF Token</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<form method="POST">

    {% csrf_token %}

    <input type="text" name="name">

    <button type="submit">
        Submit
    </button>

</form>`}</pre>
          </div>
        </div>

        {/* 34. Redirect */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-right"></i>
            <h2>Redirect</h2>
          </div>

          <div className="html-code-box">
            <pre>{`from django.shortcuts import redirect

def home(request):
    return redirect("home")`}</pre>
          </div>
        </div>

        {/* 35. Common Django Commands */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>Common Django Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>{`pip install django

django-admin --version

django-admin startproject project

python manage.py startapp app

python manage.py runserver

python manage.py makemigrations

python manage.py migrate

python manage.py createsuperuser

python manage.py shell`}</pre>
          </div>
        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

          <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#spring">
              <img
                src={showdata[4].img}
                alt={data[4].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[4].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="spring"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         SPRING BOOT CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
 <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-solid fa-leaf"></i>
          </div>

          <div className="html-heading-title">
            <h1>Spring Boot Cheat Sheet</h1>
            <p>
              Quick Spring Boot setup, REST APIs, controllers, services,
              repositories, JPA, database and commonly used annotations.
            </p>
          </div>
        </div>

        {/* 1. Spring Boot Project */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rocket"></i>
            <h2>Create Spring Boot Project</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Create a project using Spring Initializr:

https://start.spring.io/

Select:
- Java
- Maven
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL Driver`}</pre>
          </div>
        </div>

        {/* 2. Maven Run */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>Run Spring Boot Application</h2>
          </div>

          <div className="html-code-box">
            <pre>{`mvn spring-boot:run`}</pre>
          </div>
        </div>

        {/* 3. Main Application */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-play"></i>
            <h2>Main Application</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}</pre>
          </div>
        </div>

        {/* 4. REST Controller */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>REST Controller</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Hello Spring Boot";
    }
}`}</pre>
          </div>
        </div>

        {/* 5. Get Mapping */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-down"></i>
            <h2>GET Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@GetMapping("/users")
public String getUsers() {
    return "All Users";
}`}</pre>
          </div>
        </div>

        {/* 6. Post Mapping */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>POST Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@PostMapping("/users")
public String createUser() {
    return "User Created";
}`}</pre>
          </div>
        </div>

        {/* 7. Put Mapping */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>PUT Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@PutMapping("/users/{id}")
public String updateUser(@PathVariable int id) {
    return "User Updated: " + id;
}`}</pre>
          </div>
        </div>

        {/* 8. Delete Mapping */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>DELETE Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@DeleteMapping("/users/{id}")
public String deleteUser(@PathVariable int id) {
    return "User Deleted: " + id;
}`}</pre>
          </div>
        </div>

        {/* 9. Path Variable */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Path Variable</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@GetMapping("/users/{id}")
public String getUser(@PathVariable int id) {
    return "User ID: " + id;
}`}</pre>
          </div>
        </div>

        {/* 10. Request Param */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>Request Parameter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@GetMapping("/users")
public String getUser(
        @RequestParam String name) {

    return "Hello " + name;
}`}</pre>
          </div>
        </div>

        {/* 11. Request Body */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>Request Body</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@PostMapping("/users")
public User createUser(@RequestBody User user) {
    return user;
}`}</pre>
          </div>
        </div>

        {/* 12. Response Entity */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-reply"></i>
            <h2>ResponseEntity</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@GetMapping("/users")
public ResponseEntity<String> getUsers() {

    return ResponseEntity.ok("Users Found");
}`}</pre>
          </div>
        </div>

        {/* 13. Service */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>Service</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import org.springframework.stereotype.Service;

@Service
public class UserService {

    public String getUser() {
        return "User Data";
    }
}`}</pre>
          </div>
        </div>

        {/* 14. Autowired */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Dependency Injection</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@Service
public class UserService {
}

@RestController
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }
}`}</pre>
          </div>
        </div>

        {/* 15. Repository */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Repository</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
        extends JpaRepository<User, Long> {
}`}</pre>
          </div>
        </div>

        {/* 16. Entity */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>Entity</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
}`}</pre>
          </div>
        </div>

        {/* 17. ID Generation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>Primary Key</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;`}</pre>
          </div>
        </div>

        {/* 18. Database Configuration */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Database Configuration</h2>
          </div>

          <div className="html-code-box">
            <pre>{`# application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`}</pre>
          </div>
        </div>

        {/* 19. Find All */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Find All Records</h2>
          </div>

          <div className="html-code-box">
            <pre>{`List<User> users = userRepository.findAll();`}</pre>
          </div>
        </div>

        {/* 20. Find By ID */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>Find By ID</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Optional<User> user =
        userRepository.findById(id);`}</pre>
          </div>
        </div>

        {/* 21. Save */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-floppy-disk"></i>
            <h2>Save Record</h2>
          </div>

          <div className="html-code-box">
            <pre>{`User user = new User();

user.setName("Vamsi");
user.setEmail("vamsi@example.com");

userRepository.save(user);`}</pre>
          </div>
        </div>

        {/* 22. Delete */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Delete Record</h2>
          </div>

          <div className="html-code-box">
            <pre>{`userRepository.deleteById(id);`}</pre>
          </div>
        </div>

        {/* 23. Custom Query */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>Custom Query</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@Query("SELECT u FROM User u WHERE u.email = :email")
User findByEmail(@Param("email") String email);`}</pre>
          </div>
        </div>

        {/* 24. DTO */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>DTO</h2>
          </div>

          <div className="html-code-box">
            <pre>{`public class UserDTO {

    private String name;
    private String email;

    // Getters and Setters
}`}</pre>
          </div>
        </div>

        {/* 25. Exception Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>Exception Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@ExceptionHandler(Exception.class)
public ResponseEntity<String> handleException(
        Exception e) {

    return ResponseEntity
            .badRequest()
            .body(e.getMessage());
}`}</pre>
          </div>
        </div>

        {/* 26. Global Exception Handler */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield"></i>
            <h2>Global Exception Handler</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(
            Exception e) {

        return ResponseEntity
                .badRequest()
                .body(e.getMessage());
    }
}`}</pre>
          </div>
        </div>

        {/* 27. CORS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>CORS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
}`}</pre>
          </div>
        </div>

        {/* 28. JSON Response */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>JSON Response</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@GetMapping("/user")
public User getUser() {

    return new User(
        1L,
        "Vamsi",
        "vamsi@example.com"
    );
}`}</pre>
          </div>
        </div>

        {/* 29. Application Properties */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gear"></i>
            <h2>Application Properties</h2>
          </div>

          <div className="html-code-box">
            <pre>{`server.port=8080

spring.application.name=myapp

spring.jpa.show-sql=true

spring.jpa.hibernate.ddl-auto=update`}</pre>
          </div>
        </div>

        {/* 30. Common Annotations */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-tags"></i>
            <h2>Common Annotations</h2>
          </div>

          <div className="html-code-box">
            <pre>{`@SpringBootApplication
@RestController
@Controller
@Service
@Repository
@Component

@GetMapping
@PostMapping
@PutMapping
@DeleteMapping

@RequestBody
@PathVariable
@RequestParam

@Entity
@Id
@GeneratedValue

@Autowired
@Value
@Bean`}</pre>
          </div>
        </div>

        {/* 31. Maven Commands */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>Maven Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>{`mvn clean
mvn compile
mvn test
mvn package
mvn install
mvn spring-boot:run`}</pre>
          </div>
        </div>

        {/* 32. Spring Boot Project Structure */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>Project Structure</h2>
          </div>

          <div className="html-code-box">
            <pre>{`src/
 └── main/
     ├── java/
     │   └── com.example.app/
     │       ├── controller/
     │       ├── service/
     │       ├── repository/
     │       ├── model/
     │       └── Application.java
     │
     └── resources/
         ├── application.properties
         └── static/`}</pre>
          </div>
        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}



            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#node">
              <img
                src={data[6].img}
                alt={data[6].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[6].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="node"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
        NODE.js  CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
 <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-brands fa-node-js"></i>
          </div>

          <div className="html-heading-title">
            <h1>Node.js Cheat Sheet</h1>
            <p>
              Quick Node.js commands, modules, file system, HTTP server,
              npm, Express basics and commonly used concepts.
            </p>
          </div>
        </div>

        {/* 1. Check Version */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>Check Node.js Version</h2>
          </div>

          <div className="html-code-box">
            <pre>{`node -v`}</pre>
          </div>
        </div>

        {/* 2. Check npm Version */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>Check npm Version</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm -v`}</pre>
          </div>
        </div>

        {/* 3. Run JavaScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-play"></i>
            <h2>Run JavaScript File</h2>
          </div>

          <div className="html-code-box">
            <pre>{`node app.js`}</pre>
          </div>
        </div>

        {/* 4. Initialize Project */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h2>Initialize Node Project</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm init`}</pre>
          </div>
        </div>

        {/* 5. Initialize Quickly */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>Initialize Quickly</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm init -y`}</pre>
          </div>
        </div>

        {/* 6. Install Package */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-download"></i>
            <h2>Install Package</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm install package-name`}</pre>
          </div>
        </div>

        {/* 7. Install Express */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>Install Express</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm install express`}</pre>
          </div>
        </div>

        {/* 8. Install Dev Dependency */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-wrench"></i>
            <h2>Install Dev Dependency</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm install nodemon --save-dev`}</pre>
          </div>
        </div>

        {/* 9. Remove Package */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Remove Package</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm uninstall package-name`}</pre>
          </div>
        </div>

        {/* 10. Update Package */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>Update Package</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm update package-name`}</pre>
          </div>
        </div>

        {/* 11. Import Module */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-import"></i>
            <h2>Import Module</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const fs = require("fs");`}</pre>
          </div>
        </div>

        {/* 12. ES Module Import */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>ES Module Import</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import fs from "fs";`}</pre>
          </div>
        </div>

        {/* 13. Export */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-share"></i>
            <h2>Export Module</h2>
          </div>

          <div className="html-code-box">
            <pre>{`module.exports = myFunction;`}</pre>
          </div>
        </div>

        {/* 14. ES Module Export */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-share-nodes"></i>
            <h2>ES Module Export</h2>
          </div>

          <div className="html-code-box">
            <pre>{`export default myFunction;`}</pre>
          </div>
        </div>

        {/* 15. File System */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file"></i>
            <h2>File System Module</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const fs = require("fs");`}</pre>
          </div>
        </div>

        {/* 16. Read File */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>Read File</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log(data);
});`}</pre>
          </div>
        </div>

        {/* 17. Write File */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>Write File</h2>
          </div>

          <div className="html-code-box">
            <pre>{`fs.writeFile(
    "data.txt",
    "Hello Node.js",
    (err) => {
        if (err) throw err;
        console.log("File written");
    }
);`}</pre>
          </div>
        </div>

        {/* 18. Append File */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>Append File</h2>
          </div>

          <div className="html-code-box">
            <pre>{`fs.appendFile(
    "data.txt",
    "\\nNew Content",
    (err) => {
        if (err) throw err;
    }
);`}</pre>
          </div>
        </div>

        {/* 19. Delete File */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Delete File</h2>
          </div>

          <div className="html-code-box">
            <pre>{`fs.unlink("data.txt", (err) => {
    if (err) throw err;

    console.log("File deleted");
});`}</pre>
          </div>
        </div>

        {/* 20. Path Module */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder"></i>
            <h2>Path Module</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const path = require("path");

console.log(path.join("folder", "file.txt"));`}</pre>
          </div>
        </div>

        {/* 21. HTTP Server */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>Create HTTP Server</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello Node.js");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running");
});`}</pre>
          </div>
        </div>

        {/* 22. Express App */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Basic Express App</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server running");
});`}</pre>
          </div>
        </div>

        {/* 23. Express GET */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-down"></i>
            <h2>Express GET Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/", (req, res) => {
    res.send("Hello Express");
});`}</pre>
          </div>
        </div>

        {/* 24. Express POST */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-up"></i>
            <h2>Express POST Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.post("/users", (req, res) => {
    res.send("User Created");
});`}</pre>
          </div>
        </div>

        {/* 25. Express PUT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>Express PUT Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.put("/users/:id", (req, res) => {
    res.send("User Updated");
});`}</pre>
          </div>
        </div>

        {/* 26. Express DELETE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Express DELETE Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.delete("/users/:id", (req, res) => {
    res.send("User Deleted");
});`}</pre>
          </div>
        </div>

        {/* 27. Route Parameter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Route Parameter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/users/:id", (req, res) => {

    const id = req.params.id;

    res.send("User ID: " + id);
});`}</pre>
          </div>
        </div>

        {/* 28. Query Parameter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>Query Parameter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/users", (req, res) => {

    const name = req.query.name;

    res.send("Name: " + name);
});`}</pre>
          </div>
        </div>

        {/* 29. JSON Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>JSON Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.use(express.json());`}</pre>
          </div>
        </div>

        {/* 30. Request Body */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>Request Body</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.post("/users", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.json({
        name,
        email
    });
});`}</pre>
          </div>
        </div>

        {/* 31. JSON Response */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-reply"></i>
            <h2>JSON Response</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/api/user", (req, res) => {

    res.json({
        id: 1,
        name: "Vamsi",
        role: "Developer"
    });
});`}</pre>
          </div>
        </div>

        {/* 32. Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const logger = (req, res, next) => {

    console.log(req.method, req.url);

    next();
};

app.use(logger);`}</pre>
          </div>
        </div>

        {/* 33. Environment Variables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gear"></i>
            <h2>Environment Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>{`console.log(process.env.PORT);

const port = process.env.PORT || 3000;

app.listen(port);`}</pre>
          </div>
        </div>

        {/* 34. npm Scripts */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>npm Scripts</h2>
          </div>

          <div className="html-code-box">
            <pre>{`// package.json

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}`}</pre>
          </div>
        </div>

        {/* 35. Common npm Commands */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>Common npm Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm init
npm init -y

npm install package-name
npm install package-name --save-dev

npm uninstall package-name
npm update

npm list
npm outdated

npm start
npm run dev`}</pre>
          </div>
        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}


            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#express">
              <img
                src={data[7].img}
                alt={data[7].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[7].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>

          </div>
  {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="express"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         EXPRESS. Js CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
 <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-solid fa-server"></i>
          </div>

          <div className="html-heading-title">
            <h1>Express.js Cheat Sheet</h1>
            <p>
              Quick Express.js setup, routing, middleware, request,
              response, REST API and error handling concepts.
            </p>
          </div>
        </div>

        {/* 1. Install Express */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-download"></i>
            <h2>Install Express.js</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm install express`}</pre>
          </div>
        </div>

        {/* 2. Import Express */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-import"></i>
            <h2>Import Express</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const express = require("express");`}</pre>
          </div>
        </div>

        {/* 3. Create App */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Create Express App</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const express = require("express");

const app = express();`}</pre>
          </div>
        </div>

        {/* 4. Start Server */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>Start Server</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});`}</pre>
          </div>
        </div>

        {/* 5. Basic Route */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>Basic Route</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/", (req, res) => {
    res.send("Hello Express.js");
});`}</pre>
          </div>
        </div>

        {/* 6. GET Request */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-down"></i>
            <h2>GET Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/users", (req, res) => {
    res.send("All Users");
});`}</pre>
          </div>
        </div>

        {/* 7. POST Request */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-up"></i>
            <h2>POST Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.post("/users", (req, res) => {
    res.send("User Created");
});`}</pre>
          </div>
        </div>

        {/* 8. PUT Request */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>PUT Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.put("/users/:id", (req, res) => {
    res.send("User Updated");
});`}</pre>
          </div>
        </div>

        {/* 9. DELETE Request */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>DELETE Request</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.delete("/users/:id", (req, res) => {
    res.send("User Deleted");
});`}</pre>
          </div>
        </div>

        {/* 10. Route Parameter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Route Parameter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/users/:id", (req, res) => {

    const id = req.params.id;

    res.send("User ID: " + id);
});`}</pre>
          </div>
        </div>

        {/* 11. Query Parameter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>Query Parameter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.get("/search", (req, res) => {

    const keyword = req.query.keyword;

    res.send("Search: " + keyword);
});`}</pre>
          </div>
        </div>

        {/* 12. Request Body */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>Request Body</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.use(express.json());

app.post("/users", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.json({
        name,
        email
    });
});`}</pre>
          </div>
        </div>

        {/* 13. JSON Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>JSON Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.use(express.json());`}</pre>
          </div>
        </div>

        {/* 14. URL Encoded Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>URL Encoded Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.use(express.urlencoded({ extended: true }));`}</pre>
          </div>
        </div>

        {/* 15. Send Response */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-reply"></i>
            <h2>Send Response</h2>
          </div>

          <div className="html-code-box">
            <pre>{`res.send("Response Message");`}</pre>
          </div>
        </div>

        {/* 16. JSON Response */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>JSON Response</h2>
          </div>

          <div className="html-code-box">
            <pre>{`res.json({
    message: "Success",
    status: true
});`}</pre>
          </div>
        </div>

        {/* 17. Status Code */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check-circle"></i>
            <h2>Status Code</h2>
          </div>

          <div className="html-code-box">
            <pre>{`res.status(200).json({
    message: "Success"
});

res.status(404).json({
    message: "Not Found"
});`}</pre>
          </div>
        </div>

        {/* 18. Redirect */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-right"></i>
            <h2>Redirect</h2>
          </div>

          <div className="html-code-box">
            <pre>{`res.redirect("/login");`}</pre>
          </div>
        </div>

        {/* 19. Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const logger = (req, res, next) => {

    console.log(req.method, req.url);

    next();
};

app.use(logger);`}</pre>
          </div>
        </div>

        {/* 20. Route Middleware */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>Route Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const checkAuth = (req, res, next) => {

    console.log("Checking authentication");

    next();
};

app.get("/dashboard", checkAuth, (req, res) => {
    res.send("Dashboard");
});`}</pre>
          </div>
        </div>

        {/* 21. Router */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>Express Router</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("User Home");
});

module.exports = router;`}</pre>
          </div>
        </div>

        {/* 22. Use Router */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Use Router</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const userRouter = require("./routes/users");

app.use("/users", userRouter);`}</pre>
          </div>
        </div>

        {/* 23. Static Files */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder"></i>
            <h2>Serve Static Files</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.use(express.static("public"));`}</pre>
          </div>
        </div>

        {/* 24. Send HTML File */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>Send HTML File</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});`}</pre>
          </div>
        </div>

        {/* 25. Error Handler */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>Error Handling Middleware</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        message: "Something went wrong"
    });
});`}</pre>
          </div>
        </div>

        {/* 26. 404 Handler */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>404 Not Found</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });
});`}</pre>
          </div>
        </div>

        {/* 27. CORS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>CORS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm install cors

const cors = require("cors");

app.use(cors());`}</pre>
          </div>
        </div>

        {/* 28. Environment Variables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gear"></i>
            <h2>Environment Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm install dotenv

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT);`}</pre>
          </div>
        </div>

        {/* 29. HTTP Methods */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>HTTP Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>{`GET     - Read data
POST    - Create data
PUT     - Update complete data
PATCH   - Update partial data
DELETE  - Delete data`}</pre>
          </div>
        </div>

        {/* 30. Common Status Codes */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Common Status Codes</h2>
          </div>

          <div className="html-code-box">
            <pre>{`200 - OK
201 - Created
400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
500 - Internal Server Error`}</pre>
          </div>
        </div>

        {/* 31. Package Scripts */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-terminal"></i>
            <h2>Package Scripts</h2>
          </div>

          <div className="html-code-box">
            <pre>{`// package.json

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}`}</pre>
          </div>
        </div>

        {/* 32. Common Express Commands */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>Common Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>{`npm init -y

npm install express

npm install cors

npm install dotenv

npm install nodemon --save-dev

node app.js

npm start

npm run dev`}</pre>
          </div>
        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}



          {/* ROW 2 */}
          <div className="cheatsheet-row">

            {/* Card 5 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#react">
              <img
                src={data[4].img}
                alt={data[4].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[4].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
  {/* model- content */}
            <div style={{ marginTop: "80px" }}
  className="modal fade "
  id="react"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         REACT CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}

 <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-brands fa-react"></i>
          </div>

          <div className="html-heading-title">
            <h1>React Cheat Sheet</h1>
            <p>
              Quick reference for React components, JSX, props, state,
              hooks, events and common patterns.
            </p>
          </div>

        </div>


        {/* 1. React Component */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-brands fa-react"></i>
            <h2>1. React Component</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React from "react";

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
        </div>
    );
};

export default App;`}
            </pre>
          </div>

        </div>


        {/* 2. JSX */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>2. JSX</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const name = "Vamsi";

const element = (
    <div>
        <h1>Hello {name}</h1>
        <p>Welcome to React</p>
    </div>
);`}
            </pre>
          </div>

        </div>


        {/* 3. JSX className */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-tags"></i>
            <h2>3. JSX className</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const App = () => {

    return (
        <div className="container">
            <h1 className="title">
                React
            </h1>

            <button className="btn">
                Click
            </button>
        </div>
    );
};`}
            </pre>
          </div>

        </div>


        {/* 4. Props */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrow-right"></i>
            <h2>4. Props</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const User = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
        </div>
    );
};


<User
    name="Vamsi"
    role="Developer"
/>`}
            </pre>
          </div>

        </div>


        {/* 5. Destructuring Props */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>5. Destructuring Props</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const User = ({ name, role }) => {

    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
};`}
            </pre>
          </div>

        </div>


        {/* 6. useState */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>6. useState</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>
        </div>
    );
};`}
            </pre>
          </div>

        </div>


        {/* 7. useEffect */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>7. useEffect</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React, { useEffect } from "react";

useEffect(() => {

    console.log("Component loaded");

}, []);`}
            </pre>
          </div>

        </div>


        {/* 8. useEffect Dependency */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>8. useEffect Dependency</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`useEffect(() => {

    console.log("Count changed");

}, [count]);`}
            </pre>
          </div>

        </div>


        {/* 9. Event Handling */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>9. Event Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const handleClick = () => {
    console.log("Button clicked");
};

<button onClick={handleClick}>
    Click Me
</button>`}
            </pre>
          </div>

        </div>


        {/* 10. Input Handling */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-keyboard"></i>
            <h2>10. Input Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const [name, setName] = useState("");

<input
    type="text"
    value={name}
    onChange={(e) => {
        setName(e.target.value);
    }}
/>

<p>Hello {name}</p>`}
            </pre>
          </div>

        </div>


        {/* 11. Conditional Rendering */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>11. Conditional Rendering</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const isLoggedIn = true;

return (
    <div>

        {isLoggedIn ? (
            <h2>Welcome User</h2>
        ) : (
            <h2>Please Login</h2>
        )}

    </div>
);`}
            </pre>
          </div>

        </div>


        {/* 12. Logical Rendering */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>12. Logical Rendering</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const isAdmin = true;

return (
    <div>

        {isAdmin && (
            <button>
                Admin Panel
            </button>
        )}

    </div>
);`}
            </pre>
          </div>

        </div>


        {/* 13. Rendering Lists */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>13. Rendering Lists</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const users = [
    "Vamsi",
    "Rahul",
    "Kiran"
];

return (
    <div>

        {users.map((user, index) => (
            <p key={index}>
                {user}
            </p>
        ))}

    </div>
);`}
            </pre>
          </div>

        </div>


        {/* 14. Keys */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>14. Keys</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const users = [
    { id: 1, name: "Vamsi" },
    { id: 2, name: "Rahul" }
];

{users.map((user) => (
    <div key={user.id}>
        {user.name}
    </div>
))}`}
            </pre>
          </div>

        </div>


        {/* 15. Forms */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file-lines"></i>
            <h2>15. React Forms</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const [email, setEmail] = useState("");

const handleSubmit = (e) => {

    e.preventDefault();

    console.log(email);
};

return (
    <form onSubmit={handleSubmit}>

        <input
            type="email"
            value={email}
            onChange={(e) =>
                setEmail(e.target.value)
            }
        />

        <button type="submit">
            Submit
        </button>

    </form>
);`}
            </pre>
          </div>

        </div>


        {/* 16. useRef */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-bullseye"></i>
            <h2>16. useRef</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React, { useRef } from "react";

const Input = () => {

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>

            <input ref={inputRef} />

            <button onClick={focusInput}>
                Focus
            </button>

        </div>
    );
};`}
            </pre>
          </div>

        </div>


        {/* 17. useContext */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-share-nodes"></i>
            <h2>17. useContext</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React, {
    createContext,
    useContext
} from "react";

const UserContext = createContext();

const App = () => {

    return (
        <UserContext.Provider
            value="Vamsi"
        >
            <User />
        </UserContext.Provider>
    );
};

const User = () => {

    const name = useContext(UserContext);

    return <h2>{name}</h2>;
};`}
            </pre>
          </div>

        </div>


        {/* 18. useMemo */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-gauge-high"></i>
            <h2>18. useMemo</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React, { useMemo } from "react";

const result = useMemo(() => {

    return expensiveCalculation(value);

}, [value]);`}
            </pre>
          </div>

        </div>


        {/* 19. useCallback */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-function"></i>
            <h2>19. useCallback</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React, { useCallback } from "react";

const handleClick = useCallback(() => {

    console.log("Clicked");

}, []);`}
            </pre>
          </div>

        </div>


        {/* 20. Custom Hook */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>20. Custom Hook</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import { useState } from "react";

const useCounter = () => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    return {
        count,
        increase
    };
};

export default useCounter;`}
            </pre>
          </div>

        </div>


        {/* 21. React Router */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>21. React Router</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

<BrowserRouter>

    <Routes>

        <Route
            path="/"
            element={<Home />}
        />

        <Route
            path="/about"
            element={<About />}
        />

    </Routes>

</BrowserRouter>`}
            </pre>
          </div>

        </div>


        {/* 22. Link */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>22. React Link</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import { Link } from "react-router-dom";

<Link to="/">
    Home
</Link>

<Link to="/about">
    About
</Link>`}
            </pre>
          </div>

        </div>


        {/* 23. Import Export */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file-export"></i>
            <h2>23. Import & Export</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`// Export

export const name = "Vamsi";

export default App;


// Import

import App from "./App";

import {
    name
} from "./data";`}
            </pre>
          </div>

        </div>


        {/* 24. Component Props Example */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h2>24. Component Communication</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const Parent = () => {

    const message = "Hello Child";

    return (
        <Child message={message} />
    );
};


const Child = ({ message }) => {

    return (
        <h2>{message}</h2>
    );
};`}
            </pre>
          </div>

        </div>


        {/* 25. Children Props */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-children"></i>
            <h2>25. Children Props</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const Card = ({ children }) => {

    return (
        <div className="card">
            {children}
        </div>
    );
};


<Card>
    <h2>Hello React</h2>
    <p>Welcome</p>
</Card>`}
            </pre>
          </div>

        </div>


        {/* 26. Fragment */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>26. Fragment</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const App = () => {

    return (
        <>
            <h1>Hello</h1>
            <p>React</p>
        </>
    );
};`}
            </pre>
          </div>

        </div>


        {/* 27. Conditional ClassName */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-palette"></i>
            <h2>27. Conditional className</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const active = true;

<div
    className={
        active
            ? "card active"
            : "card"
    }
>
    Content
</div>`}
            </pre>
          </div>

        </div>


        {/* 28. Fetch API */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>28. Fetch API</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`useEffect(() => {

    fetch("https://api.example.com/users")

        .then(response => response.json())

        .then(data => {
            console.log(data);
        })

        .catch(error => {
            console.log(error);
        });

}, []);`}
            </pre>
          </div>

        </div>


        {/* 29. Loading State */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-spinner"></i>
            <h2>29. Loading State</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const [loading, setLoading] = useState(true);

return (
    <div>

        {loading ? (
            <p>Loading...</p>
        ) : (
            <p>Data Loaded</p>
        )}

    </div>
);`}
            </pre>
          </div>

        </div>


        {/* 30. Error State */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>30. Error State</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`const [error, setError] = useState(null);

return (
    <div>

        {error && (
            <p>
                {error}
            </p>
        )}

    </div>
);`}
            </pre>
          </div>

        </div>


        {/* 31. Local Storage */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hard-drive"></i>
            <h2>31. Local Storage</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`localStorage.setItem(
    "name",
    "Vamsi"
);

const name =
    localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.clear();`}
            </pre>
          </div>

        </div>


        {/* 32. React Strict Mode */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-shield"></i>
            <h2>32. StrictMode</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import React from "react";

<React.StrictMode>

    <App />

</React.StrictMode>`}
            </pre>
          </div>

        </div>


        {/* 33. React Root */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-play"></i>
            <h2>33. React Root</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM
    .createRoot(
        document.getElementById("root")
    )
    .render(
        <App />
    );`}
            </pre>
          </div>

        </div>


        {/* 34. Component File Structure */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-folder-tree"></i>
            <h2>34. Component Structure</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   └── About.jsx
│
├── App.jsx
├── main.jsx
└── index.css`}
            </pre>
          </div>

        </div>


        {/* 35. Common Hooks */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-toolbox"></i>
            <h2>35. Common React Hooks</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`useState()

useEffect()

useRef()

useContext()

useMemo()

useCallback()

useReducer()

useLayoutEffect()

useId()`}
            </pre>
          </div>

        </div>

      </div>
    </section>
        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

            {/* Card 6 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#tailwind">
              <img
                src={showdata[5].img}
                alt={showdata[5].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{showdata[5].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
  {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="tailwind"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         TAILWIND CSS CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
  <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-solid fa-wind"></i>
          </div>

          <div className="html-heading-title">
            <h1>Tailwind CSS Cheat Sheet</h1>
            <p>
              Quick reference for Tailwind CSS utility classes,
              responsive design, flexbox, grid, spacing and more.
            </p>
          </div>

        </div>


        {/* 1. Installation */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-download"></i>
            <h2>1. Installation</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`npm install tailwindcss @tailwindcss/vite

npm run dev`}
            </pre>
          </div>

        </div>


        {/* 2. Basic Classes */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>2. Basic Utility Classes</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="text-blue-500">
    Blue Text
</div>

<div className="bg-blue-500">
    Blue Background
</div>

<div className="font-bold">
    Bold Text
</div>

<div className="text-center">
    Center Text
</div>`}
            </pre>
          </div>

        </div>


        {/* 3. Colors */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-palette"></i>
            <h2>3. Colors</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`text-red-500

text-blue-500

text-green-500

text-yellow-500

text-purple-500

bg-red-500

bg-blue-500

bg-green-500

bg-gray-100

bg-black

bg-white`}
            </pre>
          </div>

        </div>


        {/* 4. Typography */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>4. Typography</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`text-xs

text-sm

text-base

text-lg

text-xl

text-2xl

text-3xl

font-normal

font-medium

font-semibold

font-bold

italic

uppercase

lowercase

capitalize`}
            </pre>
          </div>

        </div>


        {/* 5. Text Alignment */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-align-center"></i>
            <h2>5. Text Alignment</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`text-left

text-center

text-right

text-justify

align-baseline

align-middle

align-top

align-bottom`}
            </pre>
          </div>

        </div>


        {/* 6. Width & Height */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-ruler-combined"></i>
            <h2>6. Width & Height</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`w-full

w-1/2

w-1/3

w-1/4

w-screen

w-auto

h-full

h-screen

h-auto

h-10

h-20

min-h-screen

max-w-xl`}
            </pre>
          </div>

        </div>


        {/* 7. Margin */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-up-down-left-right"></i>
            <h2>7. Margin</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`m-0

m-2

m-4

m-6

m-8

mt-4

mb-4

ms-4

me-4

mx-4

my-4

mx-auto`}
            </pre>
          </div>

        </div>


        {/* 8. Padding */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-expand"></i>
            <h2>8. Padding</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`p-0

p-2

p-4

p-6

p-8

pt-4

pb-4

ps-4

pe-4

px-4

py-4`}
            </pre>
          </div>

        </div>


        {/* 9. Flexbox */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-left-right"></i>
            <h2>9. Flexbox</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="flex">

    <div>Item 1</div>

    <div>Item 2</div>

</div>

<div className="flex items-center">
    Center Vertically
</div>

<div className="flex justify-center">
    Center Horizontally
</div>

<div className="flex justify-between">
    Space Between
</div>

<div className="flex gap-4">
    Items
</div>`}
            </pre>
          </div>

        </div>


        {/* 10. Flex Direction */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-up-down"></i>
            <h2>10. Flex Direction</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`flex-row

flex-row-reverse

flex-col

flex-col-reverse

flex-wrap

flex-nowrap

flex-1

grow

shrink`}
            </pre>
          </div>

        </div>


        {/* 11. Grid */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-table-cells"></i>
            <h2>11. Grid</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="grid grid-cols-3 gap-4">

    <div>Card 1</div>

    <div>Card 2</div>

    <div>Card 3</div>

</div>

grid-cols-1

grid-cols-2

grid-cols-3

grid-cols-4

grid-cols-12

gap-2

gap-4

gap-6`}
            </pre>
          </div>

        </div>


        {/* 12. Responsive Design */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-mobile-screen"></i>
            <h2>12. Responsive Design</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="
    text-sm
    md:text-lg
    lg:text-2xl
">
    Responsive Text
</div>

<div className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
">
    Responsive Cards
</div>

<div className="
    flex
    flex-col
    md:flex-row
">
    Responsive Layout
</div>`}
            </pre>
          </div>

        </div>


        {/* 13. Borders */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-border-all"></i>
            <h2>13. Borders</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`border

border-2

border-4

border-gray-300

border-blue-500

border-t

border-b

border-l

border-r

rounded

rounded-md

rounded-lg

rounded-xl

rounded-full`}
            </pre>
          </div>

        </div>


        {/* 14. Shadows */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-sun"></i>
            <h2>14. Shadows</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`shadow-sm

shadow

shadow-md

shadow-lg

shadow-xl

shadow-2xl

shadow-none`}
            </pre>
          </div>

        </div>


        {/* 15. Background */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-fill-drip"></i>
            <h2>15. Background</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`bg-white

bg-black

bg-gray-100

bg-blue-500

bg-green-500

bg-red-500

bg-gradient-to-r

from-blue-500

to-purple-500`}
            </pre>
          </div>

        </div>


        {/* 16. Position */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-location-dot"></i>
            <h2>16. Position</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`relative

absolute

fixed

sticky

static

top-0

right-0

bottom-0

left-0

inset-0

z-10

z-50`}
            </pre>
          </div>

        </div>


        {/* 17. Display */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-display"></i>
            <h2>17. Display</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`block

inline-block

inline

flex

inline-flex

grid

hidden

table`}
            </pre>
          </div>

        </div>


        {/* 18. Overflow */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-up-down-left-right"></i>
            <h2>18. Overflow</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`overflow-auto

overflow-hidden

overflow-visible

overflow-scroll

overflow-x-auto

overflow-y-auto

overflow-x-hidden

overflow-y-hidden`}
            </pre>
          </div>

        </div>


        {/* 19. Hover */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>19. Hover & Focus</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<button className="
    bg-blue-500
    hover:bg-blue-700
">
    Hover Me
</button>

<input className="
    border
    focus:border-blue-500
    focus:outline-none
" />`}
            </pre>
          </div>

        </div>


        {/* 20. Transitions */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <h2>20. Transitions</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`transition

transition-all

transition-colors

duration-300

duration-500

ease-in

ease-out

ease-in-out`}
            </pre>
          </div>

        </div>


        {/* 21. Transform */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-rotate"></i>
            <h2>21. Transform</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`scale-95

scale-100

scale-105

rotate-45

rotate-90

-rotate-45

translate-x-4

translate-y-4

hover:scale-105

hover:-translate-y-1`}
            </pre>
          </div>

        </div>


        {/* 22. Cursor */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrow-pointer"></i>
            <h2>22. Cursor</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`cursor-pointer

cursor-default

cursor-not-allowed

cursor-wait

cursor-text

cursor-move`}
            </pre>
          </div>

        </div>


        {/* 23. Opacity */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-eye"></i>
            <h2>23. Opacity</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`opacity-0

opacity-25

opacity-50

opacity-75

opacity-100`}
            </pre>
          </div>

        </div>


        {/* 24. Lists */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>24. Lists</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`list-none

list-disc

list-decimal

list-inside

list-outside

<ul className="list-disc">
    <li>HTML</li>
    <li>CSS</li>
    <li>React</li>
</ul>`}
            </pre>
          </div>

        </div>


        {/* 25. Buttons */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>25. Button Example</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<button className="
    px-4
    py-2
    bg-blue-500
    text-white
    rounded-lg
    hover:bg-blue-600
    transition
">
    Click Me
</button>`}
            </pre>
          </div>

        </div>


        {/* 26. Card */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-id-card"></i>
            <h2>26. Card Example</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="
    max-w-sm
    p-6
    bg-white
    rounded-xl
    shadow-lg
">

    <h2 className="
        text-xl
        font-bold
    ">
        Card Title
    </h2>

    <p className="
        text-gray-600
        mt-2
    ">
        Card content
    </p>

</div>`}
            </pre>
          </div>

        </div>


        {/* 27. Responsive Card Grid */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-table-cells"></i>
            <h2>27. Responsive Card Grid</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-6
">

    <div className="p-5 shadow rounded-lg">
        Card 1
    </div>

    <div className="p-5 shadow rounded-lg">
        Card 2
    </div>

    <div className="p-5 shadow rounded-lg">
        Card 3
    </div>

</div>`}
            </pre>
          </div>

        </div>


        {/* 28. Responsive Navbar */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-bars"></i>
            <h2>28. Responsive Navbar</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<nav className="
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    p-4
">

    <div className="font-bold">
        DevKit
    </div>

    <div className="
        flex
        gap-4
        mt-4
        md:mt-0
    ">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </div>

</nav>`}
            </pre>
          </div>

        </div>


        {/* 29. Arbitrary Values */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-sliders"></i>
            <h2>29. Arbitrary Values</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="w-[300px]">

    Custom Width

</div>

<div className="text-[20px]">

    Custom Font Size

</div>

<div className="bg-[#1687f8]">

    Custom Color

</div>`}
            </pre>
          </div>

        </div>


        {/* 30. Dark Mode */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-moon"></i>
            <h2>30. Dark Mode</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`<div className="
    bg-white
    text-black
    dark:bg-gray-900
    dark:text-white
">
    Dark Mode Content
</div>

<p className="
    text-gray-700
    dark:text-gray-300
">
    Responsive Text
</p>`}
            </pre>
          </div>

        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

            {/* Card 7 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#python">
              <img
                src={data[9].img}
                alt={data[9].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[9].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
  {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="python"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         PYTHON CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
   <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">

          <div className="html-heading-icon">
            <i className="fa-brands fa-python"></i>
          </div>

          <div className="html-heading-title">
            <h1>Python Cheat Sheet</h1>
            <p>
              Quick reference for Python syntax, variables, data types,
              conditions, loops, functions, lists, dictionaries and more.
            </p>
          </div>

        </div>


        {/* 1. Hello World */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-play"></i>
            <h2>1. Hello World</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`print("Hello World")

print("Welcome to Python")`}
            </pre>
          </div>

        </div>


        {/* 2. Variables */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>2. Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`name = "Vamsi"

age = 22

salary = 50000

is_developer = True

print(name)
print(age)
print(salary)
print(is_developer)`}
            </pre>
          </div>

        </div>


        {/* 3. Data Types */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>3. Data Types</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`name = "Vamsi"       # str

age = 22             # int

price = 99.99        # float

active = True        # bool

items = [1, 2, 3]    # list

data = (1, 2, 3)     # tuple

unique = {1, 2, 3}   # set

user = {
    "name": "Vamsi"
}                    # dict

value = None         # NoneType`}
            </pre>
          </div>

        </div>


        {/* 4. Type Checking */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>4. Type Checking</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`name = "Vamsi"

print(type(name))

age = 22

print(type(age))

price = 99.99

print(type(price))`}
            </pre>
          </div>

        </div>


        {/* 5. Type Conversion */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>5. Type Conversion</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`age = "22"

age = int(age)

price = "99.99"

price = float(price)

number = 100

text = str(number)

print(age)
print(price)
print(text)`}
            </pre>
          </div>

        </div>


        {/* 6. Strings */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>6. Strings</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`name = "Vamsi"

print(name)

print(name.upper())

print(name.lower())

print(name.title())

print(len(name))

print(name[0])

print(name[-1])

print(name[0:3])`}
            </pre>
          </div>

        </div>


        {/* 7. String Methods */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <h2>7. String Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`text = "Hello Python"

text.strip()

text.replace(
    "Python",
    "World"
)

text.split()

text.startswith("Hello")

text.endswith("Python")

text.count("o")`}
            </pre>
          </div>

        </div>


        {/* 8. Operators */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>8. Operators</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`# Arithmetic

a + b

a - b

a * b

a / b

a // b

a % b

a ** b


# Comparison

a == b

a != b

a > b

a < b

a >= b

a <= b


# Logical

a and b

a or b

not a`}
            </pre>
          </div>

        </div>


        {/* 9. If Else */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>9. If / Else</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")`}
            </pre>
          </div>

        </div>


        {/* 10. Elif */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>10. If / Elif / Else</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`marks = 85

if marks >= 90:
    print("A+")

elif marks >= 75:
    print("A")

elif marks >= 60:
    print("B")

else:
    print("C")`}
            </pre>
          </div>

        </div>


        {/* 11. For Loop */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>11. For Loop</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`for i in range(5):
    print(i)


for name in [
    "Vamsi",
    "Rahul",
    "Kiran"
]:
    print(name)`}
            </pre>
          </div>

        </div>


        {/* 12. While Loop */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>12. While Loop</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`count = 1

while count <= 5:

    print(count)

    count += 1`}
            </pre>
          </div>

        </div>


        {/* 13. Break Continue */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-stop"></i>
            <h2>13. Break & Continue</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`for i in range(10):

    if i == 5:
        break

    print(i)


for i in range(10):

    if i == 5:
        continue

    print(i)`}
            </pre>
          </div>

        </div>


        {/* 14. Lists */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>14. Lists</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`fruits = [
    "Apple",
    "Banana",
    "Mango"
]

print(fruits[0])

fruits.append("Orange")

fruits.remove("Banana")

fruits.pop()

print(len(fruits))`}
            </pre>
          </div>

        </div>


        {/* 15. List Slicing */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-scissors"></i>
            <h2>15. List Slicing</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`numbers = [
    10, 20, 30, 40, 50
]

print(numbers[0:3])

print(numbers[:3])

print(numbers[2:])

print(numbers[::-1])`}
            </pre>
          </div>

        </div>


        {/* 16. List Comprehension */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>16. List Comprehension</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`numbers = [1, 2, 3, 4, 5]

squares = [
    x * x
    for x in numbers
]

print(squares)


even = [
    x
    for x in numbers
    if x % 2 == 0
]`}
            </pre>
          </div>

        </div>


        {/* 17. Tuple */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>17. Tuple</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`numbers = (
    10,
    20,
    30
)

print(numbers[0])

print(len(numbers))

a, b, c = numbers

print(a)
print(b)
print(c)`}
            </pre>
          </div>

        </div>


        {/* 18. Set */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-circle-nodes"></i>
            <h2>18. Set</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`numbers = {
    1, 2, 3, 3, 4
}

print(numbers)

numbers.add(5)

numbers.remove(2)

print(
    3 in numbers
)`}
            </pre>
          </div>

        </div>


        {/* 19. Dictionary */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-book"></i>
            <h2>19. Dictionary</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`user = {
    "name": "Vamsi",
    "age": 22,
    "role": "Developer"
}

print(user["name"])

print(user.get("age"))

user["city"] = "Hyderabad"

user["age"] = 23

user.pop("role")`}
            </pre>
          </div>

        </div>


        {/* 20. Dictionary Methods */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>20. Dictionary Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`user = {
    "name": "Vamsi",
    "age": 22
}

print(user.keys())

print(user.values())

print(user.items())

for key, value in user.items():

    print(key, value)`}
            </pre>
          </div>

        </div>


        {/* 21. Functions */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-function"></i>
            <h2>21. Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`def greet():

    print("Hello Vamsi")


greet()`}


            </pre>
          </div>

        </div>


        {/* 22. Function Parameters */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-arrow-right"></i>
            <h2>22. Function Parameters</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`def greet(name):

    print(
        "Hello",
        name
    )


greet("Vamsi")


def add(a, b):

    return a + b


result = add(10, 20)

print(result)`}
            </pre>
          </div>

        </div>


        {/* 23. Lambda */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>23. Lambda Function</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`add = lambda a, b: a + b

print(
    add(10, 20)
)


square = lambda x: x * x

print(square(5))`}
            </pre>
          </div>

        </div>


        {/* 24. Map Filter Reduce */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>24. Map & Filter</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`numbers = [1, 2, 3, 4, 5]

squares = list(
    map(
        lambda x: x * x,
        numbers
    )
)

even = list(
    filter(
        lambda x: x % 2 == 0,
        numbers
    )
)

print(squares)

print(even)`}
            </pre>
          </div>

        </div>


        {/* 25. Exception Handling */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>25. Exception Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`try:

    number = int(
        input("Enter number: ")
    )

    print(number)

except ValueError:

    print("Invalid number")

finally:

    print("Done")`}
            </pre>
          </div>

        </div>


        {/* 26. File Handling */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file"></i>
            <h2>26. File Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`# Write

with open(
    "data.txt",
    "w"
) as file:

    file.write("Hello")


# Read

with open(
    "data.txt",
    "r"
) as file:

    content = file.read()

    print(content)`}
            </pre>
          </div>

        </div>


        {/* 27. Modules */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h2>27. Modules</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import math

print(
    math.sqrt(25)
)


from math import sqrt

print(
    sqrt(25)
)`}
            </pre>
          </div>

        </div>


        {/* 28. Date Time */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-regular fa-calendar"></i>
            <h2>28. Date & Time</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`from datetime import datetime

now = datetime.now()

print(now)

print(
    now.year
)

print(
    now.month
)

print(
    now.day
)`}
            </pre>
          </div>

        </div>


        {/* 29. Classes */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>29. Classes & Objects</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`class Person:

    def __init__(
        self,
        name,
        age
    ):
        self.name = name
        self.age = age

    def greet(self):

        print(
            "Hello",
            self.name
        )


person = Person(
    "Vamsi",
    22
)

person.greet()`}
            </pre>
          </div>

        </div>


        {/* 30. Inheritance */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>30. Inheritance</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`class Animal:

    def speak(self):

        print("Animal sound")


class Dog(Animal):

    def bark(self):

        print("Woof")


dog = Dog()

dog.speak()

dog.bark()`}
            </pre>
          </div>

        </div>


        {/* 31. Decorators */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <h2>31. Decorators</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`def decorator(func):

    def wrapper():

        print("Before")

        func()

        print("After")

    return wrapper


@decorator
def hello():

    print("Hello")


hello()`}
            </pre>
          </div>

        </div>


        {/* 32. JSON */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>32. JSON</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`import json

data = {
    "name": "Vamsi",
    "age": 22
}

json_data = json.dumps(data)

print(json_data)


python_data = json.loads(
    json_data
)

print(python_data)`}
            </pre>
          </div>

        </div>


        {/* 33. Virtual Environment */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-server"></i>
            <h2>33. Virtual Environment</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`python -m venv venv


# Windows

venv\\Scripts\\activate


# macOS / Linux

source venv/bin/activate


# Install package

pip install requests`}
            </pre>
          </div>

        </div>


        {/* 34. Pip */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-box-open"></i>
            <h2>34. PIP Commands</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`pip install package

pip uninstall package

pip list

pip show package

pip freeze

pip install -r requirements.txt

pip freeze > requirements.txt`}
            </pre>
          </div>

        </div>


        {/* 35. Common Built-in Functions */}
        <div className="html-cheat-card">

          <div className="html-card-title">
            <i className="fa-solid fa-toolbox"></i>
            <h2>35. Common Built-in Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>
{`print()

len()

type()

int()

float()

str()

list()

tuple()

set()

dict()

range()

sum()

max()

min()

sorted()

enumerate()

zip()

input()`}
            </pre>
          </div>

        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

            {/* Card 8 */}
            <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#java">
              <img
                src={data[10].img}
                alt={data[10].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[10].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
  {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="java"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
        JAVA  CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}

  <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-brands fa-java"></i>
          </div>

          <div className="html-heading-title">
            <h1>Java Cheat Sheet</h1>
            <p>
              Quick Java syntax, concepts, keywords, OOP, collections and
              commonly used methods.
            </p>
          </div>
        </div>

        {/* 1. Hello World */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-play"></i>
            <h2>Hello World</h2>
          </div>

          <div className="html-code-box">
            <pre>{`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`}</pre>
          </div>
        </div>

        {/* 2. Variables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>Variables</h2>
          </div>

          <div className="html-code-box">
            <pre>{`int age = 25;
double price = 99.99;
char grade = 'A';
boolean isActive = true;
String name = "Vamsi";`}</pre>
          </div>
        </div>

        {/* 3. Data Types */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Data Types</h2>
          </div>

          <div className="html-code-box">
            <pre>{`byte
short
int
long
float
double
char
boolean
String`}</pre>
          </div>
        </div>

        {/* 4. Type Casting */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-right-left"></i>
            <h2>Type Casting</h2>
          </div>

          <div className="html-code-box">
            <pre>{`// Widening
int num = 10;
double value = num;

// Narrowing
double price = 99.99;
int amount = (int) price;`}</pre>
          </div>
        </div>

        {/* 5. Operators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>Operators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`// Arithmetic
+  -  *  /  %

// Comparison
==  !=  >  <  >=  <=

// Logical
&&  ||  !

// Assignment
=  +=  -=  *=  /=

// Increment
++  --`}</pre>
          </div>
        </div>

        {/* 6. If Else */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>If / Else</h2>
          </div>

          <div className="html-code-box">
            <pre>{`int age = 20;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}`}</pre>
          </div>
        </div>

        {/* 7. Switch */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Switch Statement</h2>
          </div>

          <div className="html-code-box">
            <pre>{`int day = 2;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Invalid");
}`}</pre>
          </div>
        </div>

        {/* 8. For Loop */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>For Loop</h2>
          </div>

          <div className="html-code-box">
            <pre>{`for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`}</pre>
          </div>
        </div>

        {/* 9. While Loop */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rotate"></i>
            <h2>While Loop</h2>
          </div>

          <div className="html-code-box">
            <pre>{`int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++;
}`}</pre>
          </div>
        </div>

        {/* 10. Do While */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>Do While Loop</h2>
          </div>

          <div className="html-code-box">
            <pre>{`int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 5);`}</pre>
          </div>
        </div>

        {/* 11. Arrays */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table-cells"></i>
            <h2>Arrays</h2>
          </div>

          <div className="html-code-box">
            <pre>{`int[] numbers = {10, 20, 30, 40};

System.out.println(numbers[0]);

for (int number : numbers) {
    System.out.println(number);
}`}</pre>
          </div>
        </div>

        {/* 12. String */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>Strings</h2>
          </div>

          <div className="html-code-box">
            <pre>{`String name = "Java";

name.length();
name.toUpperCase();
name.toLowerCase();
name.charAt(0);
name.substring(1);
name.contains("av");`}</pre>
          </div>
        </div>

        {/* 13. Methods */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>{`static void greet() {
    System.out.println("Hello");
}

public static void main(String[] args) {
    greet();
}`}</pre>
          </div>
        </div>

        {/* 14. Method Parameters */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-right"></i>
            <h2>Method Parameters</h2>
          </div>

          <div className="html-code-box">
            <pre>{`static void greet(String name) {
    System.out.println("Hello " + name);
}

greet("Vamsi");`}</pre>
          </div>
        </div>

        {/* 15. Return Value */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-reply"></i>
            <h2>Return Value</h2>
          </div>

          <div className="html-code-box">
            <pre>{`static int add(int a, int b) {
    return a + b;
}

int result = add(10, 20);`}</pre>
          </div>
        </div>

        {/* 16. Class */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>Class</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Student {
    String name;
    int age;
}`}</pre>
          </div>
        </div>

        {/* 17. Object */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-object-group"></i>
            <h2>Object</h2>
          </div>

          <div className="html-code-box">
            <pre>{`Student student = new Student();

student.name = "Vamsi";
student.age = 22;`}</pre>
          </div>
        </div>

        {/* 18. Constructor */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-hammer"></i>
            <h2>Constructor</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Student {

    String name;

    Student(String name) {
        this.name = name;
    }
}

Student s = new Student("Vamsi");`}</pre>
          </div>
        </div>

        {/* 19. this Keyword */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>this Keyword</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}`}</pre>
          </div>
        </div>

        {/* 20. Inheritance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>Inheritance</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}`}</pre>
          </div>
        </div>

        {/* 21. Method Overloading */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Method Overloading</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}`}</pre>
          </div>
        </div>

        {/* 22. Method Overriding */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-compare"></i>
            <h2>Method Overriding</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}`}</pre>
          </div>
        </div>

        {/* 23. Encapsulation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>Encapsulation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Student {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}`}</pre>
          </div>
        </div>

        {/* 24. Abstraction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shapes"></i>
            <h2>Abstraction</h2>
          </div>

          <div className="html-code-box">
            <pre>{`abstract class Animal {

    abstract void sound();

    void eat() {
        System.out.println("Eating");
    }
}`}</pre>
          </div>
        </div>

        {/* 25. Interface */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-diagram-project"></i>
            <h2>Interface</h2>
          </div>

          <div className="html-code-box">
            <pre>{`interface Animal {
    void sound();
}

class Dog implements Animal {

    public void sound() {
        System.out.println("Bark");
    }
}`}</pre>
          </div>
        </div>

        {/* 26. ArrayList */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>ArrayList</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();

names.add("Vamsi");
names.add("Rahul");

names.remove("Rahul");

System.out.println(names);`}</pre>
          </div>
        </div>

        {/* 27. HashSet */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-nodes"></i>
            <h2>HashSet</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import java.util.HashSet;

HashSet<String> names = new HashSet<>();

names.add("Java");
names.add("Python");
names.add("Java");

System.out.println(names);`}</pre>
          </div>
        </div>

        {/* 28. HashMap */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-map"></i>
            <h2>HashMap</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import java.util.HashMap;

HashMap<Integer, String> students = new HashMap<>();

students.put(1, "Vamsi");
students.put(2, "Rahul");

System.out.println(students.get(1));`}</pre>
          </div>
        </div>

        {/* 29. Exception Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>Exception Handling</h2>
          </div>

          <div className="html-code-box">
            <pre>{`try {
    int result = 10 / 0;
}
catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
finally {
    System.out.println("Completed");
}`}</pre>
          </div>
        </div>

        {/* 30. Custom Exception */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bug"></i>
            <h2>Custom Exception</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class MyException extends Exception {

    MyException(String message) {
        super(message);
    }
}`}</pre>
          </div>
        </div>

        {/* 31. Static Keyword */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>static Keyword</h2>
          </div>

          <div className="html-code-box">
            <pre>{`class Student {

    static String college = "ABC College";

    static void display() {
        System.out.println(college);
    }
}`}</pre>
          </div>
        </div>

        {/* 32. Final Keyword */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>final Keyword</h2>
          </div>

          <div className="html-code-box">
            <pre>{`final int MAX = 100;

// MAX = 200; // Error`}</pre>
          </div>
        </div>

        {/* 33. Package */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder"></i>
            <h2>Package & Import</h2>
          </div>

          <div className="html-code-box">
            <pre>{`package com.example.app;

import java.util.ArrayList;
import java.util.Scanner;`}</pre>
          </div>
        </div>

        {/* 34. Scanner */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-keyboard"></i>
            <h2>Scanner Input</h2>
          </div>

          <div className="html-code-box">
            <pre>{`import java.util.Scanner;

Scanner sc = new Scanner(System.in);

System.out.print("Enter name: ");
String name = sc.nextLine();

System.out.println(name);`}</pre>
          </div>
        </div>

        {/* 35. Common Methods */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-wrench"></i>
            <h2>Common Java Methods</h2>
          </div>

          <div className="html-code-box">
            <pre>{`String.length()
String.toUpperCase()
String.toLowerCase()
String.charAt()
String.substring()

ArrayList.add()
ArrayList.remove()
ArrayList.get()
ArrayList.size()

HashMap.put()
HashMap.get()
HashMap.remove()
HashMap.containsKey()`}</pre>
          </div>
        </div>

      </div>
    </section>
        {/* content */}
        
      </div>

    </div>
  </div>
</div>
          <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#mongo">
              <img
                src="/mongo.png"
                alt={data[5].title}
                className="cheatsheet-img"
                 style={{
                    width: "50px",
                    height: "50px",
                   }}
              />

              <div className="cheatsheet-content">
                <h6>{data[5].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="mongo"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         MONGO DB CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
    <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-solid fa-database"></i>
          </div>

          <div className="html-heading-title">
            <h1>MongoDB Cheat Sheet</h1>
            <p>
              Quick MongoDB commands, databases, collections, CRUD operations,
              queries, filters, sorting and aggregation basics.
            </p>
          </div>
        </div>

        {/* 1. Start MongoDB */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-play"></i>
            <h2>Start MongoDB Shell</h2>
          </div>

          <div className="html-code-box">
            <pre>{`mongosh`}</pre>
          </div>
        </div>

        {/* 2. Show Databases */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Show Databases</h2>
          </div>

          <div className="html-code-box">
            <pre>{`show dbs`}</pre>
          </div>
        </div>

        {/* 3. Current Database */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-info"></i>
            <h2>Show Current Database</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db`}</pre>
          </div>
        </div>

        {/* 4. Create / Switch Database */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-right-left"></i>
            <h2>Create / Switch Database</h2>
          </div>

          <div className="html-code-box">
            <pre>{`use myDatabase`}</pre>
          </div>
        </div>

        {/* 5. Create Collection */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-folder-plus"></i>
            <h2>Create Collection</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.createCollection("users")`}</pre>
          </div>
        </div>

        {/* 6. Show Collections */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Show Collections</h2>
          </div>

          <div className="html-code-box">
            <pre>{`show collections`}</pre>
          </div>
        </div>

        {/* 7. Insert One */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>Insert One Document</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.insertOne({
    name: "Vamsi",
    age: 22,
    role: "Developer"
})`}</pre>
          </div>
        </div>

        {/* 8. Insert Many */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Insert Many Documents</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.insertMany([
    {
        name: "Vamsi",
        age: 22
    },
    {
        name: "Rahul",
        age: 24
    }
])`}</pre>
          </div>
        </div>

        {/* 9. Find All */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>Find All Documents</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find()`}</pre>
          </div>
        </div>

        {/* 10. Find One */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-search"></i>
            <h2>Find One Document</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.findOne({
    name: "Vamsi"
})`}</pre>
          </div>
        </div>

        {/* 11. Filter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>Filter Documents</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find({
    age: 22
})`}</pre>
          </div>
        </div>

        {/* 12. Comparison Operators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-compare"></i>
            <h2>Comparison Operators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$eq   - Equal
$ne   - Not Equal
$gt   - Greater Than
$gte  - Greater Than or Equal
$lt   - Less Than
$lte  - Less Than or Equal

Example:

db.users.find({
    age: { $gt: 18 }
})`}</pre>
          </div>
        </div>

        {/* 13. Logical Operators */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>Logical Operators</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$and
$or
$not
$nor

Example:

db.users.find({
    $or: [
        { age: 20 },
        { age: 22 }
    ]
})`}</pre>
          </div>
        </div>

        {/* 14. Projection */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye"></i>
            <h2>Projection</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find(
    {},
    {
        name: 1,
        age: 1
    }
)`}</pre>
          </div>
        </div>

        {/* 15. Sort */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-down-wide-short"></i>
            <h2>Sort Documents</h2>
          </div>

          <div className="html-code-box">
            <pre>{`// Ascending
db.users.find().sort({ age: 1 })

// Descending
db.users.find().sort({ age: -1 })`}</pre>
          </div>
        </div>

        {/* 16. Limit */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list-ol"></i>
            <h2>Limit Results</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find().limit(5)`}</pre>
          </div>
        </div>

        {/* 17. Skip */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-forward"></i>
            <h2>Skip Documents</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find().skip(5)`}</pre>
          </div>
        </div>

        {/* 18. Update One */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>Update One</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.updateOne(
    { name: "Vamsi" },
    {
        $set: {
            age: 23
        }
    }
)`}</pre>
          </div>
        </div>

        {/* 19. Update Many */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen-to-square"></i>
            <h2>Update Many</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.updateMany(
    { role: "Developer" },
    {
        $set: {
            active: true
        }
    }
)`}</pre>
          </div>
        </div>

        {/* 20. Delete One */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Delete One</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.deleteOne({
    name: "Vamsi"
})`}</pre>
          </div>
        </div>

        {/* 21. Delete Many */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash-can"></i>
            <h2>Delete Many</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.deleteMany({
    active: false
})`}</pre>
          </div>
        </div>

        {/* 22. Count Documents */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>Count Documents</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.countDocuments()`}</pre>
          </div>
        </div>

        {/* 23. Distinct */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Distinct Values</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.distinct("role")`}</pre>
          </div>
        </div>

        {/* 24. Exists */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-check"></i>
            <h2>Check Field Exists</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find({
    email: {
        $exists: true
    }
})`}</pre>
          </div>
        </div>

        {/* 25. Regex Search */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>Regex Search</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find({
    name: {
        $regex: "^V",
        $options: "i"
    }
})`}</pre>
          </div>
        </div>

        {/* 26. Array Query */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Array Query</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.find({
    skills: "JavaScript"
})`}</pre>
          </div>
        </div>

        {/* 27. Push Into Array */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>Add Value to Array</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.updateOne(
    { name: "Vamsi" },
    {
        $push: {
            skills: "MongoDB"
        }
    }
)`}</pre>
          </div>
        </div>

        {/* 28. Pull From Array */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-minus"></i>
            <h2>Remove Value From Array</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.updateOne(
    { name: "Vamsi" },
    {
        $pull: {
            skills: "MongoDB"
        }
    }
)`}</pre>
          </div>
        </div>

        {/* 29. Aggregation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-chart-column"></i>
            <h2>Aggregation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.aggregate([
    {
        $match: {
            age: {
                $gte: 18
            }
        }
    }
])`}</pre>
          </div>
        </div>

        {/* 30. Group */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-object-group"></i>
            <h2>Group Documents</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.aggregate([
    {
        $group: {
            _id: "$role",
            total: {
                $sum: 1
            }
        }
    }
])`}</pre>
          </div>
        </div>

        {/* 31. Lookup */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Lookup</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.orders.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }
])`}</pre>
          </div>
        </div>

        {/* 32. Index */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>Create Index</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.createIndex({
    email: 1
})`}</pre>
          </div>
        </div>

        {/* 33. Show Indexes */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Show Indexes</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.getIndexes()`}</pre>
          </div>
        </div>

        {/* 34. Drop Collection */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Drop Collection</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.users.drop()`}</pre>
          </div>
        </div>

            {/* 35. Drop Database */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Drop Database</h2>
          </div>

          <div className="html-code-box">
            <pre>{`db.dropDatabase()`}</pre>
          </div>
        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

          <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#sql">
              <img
                src={showdata[6].img}
                alt={showdata[6].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{showdata[6].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="sql"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         SQL CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}

    <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-solid fa-database"></i>
          </div>

          <div className="html-heading-title">
            <h1>SQL Cheat Sheet</h1>
            <p>Essential SQL commands, queries, joins, functions and database operations.</p>
          </div>
        </div>

        {/* 1. Create Database */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Create Database</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE DATABASE company;`}</pre>
          </div>
        </div>

        {/* 2. Use Database */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>Use Database</h2>
          </div>

          <div className="html-code-box">
            <pre>{`USE company;`}</pre>
          </div>
        </div>

        {/* 3. Create Table */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>Create Table</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  email VARCHAR(150)
);`}</pre>
          </div>
        </div>

        {/* 4. Show Tables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>Show Tables</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SHOW TABLES;`}</pre>
          </div>
        </div>

        {/* 5. Describe Table */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-info"></i>
            <h2>Describe Table</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DESCRIBE users;`}</pre>
          </div>
        </div>

        {/* 6. Insert Data */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>Insert Data</h2>
          </div>

          <div className="html-code-box">
            <pre>{`INSERT INTO users (id, name, email)
VALUES (1, 'Vamsi', 'vamsi@example.com');`}</pre>
          </div>
        </div>

        {/* 7. Insert Multiple Rows */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-plus"></i>
            <h2>Insert Multiple Rows</h2>
          </div>

          <div className="html-code-box">
            <pre>{`INSERT INTO users (id, name, email)
VALUES
(1, 'Vamsi', 'vamsi@example.com'),
(2, 'Ravi', 'ravi@example.com'),
(3, 'Kiran', 'kiran@example.com');`}</pre>
          </div>
        </div>

        {/* 8. Select All */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Select All Data</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT * FROM users;`}</pre>
          </div>
        </div>

        {/* 9. Select Specific Columns */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Select Specific Columns</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT name, email
FROM users;`}</pre>
          </div>
        </div>

        {/* 10. WHERE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>WHERE Condition</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE id = 1;`}</pre>
          </div>
        </div>

        {/* 11. AND */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>AND Operator</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE id > 1 AND name = 'Ravi';`}</pre>
          </div>
        </div>

        {/* 12. OR */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>OR Operator</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE id = 1 OR id = 2;`}</pre>
          </div>
        </div>

        {/* 13. NOT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>NOT Operator</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE NOT id = 1;`}</pre>
          </div>
        </div>

        {/* 14. ORDER BY */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sort"></i>
            <h2>ORDER BY</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
ORDER BY name ASC;`}</pre>
          </div>
        </div>

        {/* 15. DESC */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sort"></i>
            <h2>Descending Order</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
ORDER BY name DESC;`}</pre>
          </div>
        </div>

        {/* 16. DISTINCT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>DISTINCT</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT DISTINCT name
FROM users;`}</pre>
          </div>
        </div>

        {/* 17. LIMIT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-down"></i>
            <h2>LIMIT</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
LIMIT 5;`}</pre>
          </div>
        </div>

        {/* 18. LIKE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>LIKE</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE name LIKE 'V%';`}</pre>
          </div>
        </div>

        {/* 19. BETWEEN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>BETWEEN</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM products
WHERE price BETWEEN 100 AND 500;`}</pre>
          </div>
        </div>

        {/* 20. IN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>IN Operator</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE id IN (1, 2, 3);`}</pre>
          </div>
        </div>

        {/* 21. IS NULL */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>IS NULL</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE email IS NULL;`}</pre>
          </div>
        </div>

        {/* 22. IS NOT NULL */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>IS NOT NULL</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
WHERE email IS NOT NULL;`}</pre>
          </div>
        </div>

        {/* 23. UPDATE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>UPDATE</h2>
          </div>

          <div className="html-code-box">
            <pre>{`UPDATE users
SET name = 'Vamsi Naidana'
WHERE id = 1;`}</pre>
          </div>
        </div>

        {/* 24. DELETE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>DELETE</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DELETE FROM users
WHERE id = 1;`}</pre>
          </div>
        </div>

        {/* 25. ALTER ADD COLUMN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table-columns"></i>
            <h2>Add Column</h2>
          </div>

          <div className="html-code-box">
            <pre>{`ALTER TABLE users
ADD phone VARCHAR(15);`}</pre>
          </div>
        </div>

        {/* 26. ALTER DROP COLUMN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table-columns"></i>
            <h2>Drop Column</h2>
          </div>

          <div className="html-code-box">
            <pre>{`ALTER TABLE users
DROP COLUMN phone;`}</pre>
          </div>
        </div>

        {/* 27. RENAME TABLE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>Rename Table</h2>
          </div>

          <div className="html-code-box">
            <pre>{`ALTER TABLE users
RENAME TO customers;`}</pre>
          </div>
        </div>

        {/* 28. COUNT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>COUNT</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT COUNT(*)
FROM users;`}</pre>
          </div>
        </div>

        {/* 29. SUM */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>SUM</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT SUM(price)
FROM products;`}</pre>
          </div>
        </div>

        {/* 30. AVG */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>AVG</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT AVG(price)
FROM products;`}</pre>
          </div>
        </div>

        {/* 31. MIN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>MIN</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT MIN(price)
FROM products;`}</pre>
          </div>
        </div>

        {/* 32. MAX */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calculator"></i>
            <h2>MAX</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT MAX(price)
FROM products;`}</pre>
          </div>
        </div>

        {/* 33. GROUP BY */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>GROUP BY</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT department, COUNT(*)
FROM employees
GROUP BY department;`}</pre>
          </div>
        </div>

        {/* 34. HAVING */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>HAVING</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;`}</pre>
          </div>
        </div>

        {/* 35. INNER JOIN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>INNER JOIN</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.id = orders.user_id;`}</pre>
          </div>
        </div>

        {/* 36. LEFT JOIN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>LEFT JOIN</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT users.name, orders.amount
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;`}</pre>
          </div>
        </div>

        {/* 37. RIGHT JOIN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>RIGHT JOIN</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT users.name, orders.amount
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;`}</pre>
          </div>
        </div>

        {/* 38. FULL OUTER JOIN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>FULL OUTER JOIN</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
FULL OUTER JOIN orders
ON users.id = orders.user_id;`}</pre>
          </div>
        </div>

        {/* 39. CROSS JOIN */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>CROSS JOIN</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM users
CROSS JOIN products;`}</pre>
          </div>
        </div>

        {/* 40. UNION */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-merge"></i>
            <h2>UNION</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT name FROM customers
UNION
SELECT name FROM suppliers;`}</pre>
          </div>
        </div>

        {/* 41. UNION ALL */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-merge"></i>
            <h2>UNION ALL</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT name FROM customers
UNION ALL
SELECT name FROM suppliers;`}</pre>
          </div>
        </div>

        {/* 42. CASE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>CASE Statement</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT name,
CASE
  WHEN salary >= 50000 THEN 'High'
  WHEN salary >= 30000 THEN 'Medium'
  ELSE 'Low'
END AS salary_level
FROM employees;`}</pre>
          </div>
        </div>

        {/* 43. Subquery */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Subquery</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT *
FROM employees
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
);`}</pre>
          </div>
        </div>

        {/* 44. PRIMARY KEY */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>Primary Key</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`}</pre>
          </div>
        </div>

        {/* 45. AUTO_INCREMENT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>AUTO_INCREMENT</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
);`}</pre>
          </div>
        </div>

        {/* 46. FOREIGN KEY */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>Foreign Key</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id)
  REFERENCES users(id)
);`}</pre>
          </div>
        </div>

        {/* 47. UNIQUE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>UNIQUE</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(150) UNIQUE
);`}</pre>
          </div>
        </div>

        {/* 48. NOT NULL */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check"></i>
            <h2>NOT NULL</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE TABLE users (
  id INT,
  name VARCHAR(100) NOT NULL
);`}</pre>
          </div>
        </div>

        {/* 49. DEFAULT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check"></i>
            <h2>DEFAULT</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE TABLE users (
  id INT,
  status VARCHAR(20) DEFAULT 'active'
);`}</pre>
          </div>
        </div>

        {/* 50. CREATE INDEX */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bolt"></i>
            <h2>Create Index</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE INDEX idx_email
ON users(email);`}</pre>
          </div>
        </div>

        {/* 51. DROP INDEX */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Drop Index</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DROP INDEX idx_email;`}</pre>
          </div>
        </div>

        {/* 52. View */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye"></i>
            <h2>Create View</h2>
          </div>

          <div className="html-code-box">
            <pre>{`CREATE VIEW active_users AS
SELECT id, name, email
FROM users
WHERE status = 'active';`}</pre>
          </div>
        </div>

        {/* 53. Drop View */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye-slash"></i>
            <h2>Drop View</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DROP VIEW active_users;`}</pre>
          </div>
        </div>

        {/* 54. Transaction */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>Transaction</h2>
          </div>

          <div className="html-code-box">
            <pre>{`START TRANSACTION;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

COMMIT;`}</pre>
          </div>
        </div>

        {/* 55. ROLLBACK */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-rotate-left"></i>
            <h2>ROLLBACK</h2>
          </div>

          <div className="html-code-box">
            <pre>{`START TRANSACTION;

UPDATE users
SET name = 'Test'
WHERE id = 1;

ROLLBACK;`}</pre>
          </div>
        </div>

        {/* 56. SQL Comments */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-comment"></i>
            <h2>SQL Comments</h2>
          </div>

          <div className="html-code-box">
            <pre>{`-- Single line comment

/*
  Multi-line comment
*/`}</pre>
          </div>
        </div>

        {/* 57. String Function */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>String Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT
UPPER(name),
LOWER(name),
LENGTH(name)
FROM users;`}</pre>
          </div>
        </div>

        {/* 58. Date Functions */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-calendar"></i>
            <h2>Date Functions</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT
CURRENT_DATE,
CURRENT_TIME,
CURRENT_TIMESTAMP;`}</pre>
          </div>
        </div>

        {/* 59. COALESCE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>COALESCE</h2>
          </div>

          <div className="html-code-box">
            <pre>{`SELECT
COALESCE(email, 'No Email')
FROM users;`}</pre>
          </div>
        </div>

        {/* 60. Drop Table */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>Drop Table</h2>
          </div>

          <div className="html-code-box">
            <pre>{`DROP TABLE users;`}</pre>
          </div>
        </div>

      </div>
    </section>
        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}
          <div className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#angular">
              <img
                src={data[8].img}
                alt={data[8].title}
                className="cheatsheet-img"
              />

              <div className="cheatsheet-content">
                <h6>{data[8].title}</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="angular"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
        ANGULAR  CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}
    <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-brands fa-angular"></i>
          </div>

          <div className="html-heading-title">
            <h1>AngularJS Cheat Sheet</h1>
            <p>
              Essential AngularJS concepts, directives, services, routing,
              forms and API operations.
            </p>
          </div>
        </div>

        {/* 1. Include AngularJS */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-download"></i>
            <h2>Include AngularJS</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>`}</pre>
          </div>
        </div>

        {/* 2. AngularJS App */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Create AngularJS App</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<div ng-app="myApp">
</div>

<script>
  const app = angular.module("myApp", []);
</script>`}</pre>
          </div>
        </div>

        {/* 3. Controller */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user"></i>
            <h2>Controller</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.controller("myCtrl", function($scope) {
  $scope.name = "Vamsi";
});`}</pre>
          </div>
        </div>

        {/* 4. ng-app */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>ng-app</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<body ng-app="myApp">
</body>`}</pre>
          </div>
        </div>

        {/* 5. ng-controller */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-user"></i>
            <h2>ng-controller</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<div ng-controller="myCtrl">
  {{ name }}
</div>`}</pre>
          </div>
        </div>

        {/* 6. Data Binding */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>Data Binding</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<p>{{ name }}</p>`}</pre>
          </div>
        </div>

        {/* 7. ng-model */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-keyboard"></i>
            <h2>ng-model</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<input type="text" ng-model="name">

<p>Hello {{ name }}</p>`}</pre>
          </div>
        </div>

        {/* 8. ng-bind */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-link"></i>
            <h2>ng-bind</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<p ng-bind="name"></p>`}</pre>
          </div>
        </div>

        {/* 9. ng-init */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-play"></i>
            <h2>ng-init</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<div ng-init="name='Vamsi'">
  {{ name }}
</div>`}</pre>
          </div>
        </div>

        {/* 10. ng-click */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>ng-click</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<button ng-click="count = count + 1">
  Click
</button>`}</pre>
          </div>
        </div>

        {/* 11. ng-show */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye"></i>
            <h2>ng-show</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<p ng-show="isVisible">
  Welcome
</p>`}</pre>
          </div>
        </div>

        {/* 12. ng-hide */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye-slash"></i>
            <h2>ng-hide</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<p ng-hide="isHidden">
  Hello AngularJS
</p>`}</pre>
          </div>
        </div>

        {/* 13. ng-if */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>ng-if</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<p ng-if="isLoggedIn">
  Dashboard
</p>`}</pre>
          </div>
        </div>

        {/* 14. ng-repeat */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>ng-repeat</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<ul>
  <li ng-repeat="user in users">
    {{ user.name }}
  </li>
</ul>`}</pre>
          </div>
        </div>

        {/* 15. ng-class */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-paintbrush"></i>
            <h2>ng-class</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<div ng-class="{active: isActive}">
  Content
</div>`}</pre>
          </div>
        </div>

        {/* 16. ng-style */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-palette"></i>
            <h2>ng-style</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<p ng-style="{'color': textColor}">
  Text
</p>`}</pre>
          </div>
        </div>

        {/* 17. ng-disabled */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-ban"></i>
            <h2>ng-disabled</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<button ng-disabled="isDisabled">
  Submit
</button>`}</pre>
          </div>
        </div>

        {/* 18. ng-readonly */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>ng-readonly</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<input ng-readonly="isReadonly"
       ng-model="name">`}</pre>
          </div>
        </div>

        {/* 19. ng-change */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h2>ng-change</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<input
  ng-model="name"
  ng-change="nameChanged()"
>`}</pre>
          </div>
        </div>

        {/* 20. ng-submit */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-paper-plane"></i>
            <h2>ng-submit</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<form ng-submit="submitForm()">
  <input ng-model="username">
  <button type="submit">Submit</button>
</form>`}</pre>
          </div>
        </div>

        {/* 21. ng-options */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>ng-options</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<select
  ng-model="selectedUser"
  ng-options="user.name for user in users">
</select>`}</pre>
          </div>
        </div>

        {/* 22. Filters */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>Filters</h2>
          </div>

          <div className="html-code-box">
            <pre>{`{{ name | uppercase }}

{{ name | lowercase }}

{{ price | currency }}`}</pre>
          </div>
        </div>

        {/* 23. Filter Search */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2>Filter Search</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<li ng-repeat="user in users | filter:search">
  {{ user.name }}
</li>`}</pre>
          </div>
        </div>

        {/* 24. OrderBy Filter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sort"></i>
            <h2>orderBy Filter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<li ng-repeat="user in users | orderBy:'name'">
  {{ user.name }}
</li>`}</pre>
          </div>
        </div>

        {/* 25. limitTo Filter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-scissors"></i>
            <h2>limitTo Filter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`{{ name | limitTo:5 }}`}</pre>
          </div>
        </div>

        {/* 26. Custom Filter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>Custom Filter</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.filter("greet", function() {
  return function(name) {
    return "Hello " + name;
  };
});`}</pre>
          </div>
        </div>

        {/* 27. Factory */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>Factory</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.factory("userService", function() {
  return {
    name: "Vamsi"
  };
});`}</pre>
          </div>
        </div>

        {/* 28. Service */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>Service</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.service("userService", function() {
  this.getName = function() {
    return "Vamsi";
  };
});`}</pre>
          </div>
        </div>

        {/* 29. $http GET */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>$http GET</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$http.get("/api/users")
  .then(function(response) {
    $scope.users = response.data;
  });`}</pre>
          </div>
        </div>

        {/* 30. $http POST */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <h2>$http POST</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$http.post("/api/users", user)
  .then(function(response) {
    console.log(response.data);
  });`}</pre>
          </div>
        </div>

        {/* 31. $http PUT */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-pen"></i>
            <h2>$http PUT</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$http.put("/api/users/1", user)
  .then(function(response) {
    console.log(response.data);
  });`}</pre>
          </div>
        </div>

        {/* 32. $http DELETE */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-trash"></i>
            <h2>$http DELETE</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$http.delete("/api/users/1")
  .then(function(response) {
    console.log(response.data);
  });`}</pre>
          </div>
        </div>

        {/* 33. Promise */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-clock"></i>
            <h2>Promise</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$http.get("/api/users")
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });`}</pre>
          </div>
        </div>

        {/* 34. $scope */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-database"></i>
            <h2>$scope</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.controller("myCtrl", function($scope) {
  $scope.name = "Vamsi";
  $scope.age = 25;
});`}</pre>
          </div>
        </div>

        {/* 35. $rootScope */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-globe"></i>
            <h2>$rootScope</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.run(function($rootScope) {
  $rootScope.appName = "DevKit";
});`}</pre>
          </div>
        </div>

        {/* 36. $watch */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye"></i>
            <h2>$watch</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$scope.$watch("name", function(newValue, oldValue) {
  console.log(newValue);
});`}</pre>
          </div>
        </div>

        {/* 37. $on */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-broadcast-tower"></i>
            <h2>$on Event</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$scope.$on("userUpdated", function(event, data) {
  console.log(data);
});`}</pre>
          </div>
        </div>

        {/* 38. $emit */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-paper-plane"></i>
            <h2>$emit</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$scope.$emit("userUpdated", {
  name: "Vamsi"
});`}</pre>
          </div>
        </div>

        {/* 39. $broadcast */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bullhorn"></i>
            <h2>$broadcast</h2>
          </div>

          <div className="html-code-box">
            <pre>{`$scope.$broadcast("userUpdated", {
  name: "Vamsi"
});`}</pre>
          </div>
        </div>

        {/* 40. Component */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h2>Component</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.component("userCard", {
  template: "<h2>{{ $ctrl.name }}</h2>",
  controller: function() {
    this.name = "Vamsi";
  }
});`}</pre>
          </div>
        </div>

        {/* 41. Directive */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Custom Directive</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.directive("helloWorld", function() {
  return {
    template: "<h2>Hello World</h2>"
  };
});`}</pre>
          </div>
        </div>

        {/* 42. Template */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-code"></i>
            <h2>Template</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.directive("welcome", function() {
  return {
    template: "<p>Welcome to AngularJS</p>"
  };
});`}</pre>
          </div>
        </div>

        {/* 43. Routing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-route"></i>
            <h2>AngularJS Routing</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "home.html"
    })
    .when("/about", {
      templateUrl: "about.html"
    });
});`}</pre>
          </div>
        </div>

        {/* 44. ng-view */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-window-maximize"></i>
            <h2>ng-view</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<div ng-view></div>`}</pre>
          </div>
        </div>

        {/* 45. Form Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check-circle"></i>
            <h2>Form Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<form name="myForm" novalidate>
  <input
    type="email"
    name="email"
    ng-model="email"
    required
  >

  <span ng-show="myForm.email.$invalid">
    Invalid Email
  </span>
</form>`}</pre>
          </div>
        </div>

        {/* 46. Required Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-asterisk"></i>
            <h2>Required Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<input
  type="text"
  ng-model="username"
  required
>`}</pre>
          </div>
        </div>

        {/* 47. Email Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-envelope"></i>
            <h2>Email Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<input
  type="email"
  ng-model="email"
  required
>`}</pre>
          </div>
        </div>

        {/* 48. Number Validation */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-hashtag"></i>
            <h2>Number Validation</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<input
  type="number"
  ng-model="age"
  min="18"
  max="60"
>`}</pre>
          </div>
        </div>

        {/* 49. $location */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-location-arrow"></i>
            <h2>$location</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.controller("myCtrl", function($scope, $location) {

  $scope.goHome = function() {
    $location.path("/home");
  };

});`}</pre>
          </div>
        </div>

        {/* 50. $timeout */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-clock"></i>
            <h2>$timeout</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.controller("myCtrl", function($scope, $timeout) {

  $timeout(function() {
    $scope.message = "Hello";
  }, 2000);

});`}</pre>
          </div>
        </div>

        {/* 51. $interval */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-repeat"></i>
            <h2>$interval</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.controller("myCtrl", function($scope, $interval) {

  $interval(function() {
    $scope.count++;
  }, 1000);

});`}</pre>
          </div>
        </div>

        {/* 52. Dependency Injection */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h2>Dependency Injection</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.controller("myCtrl",
  ["$scope", "$http", function($scope, $http) {

    $http.get("/api/users");

  }]
);`}</pre>
          </div>
        </div>

        {/* 53. Module Dependency */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cubes"></i>
            <h2>Module Dependency</h2>
          </div>

          <div className="html-code-box">
            <pre>{`const app = angular.module("myApp", [
  "ngRoute"
]);`}</pre>
          </div>
        </div>

        {/* 54. ng-cloak */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye-slash"></i>
            <h2>ng-cloak</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<div ng-cloak>
  {{ name }}
</div>`}</pre>
          </div>
        </div>

        {/* 55. ng-switch */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>ng-switch</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<div ng-switch="role">

  <p ng-switch-when="admin">
    Admin
  </p>

  <p ng-switch-default>
    User
  </p>

</div>`}</pre>
          </div>
        </div>

        {/* 56. ng-class-even */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-paintbrush"></i>
            <h2>ng-class-even</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<li
  ng-repeat="user in users"
  ng-class-even="'even'">
  {{ user.name }}
</li>`}</pre>
          </div>
        </div>

        {/* 57. ng-class-odd */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-paintbrush"></i>
            <h2>ng-class-odd</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<li
  ng-repeat="user in users"
  ng-class-odd="'odd'">
  {{ user.name }}
</li>`}</pre>
          </div>
        </div>

        {/* 58. $filter Service */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-filter"></i>
            <h2>$filter Service</h2>
          </div>

          <div className="html-code-box">
            <pre>{`app.controller("myCtrl", function($scope, $filter) {

  $scope.name = $filter("uppercase")("vamsi");

});`}</pre>
          </div>
        </div>

        {/* 59. Debugging */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-bug"></i>
            <h2>Debugging</h2>
          </div>

          <div className="html-code-box">
            <pre>{`console.log($scope.users);

console.log($scope.name);`}</pre>
          </div>
        </div>

        {/* 60. Complete AngularJS Example */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Complete AngularJS Example</h2>
          </div>

          <div className="html-code-box">
            <pre>{`<!DOCTYPE html>
<html ng-app="myApp">

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>

<body ng-controller="myCtrl">

  <h2>{{ title }}</h2>

  <input
    type="text"
    ng-model="name"
    placeholder="Enter name"
  >

  <p>Hello {{ name }}</p>

  <button ng-click="count = count + 1">
    Click
  </button>

  <p>Count: {{ count }}</p>

  <script>
    const app = angular.module("myApp", []);

    app.controller("myCtrl", function($scope) {
      $scope.title = "AngularJS";
      $scope.name = "";
      $scope.count = 0;
    });
  </script>

</body>
</html>`}</pre>
          </div>
        </div>

      </div>
    </section>

        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}
          <div   className="cheatsheet-card " data-bs-toggle="modal"
  data-bs-target="#typesc">
              <img
                src="/Typescript.webp"
                alt={data[3].title}
                className="cheatsheet-img"
                style={{ width: "50px", height: "50px" }}

              />

              <div className="cheatsheet-content">
                <h6>TypeScript</h6>
                <p>Cheat Sheets</p>
              </div>
            </div>
              {/* model- content */}
            <div style={{ marginTop: "150px" }}
  className="modal fade "
  id="typesc"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
         TYPESCRIPT CHEET SHEETS
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {/* content */}

 <section className="html-cheatsheet-section py-4 py-md-5">
      <div className="container">

        {/* Heading */}
        <div className="html-cheatsheet-heading text-center mb-4 mb-md-5">
          <div className="html-heading-icon">
            <i className="fa-solid fa-code"></i>
          </div>

          <div className="html-heading-title">
            <h1>TypeScript Cheat Sheet</h1>
            <p>
              Essential TypeScript syntax, types, interfaces, classes,
              functions, generics and advanced concepts.
            </p>
          </div>
        </div>

        {/* 1. Install TypeScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-download"></i>
            <h2>Install TypeScript</h2>
          </div>
          <div className="html-code-box">
            <pre>{`npm install -g typescript`}</pre>
          </div>
        </div>

        {/* 2. Check Version */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Check TypeScript Version</h2>
          </div>
          <div className="html-code-box">
            <pre>{`tsc --version`}</pre>
          </div>
        </div>

        {/* 3. Create Config */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gear"></i>
            <h2>Create tsconfig.json</h2>
          </div>
          <div className="html-code-box">
            <pre>{`tsc --init`}</pre>
          </div>
        </div>

        {/* 4. Compile TypeScript */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>Compile TypeScript</h2>
          </div>
          <div className="html-code-box">
            <pre>{`tsc app.ts`}</pre>
          </div>
        </div>

        {/* 5. Watch Mode */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-eye"></i>
            <h2>Watch Mode</h2>
          </div>
          <div className="html-code-box">
            <pre>{`tsc --watch`}</pre>
          </div>
        </div>

        {/* 6. Hello World */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Hello World</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let message: string = "Hello TypeScript";

console.log(message);`}</pre>
          </div>
        </div>

        {/* 7. Variables */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-box"></i>
            <h2>Variables</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let name: string = "Vamsi";
const age: number = 25;
let isActive: boolean = true;`}</pre>
          </div>
        </div>

        {/* 8. String */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-font"></i>
            <h2>String Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let username: string = "Vamsi";`}</pre>
          </div>
        </div>

        {/* 9. Number */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-hashtag"></i>
            <h2>Number Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let age: number = 25;
let price: number = 499.99;`}</pre>
          </div>
        </div>

        {/* 10. Boolean */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-toggle-on"></i>
            <h2>Boolean Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let isLoggedIn: boolean = true;`}</pre>
          </div>
        </div>

        {/* 11. Array */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Array</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let numbers: number[] = [10, 20, 30];

let names: string[] = [
  "Vamsi",
  "Ravi",
  "Kiran"
];`}</pre>
          </div>
        </div>

        {/* 12. Array Generic */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Array Generic</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let numbers: Array<number> = [1, 2, 3];

let names: Array<string> = [
  "Vamsi",
  "Ravi"
];`}</pre>
          </div>
        </div>

        {/* 13. Tuple */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>Tuple</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let user: [string, number] = [
  "Vamsi",
  25
];`}</pre>
          </div>
        </div>

        {/* 14. Object */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>Object Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let user: {
  name: string;
  age: number;
} = {
  name: "Vamsi",
  age: 25
};`}</pre>
          </div>
        </div>

        {/* 15. Any */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-question"></i>
            <h2>any</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let value: any = "Hello";

value = 100;
value = true;`}</pre>
          </div>
        </div>

        {/* 16. Unknown */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-question-circle"></i>
            <h2>unknown</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}`}</pre>
          </div>
        </div>

        {/* 17. Void */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-ban"></i>
            <h2>void</h2>
          </div>
          <div className="html-code-box">
            <pre>{`function logMessage(): void {
  console.log("Hello");
}`}</pre>
          </div>
        </div>

        {/* 18. Null and Undefined */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>null and undefined</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let value1: null = null;
let value2: undefined = undefined;`}</pre>
          </div>
        </div>

        {/* 19. Union Type */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-branch"></i>
            <h2>Union Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let id: string | number;

id = "101";
id = 101;`}</pre>
          </div>
        </div>

        {/* 20. Literal Type */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-quote-left"></i>
            <h2>Literal Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let direction: "left" | "right";

direction = "left";`}</pre>
          </div>
        </div>

        {/* 21. Type Alias */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-tag"></i>
            <h2>Type Alias</h2>
          </div>
          <div className="html-code-box">
            <pre>{`type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Vamsi",
  age: 25
};`}</pre>
          </div>
        </div>

        {/* 22. Interface */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Interface</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Vamsi",
  age: 25
};`}</pre>
          </div>
        </div>

        {/* 23. Optional Property */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>Optional Property</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Vamsi"
};`}</pre>
          </div>
        </div>

        {/* 24. Readonly */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>readonly</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Vamsi"
};

// user.id = 2; // Error`}</pre>
          </div>
        </div>

        {/* 25. Function Parameters */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-function"></i>
            <h2>Function Parameters</h2>
          </div>
          <div className="html-code-box">
            <pre>{`function add(
  a: number,
  b: number
): number {
  return a + b;
}`}</pre>
          </div>
        </div>

        {/* 26. Optional Parameter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>Optional Parameter</h2>
          </div>
          <div className="html-code-box">
            <pre>{`function greet(name?: string): void {
  console.log(name);
}`}</pre>
          </div>
        </div>

        {/* 27. Default Parameter */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sliders"></i>
            <h2>Default Parameter</h2>
          </div>
          <div className="html-code-box">
            <pre>{`function greet(
  name: string = "Guest"
) {
  console.log(name);
}`}</pre>
          </div>
        </div>

        {/* 28. Arrow Function */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-arrow-right"></i>
            <h2>Arrow Function</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const add = (
  a: number,
  b: number
): number => {
  return a + b;
};`}</pre>
          </div>
        </div>

        {/* 29. Function Type */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Function Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let operation: (
  a: number,
  b: number
) => number;

operation = (a, b) => a + b;`}</pre>
          </div>
        </div>

        {/* 30. Interface Function */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Interface Function</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface Calculator {
  add(a: number, b: number): number;
}`}</pre>
          </div>
        </div>

        {/* 31. Enum */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list-ol"></i>
            <h2>Enum</h2>
          </div>
          <div className="html-code-box">
            <pre>{`enum Role {
  Admin,
  User,
  Guest
}

let role: Role = Role.Admin;`}</pre>
          </div>
        </div>

        {/* 32. String Enum */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>String Enum</h2>
          </div>
          <div className="html-code-box">
            <pre>{`enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}`}</pre>
          </div>
        </div>

        {/* 33. Class */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cube"></i>
            <h2>Class</h2>
          </div>
          <div className="html-code-box">
            <pre>{`class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Vamsi");`}</pre>
          </div>
        </div>

        {/* 34. Access Modifiers */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>Access Modifiers</h2>
          </div>
          <div className="html-code-box">
            <pre>{`class User {
  public name: string;
  private password: string;
  protected age: number;

  constructor(
    name: string,
    password: string,
    age: number
  ) {
    this.name = name;
    this.password = password;
    this.age = age;
  }
}`}</pre>
          </div>
        </div>

        {/* 35. Getters and Setters */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sliders"></i>
            <h2>Getters and Setters</h2>
          </div>
          <div className="html-code-box">
            <pre>{`class User {
  private _name = "";

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}`}</pre>
          </div>
        </div>

        {/* 36. Inheritance */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-sitemap"></i>
            <h2>Inheritance</h2>
          </div>
          <div className="html-code-box">
            <pre>{`class Animal {
  move() {
    console.log("Moving");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Bark");
  }
}`}</pre>
          </div>
        </div>

        {/* 37. Abstract Class */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Abstract Class</h2>
          </div>
          <div className="html-code-box">
            <pre>{`abstract class Animal {
  abstract sound(): void;

  move() {
    console.log("Moving");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}`}</pre>
          </div>
        </div>

        {/* 38. Implements */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check"></i>
            <h2>implements</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface Person {
  name: string;
  greet(): void;
}

class User implements Person {
  name = "Vamsi";

  greet() {
    console.log("Hello");
  }
}`}</pre>
          </div>
        </div>

        {/* 39. Generics */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Generics</h2>
          </div>
          <div className="html-code-box">
            <pre>{`function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);`}</pre>
          </div>
        </div>

        {/* 40. Generic Array */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-list"></i>
            <h2>Generic Array</h2>
          </div>
          <div className="html-code-box">
            <pre>{`function getFirst<T>(items: T[]): T {
  return items[0];
}

getFirst<number>([10, 20, 30]);`}</pre>
          </div>
        </div>

        {/* 41. Generic Interface */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-layer-group"></i>
            <h2>Generic Interface</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<string> = {
  data: "Success",
  success: true
};`}</pre>
          </div>
        </div>

        {/* 42. Type Assertion */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check"></i>
            <h2>Type Assertion</h2>
          </div>
          <div className="html-code-box">
            <pre>{`let value: unknown = "Hello";

let text = value as string;

console.log(text.length);`}</pre>
          </div>
        </div>

        {/* 43. keyof */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-key"></i>
            <h2>keyof</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  name: string;
  age: number;
}

type UserKey = keyof User;

// "name" | "age"`}</pre>
          </div>
        </div>

        {/* 44. typeof */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>typeof</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const user = {
  name: "Vamsi",
  age: 25
};

type User = typeof user;`}</pre>
          </div>
        </div>

        {/* 45. Utility Partial */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-wrench"></i>
            <h2>Partial</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  name: string;
  age: number;
}

const user: Partial<User> = {
  name: "Vamsi"
};`}</pre>
          </div>
        </div>

        {/* 46. Required */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check"></i>
            <h2>Required</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  name?: string;
  age?: number;
}

const user: Required<User> = {
  name: "Vamsi",
  age: 25
};`}</pre>
          </div>
        </div>

        {/* 47. Pick */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-hand-pointer"></i>
            <h2>Pick</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  name: string;
  age: number;
  email: string;
}

type UserInfo = Pick<User, "name" | "email">;`}</pre>
          </div>
        </div>

        {/* 48. Omit */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-minus"></i>
            <h2>Omit</h2>
          </div>
          <div className="html-code-box">
            <pre>{`type UserInfo = Omit<User, "age">;`}</pre>
          </div>
        </div>

        {/* 49. Record */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-table"></i>
            <h2>Record</h2>
          </div>
          <div className="html-code-box">
            <pre>{`type Users = Record<string, number>;

const users: Users = {
  Vamsi: 25,
  Ravi: 30
};`}</pre>
          </div>
        </div>

        {/* 50. Readonly Utility */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-lock"></i>
            <h2>Readonly Utility</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const numbers: ReadonlyArray<number> = [
  1, 2, 3
];`}</pre>
          </div>
        </div>

        {/* 51. Intersection Type */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code-merge"></i>
            <h2>Intersection Type</h2>
          </div>
          <div className="html-code-box">
            <pre>{`type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;`}</pre>
          </div>
        </div>

        {/* 52. Type Guard */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-shield"></i>
            <h2>Type Guard</h2>
          </div>
          <div className="html-code-box">
            <pre>{`function printValue(value: string | number) {

  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }

}`}</pre>
          </div>
        </div>

        {/* 53. instanceof */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-check-circle"></i>
            <h2>instanceof</h2>
          </div>
          <div className="html-code-box">
            <pre>{`class User {}

const user = new User();

if (user instanceof User) {
  console.log("User object");
}`}</pre>
          </div>
        </div>

        {/* 54. Optional Chaining */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-question"></i>
            <h2>Optional Chaining</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const user = {
  profile: {
    name: "Vamsi"
  }
};

console.log(user.profile?.name);`}</pre>
          </div>
        </div>

        {/* 55. Nullish Coalescing */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-question"></i>
            <h2>Nullish Coalescing</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const name = null;

const username = name ?? "Guest";

console.log(username);`}</pre>
          </div>
        </div>

        {/* 56. Modules Export */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-export"></i>
            <h2>Export</h2>
          </div>
          <div className="html-code-box">
            <pre>{`export const name: string = "Vamsi";

export function add(
  a: number,
  b: number
) {
  return a + b;
}`}</pre>
          </div>
        </div>

        {/* 57. Modules Import */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-file-import"></i>
            <h2>Import</h2>
          </div>
          <div className="html-code-box">
            <pre>{`import {
  name,
  add
} from "./utils";`}</pre>
          </div>
        </div>

        {/* 58. Async Function */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-clock"></i>
            <h2>Async Function</h2>
          </div>
          <div className="html-code-box">
            <pre>{`async function getUsers(): Promise<string[]> {
  return ["Vamsi", "Ravi"];
}`}</pre>
          </div>
        </div>

        {/* 59. Fetch API */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <h2>Fetch API</h2>
          </div>
          <div className="html-code-box">
            <pre>{`async function getUsers() {

  const response = await fetch("/api/users");

  const users: User[] =
    await response.json();

  console.log(users);
}`}</pre>
          </div>
        </div>

        {/* 60. Error Handling */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>Error Handling</h2>
          </div>
          <div className="html-code-box">
            <pre>{`try {

  throw new Error("Something went wrong");

} catch (error) {

  console.error(error);

}`}</pre>
          </div>
        </div>

        {/* 61. TypeScript with DOM */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-window-maximize"></i>
            <h2>TypeScript DOM</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const button =
  document.querySelector("button");

button?.addEventListener("click", () => {
  console.log("Clicked");
});`}</pre>
          </div>
        </div>

        {/* 62. Non-null Assertion */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-circle-exclamation"></i>
            <h2>Non-null Assertion</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const element =
  document.getElementById("app")!;

element.innerHTML = "Hello";`}</pre>
          </div>
        </div>

        {/* 63. tsconfig Strict Mode */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gear"></i>
            <h2>Strict Mode</h2>
          </div>
          <div className="html-code-box">
            <pre>{`{
  "compilerOptions": {
    "strict": true
  }
}`}</pre>
          </div>
        </div>

        {/* 64. Target Configuration */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-gears"></i>
            <h2>Target Configuration</h2>
          </div>
          <div className="html-code-box">
            <pre>{`{
  "compilerOptions": {
    "target": "ES2020"
  }
}`}</pre>
          </div>
        </div>

        {/* 65. Module Configuration */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-cubes"></i>
            <h2>Module Configuration</h2>
          </div>
          <div className="html-code-box">
            <pre>{`{
  "compilerOptions": {
    "module": "ESNext"
  }
}`}</pre>
          </div>
        </div>

        {/* 66. Source Map */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-map"></i>
            <h2>Source Map</h2>
          </div>
          <div className="html-code-box">
            <pre>{`{
  "compilerOptions": {
    "sourceMap": true
  }
}`}</pre>
          </div>
        </div>

        {/* 67. Exclude Files */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-ban"></i>
            <h2>Exclude Files</h2>
          </div>
          <div className="html-code-box">
            <pre>{`{
  "exclude": [
    "node_modules",
    "dist"
  ]
}`}</pre>
          </div>
        </div>

        {/* 68. React TypeScript Props */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-react"></i>
            <h2>React Props with TypeScript</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface Props {
  name: string;
  age: number;
}

const User = ({
  name,
  age
}: Props) => {
  return (
    <h2>
      {name} - {age}
    </h2>
  );
};`}</pre>
          </div>
        </div>

        {/* 69. React useState */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-brands fa-react"></i>
            <h2>React useState with TypeScript</h2>
          </div>
          <div className="html-code-box">
            <pre>{`const [count, setCount] =
  useState<number>(0);

setCount(count + 1);`}</pre>
          </div>
        </div>

        {/* 70. Complete Example */}
        <div className="html-cheat-card">
          <div className="html-card-title">
            <i className="fa-solid fa-code"></i>
            <h2>Complete TypeScript Example</h2>
          </div>
          <div className="html-code-box">
            <pre>{`interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(user: User): string {
  return user.name;
}

const user: User = {
  id: 1,
  name: "Vamsi",
  email: "vamsi@example.com"
};

console.log(getUser(user));`}</pre>
          </div>
        </div>

      </div>
    </section>
        {/* content */}
      </div>

    </div>
  </div>
</div>

{/* model */}

{/* model */}
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Cheetshets
