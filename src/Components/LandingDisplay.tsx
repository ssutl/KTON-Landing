import styles from "@/styles/LandingDisplay.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const LandingDisplay = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.main_width}>
        <div className={styles.main_left}>
          <img
            src="/Resources/laptop.png"
            alt="Laptop"
            className={styles.laptop}
          />
        </div>
        <div className={styles.main_right}>
          <h1>
            Welcome to KTON, an all in one highlight manager for your e-books.
            We&lsquo;ll help you organise, annotate and export your kindle
            highlights. 📖📝
          </h1>
          <p onClick={() => router.push("https://app.kton.xyz/Import")}>
            Demo Site
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingDisplay;
