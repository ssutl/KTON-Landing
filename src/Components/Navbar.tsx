import styles from "../styles/Navbar.module.scss";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Navbar() {
  const router = useRouter();
  const [total, setTotal] = useState<number | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  //get screenwidth
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);

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
  const pricingP = () => {
    return (
      <p
        onClick={() => {
          router.push("/");
          setTimeout(() => {
            document.getElementById("priceSection")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 200);
        }}
      >
        Pricing
      </p>
    );
  };

  if (screenWidth && screenWidth > 1024) {
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
              <p onClick={() => router.push("/FeatureRelease")}>
                Feature Releases
              </p>
              {screenWidth && screenWidth > 1024 && pricingP()}
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
  } else if (screenWidth && screenWidth < 1024) {
    return (
      <div className={styles.mobileNavbar}>
        <div className={styles.firstRow}>
          <div className={styles.headerWidth}>
            <h3 onClick={() => router.push("/")}>KTON</h3>
            <nav role="navigation">
              <div className={styles.burgerMenu}>
                <button
                  onClick={handleClick}
                  className={
                    isOpen ? styles.burgerButtonOpen : styles.burgerButtonClose
                  }
                />
                <div
                  className={
                    isOpen ? styles.burgerPanelOpen : styles.burgerPanelClose
                  }
                >
                  <ul
                    className={styles.burgerList}
                    onClick={() => setIsOpen(false)}
                  >
                    <li>
                      <p
                        onClick={() => router.push("https://app.kton.xyz")}
                        id={styles.mainButton}
                      >
                        Get Started
                      </p>
                    </li>
                    <li>
                      <p onClick={() => router.push("/Terms")}>Terms</p>
                    </li>
                    <li>
                      <p onClick={() => router.push("/FeatureRelease")}>
                        Feature Releases
                      </p>
                    </li>
                    <li>{pricingP()}</li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.headerWidth}>
            <p>{`OVER ${
              total ? total.toLocaleString() : "10, 000"
            } IMPORTED HIGHLIGHTS`}</p>
          </div>
        </div>
      </div>
    );
  }
}
