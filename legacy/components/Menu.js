import Link from "next/link";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import menuStyles from "../styles/Menu.module.css";

function Menu() {
  const viewportBreak = 991;
  const [expandNav, setExpandNav] = useState(false);

  const toggleNavBar = () => {
    if (window.innerWidth <= viewportBreak) {
      setExpandNav(!expandNav);
    }
  };

  const [userLogged, setUserLogged] = useState(false) // Temp Value

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={menuStyles.container}
      expanded={expandNav}
    >
      <h1 className={menuStyles.brand}>Melocue</h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavBar} />
      <Navbar.Collapse id="basic-navbar-nav" className={menuStyles.collapse}>
        <Nav className={menuStyles.navLinks}>
          <Link href="/">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>
              Home
            </a>
          </Link>
          <Link href="/login">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>
              Log In
            </a>
          </Link>
          <Link href="/signup">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>
              Sign Up
            </a>
          </Link>
          <Link href="/recommend">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>
              Recommend Music
            </a>
          </Link>
          <Link href="/donate">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>
              Donate
            </a>
          </Link>
          <Link href="/contact">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>
              Contact
            </a>
          </Link>
          <Link href="/about">
            <a className={menuStyles.anchor} onClick={toggleNavBar}>
              About
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
