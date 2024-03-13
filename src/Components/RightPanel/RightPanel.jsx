import SideContent from "../../Components/SideContent/SideContent";
import styles from "./RightPanel.module.scss";

const RightPanel = () => {
  return (
    <div className={styles.container}>
      <SideContent />
    </div>
  )
};

export default RightPanel;