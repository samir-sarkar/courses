
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

import styles from "./Home.module.scss";

const Home = (props) => {
  const {data} = props;
  return (
    <div className={styles.container}>
      <LeftPanel data={data}/>
      <RightPanel data={data}/>
    </div>
  )
};

export default Home;