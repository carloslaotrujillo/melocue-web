import Link from "next/link";
import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import menuStyles from "../styles/Menu.module.css";

function Menu() {
  
  const [expanded, setExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState()

  useEffect(()=> {    
    window.addEventListener('resize', ()=> {
      setWindowWidth(window.innerWidth);
    })
  }, [])
  
  const toggleNavBar = () =>  {
    if(windowWidth <= "991" ) {
      setExpanded(!expanded);
    }
  }
  
  return (
    <Navbar expand="lg" variant="dark" className={menuStyles.container} expanded={expanded}>      
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavBar}/>
      <Navbar.Collapse id="basic-navbar-nav" className={menuStyles.collapse}>
        <Nav className={menuStyles.navLinks}>
          <Link href="/">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>Home</a>
          </Link>
          <Link href="/recommend">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>Recommend Music</a>
          </Link>
          <Link href="/contact">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>Contact</a>
          </Link>
          <Link href="/about">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>About</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
