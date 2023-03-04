import React, { useState } from "react";
function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  
    return (
        <header className={isVisible ? "navbar" : "navbar hidden"}>
      <div className="page-title">
        <h1>Husaam NT</h1>  
      </div>
      <nav>
        <h1 className="nav-item">CV</h1>
        <h1 className="nav-item">Linkedin</h1>
        <h1 className="nav-item">GitHub</h1>
      </nav>
    </header>
    )
    }