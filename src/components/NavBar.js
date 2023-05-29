import React from "react";
import Home from "./Home";
import About from "./About";
import ProjectItem from "./ProjectItem";

function NavBar() {
 const links = ["home", "about", "projects"];

  return (
  <nav>
    
 <a key={Home.id} href="#home">home</a>
 <a key={About.id} href="#about">about</a>
 <a key={ProjectItem.id} href="#projects">projects</a>
  
   
            
  
  </nav>);
}

export default NavBar;

