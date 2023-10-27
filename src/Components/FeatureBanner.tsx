import styles from "../styles/FeatureBanner.module.scss";
import { useRouter } from "next/router";

export interface FeatureBannerProps {
  image: "Book" | "Library" | "Graphs";
  side: "left" | "right";
}

const FeatureBanner = ({ image, side }: FeatureBannerProps) => {
  const url = `/Resources/${image}.png`;
  const router = useRouter();

  const description = {
    Book: (
      <>
        <h1 className={styles.featureTitle}>Clean & Simple</h1>
        <h2>
          KTON is designed to be a simple and intuitive way to manage your
          Kindle highlights. It is built with a focus on usability and
          simplicity, allowing you to focus on what matters most: your
          highlights
        </h2>
      </>
    ),

    Library: (
      <>
        <h1 className={styles.featureTitle}>Welcome to KTON</h1>
        <h2>
          An all in one highlight manager for your e-books. We&lsquo;ll help you
          organise, annotate and export your kindle highlights. Finding your
          highlights made easy, happy reading with KTON! 📖📝
        </h2>
        <p
          className={styles.demoButton}
          onClick={() => router.push("https://app.kton.xyz/Demo")}
        >
          Click Here To Demo For Free
        </p>
      </>
    ),
    Graphs: (
      <>
        <h1 className={styles.featureTitle}>Visualize your reading</h1>
        <h2>
          KTON allows you to visualize your reading habits and progress. See how
          many books you&apos;ve read, how many highlights you&apos;ve made and
          how many words you&apos;ve read.
        </h2>
      </>
    ),
  };

  return (
    <div className={styles.featureBanner}>
      <div className={`${styles.featureBanner_width} ${styles[side]}`}>
        <div className={styles.featureBanner_left}>
          <img src={url} alt={image} />
        </div>
        <div className={styles.featureBanner_right}>{description[image]}</div>
      </div>
    </div>
  );
};

export default FeatureBanner;
