import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Catagories from './components/Catagories'
import Getintouch from './components/Getintouch'
import Ideas from './components/Ideas'
import Learning from './components/Learning'
import Roadmaps from './components/Roadmaps'
import Cheetshets from './components/Cheetshets'
import Commands from './components/Commands'
import Resources from './components/Resources'
import Login from './components/Login'
import Loder from './components/Loder'
import './App.css'
import './index.css'
 
 
import Developer from './components/Developer'
 
 

function App() {

  
  
  const [mode, setMode] = useState(false);
   useEffect(() => {
    const animationElements = document.querySelectorAll(
      ".left-animation, .right-animation, .bottom-animation, .top-animation"
    );

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    animationElements.forEach((element) => {
      animationObserver.observe(element);
    });

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  // loading loder

   const [pageLoading, setPageLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setPageLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);


  return (
    <div className={mode ? "dark-theme" : "light-theme"}>

  {/* Loader */}
    {pageLoading && <Loder />}

<Navbar mode={mode} setMode={setMode} />
{/* <Main /> */}
<Catagories/>
<Resources/>
<Commands/>
<Developer/>
<Cheetshets />
<Roadmaps/>
<Learning/>
<Ideas/>
<Getintouch/>
<Footer/>


    </div>
  )
}

export default App
