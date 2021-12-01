import Menu from "./Menu";
import layoutStyles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <div className={layoutStyles.container}>
        <Menu />
        {children}        
      </div>
    </>
  );
}

export default Layout;
