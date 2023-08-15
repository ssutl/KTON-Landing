import styles from "../styles/Navbar.module.scss";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Navbar() {
  const router = useRouter();
  const [total, setTotal] = useState<number | undefined>(undefined);

  useEffect(() => {
    const getTotal = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKENDURL}/total-highlights`,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTotal(response.data);
    };

    getTotal();
  }, []);

  //Display the navbar

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarWidth}>
          <h3 onClick={() => router.push("/")}>KTON</h3>
          <div className={styles.navigationButtons}>
            <p
              onClick={() => router.push("https://app.kton.xyz")}
              id={styles.mainButton}
            >
              Get Started
            </p>
            <p onClick={() => router.push("/Terms")}>Terms</p>
            <p onClick={() => router.push("/Roadmap")}>Roadmap</p>
            {/* <p onClick={() => router.push("/Membership")}>Pricing</p> */}
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerWidth}>
          <p>{`OVER ${
            total ? total.toLocaleString() : "10, 000"
          } IMPORTED HIGHLIGHTS`}</p>
        </div>
      </div>
    </>
  );
}
