import Navbar from "@/Components/Navbar";
import MembershipCard from "../../Components/MembershipCard";
import styles from "../../styles/MembershipPage.module.scss";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";

const Membership = () => {
  return (
    <>
      <div className={styles.membershipPage}>
        <MembershipCard type="Free" />
        <MembershipCard type="Premium" />
      </div>
    </>
  );

  return null;
};

export default Membership;
