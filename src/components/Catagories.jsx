
import {data} from "../components/data/catagories";
 import {showdata} from "../components/data/catagories";

const Catagories = () => {
   return (
    <div>
        
    


  <section className="categories-section py-5 left-animation" style={{backgroundColor:"red !"}} id="categories">
      <div className="container">

        {/* Heading */}
          <div className="project-heading text-center mb-4 mb-md-5">

          <span className="project-badge right-animation">
            <i className="fa-solid fa-code"></i>
            Categories
          </span>

          

          <p>
            Practice your development skills by learning new technologies.
          </p>

        </div>

        {/* Row 1 */}
<div className="marquee-wrapper">
  <marquee
    direction="left"
    scrollamount="7"
    behavior="scroll"
     loop="infinite"
 
  >
    <span className="category-item">
      <i className="fa-brands fa-html5 html-icon"></i>
      <span>HTML</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-css3-alt css-icon"></i>
      <span>CSS</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-js js-icon"></i>
      <span>JavaScript</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-bootstrap bootstrap-icon"></i>
      <span>Bootstrap</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-react react-icon"></i>
      <span>React</span>
    </span>

    <span className="category-item">
      <i className="fa-solid fa-leaf mongodb-icon"></i>
      <span>MongoDB</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-node-js node-icon"></i>
      <span>Node.js</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-node express-icon"></i>
      <span>Express.js</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-angular angular-icon"></i>
      <span>Angular</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-python python-icon"></i>
      <span>Python</span>
    </span>
  </marquee>
</div>


{/* Row 2 */}
<div className="marquee-wrapper mt-4">
  <marquee
   direction="right"
    scrollamount="7"
    behavior="scroll"
     loop="infinite"
   
  >
    <span className="category-item">
      <i className="fa-brands fa-java java-icon"></i>
      <span>Java</span>
    </span>

    <span className="category-item">
      <i className="fa-solid fa-server django-icon"></i>
      <span>Django</span>
    </span>

    <span className="category-item">
      <i className="fa-solid fa-wind tailwind-icon"></i>
      <span>Tailwind CSS</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-github github-icon"></i>
      <span>GitHub</span>
    </span>

    <span className="category-item">
      <i className="fa-brands fa-git-alt git-icon"></i>
      <span>Git</span>
    </span>

    <span className="category-item">
      <i className="fa-solid fa-code typescript-icon"></i>
      <span>TypeScript</span>
    </span>

    <span className="category-item">
      <i className="fa-solid fa-database mysql-icon"></i>
      <span>MySQL</span>
    </span>

    <span className="category-item">
      <i className="fa-solid fa-leaf spring-icon"></i>
      <span>Spring Boot</span>
    </span>
  </marquee>
</div>

       

      </div>
    </section>
    </div>
    
  );
};

export default Catagories;