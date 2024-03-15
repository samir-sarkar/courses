import SideContent from "../../Components/SideContent/SideContent";
import styles from "./RightPanel.module.scss";

const RightPanel = (props) => {
  const {data} = props;
  return (
    <div className={styles.container}>
      <SideContent data={data}/>
    </div>
  )
};

export default RightPanel;