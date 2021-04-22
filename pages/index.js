import Player from "../components/Player";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Player />
    </div>
  );
}
