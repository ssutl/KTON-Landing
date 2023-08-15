import MembershipCard from "../../Components/MembershipCard";
import styles from "../../styles/MembershipPage.module.scss";

const Membership = () => {
  return (
    <div className={styles.membershipPage}>
      <MembershipCard type="Free" />
      <MembershipCard type="Premium" />
    </div>
  );
};

export default Membership;
