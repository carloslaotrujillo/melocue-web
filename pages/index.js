import Player from "../components/Player";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <h1 className={homeStyles.h1}></h1>
      <Player />
    </div>
  );
}
