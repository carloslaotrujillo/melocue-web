import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";
import menuStyles from "../styles/Menu.module.css";

function Menu() {
  return (
    <Navbar expand="lg" variant="dark" className={menuStyles.container}>
      <Link href="/">
        <a className={menuStyles.brand}>Melocue Radio</a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={menuStyles.collapse}>
        <Nav className={menuStyles.navLinks}>
          <Link href="/">
            <a className={menuStyles.anchor}>Home</a>
          </Link>
          {/* <Link href="/playlist">
            <a className={menuStyles.anchor + " " + menuStyles.playlist}>
              Playlist
            </a>
          </Link>
          <Link href="/recommend">
            <a className={menuStyles.anchor}>Recommend Music</a>
          </Link>
          <Link href="/contact">
            <a className={menuStyles.anchor}>Contact</a>
          </Link>
          <Link href="/about">
            <a className={menuStyles.anchor}>About</a>
          </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
