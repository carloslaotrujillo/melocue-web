import Menu from "./Menu";
import Player from "./Player";
import layoutStyles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <Menu />
      {children}
      <Player />
    </div>
  );
}

export default Layout;
