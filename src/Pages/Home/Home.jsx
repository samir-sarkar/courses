import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <LeftPanel />
      <RightPanel />
    </div>
  )
};

export default Home;