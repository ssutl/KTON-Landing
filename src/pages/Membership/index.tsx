import Navbar from "@/Components/Navbar";
import MembershipCard from "../../Components/MembershipCard";
import styles from "../../styles/MembershipPage.module.scss";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";

export const getStaticProps: GetStaticProps<{
  total: number;
}> = async (context) => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACKENDURL}/total-highlights`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("response: ", response.data);

  return {
    props: {
      total: response.data,
    },
  };
};

const Membership = ({
  total,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Navbar total={total.toLocaleString()} />
      <div className={styles.membershipPage}>
        <MembershipCard type="Free" />
        <MembershipCard type="Premium" />
      </div>
    </>
  );

  return null;
};

export default Membership;
