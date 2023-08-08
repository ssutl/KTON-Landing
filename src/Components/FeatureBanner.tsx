import styles from "../styles/FeatureBanner.module.scss";

export interface FeatureBannerProps {
  image: "Book" | "Highlights" | "Share" | "Library";
  type: "laptop" | "mobile";
  position: "left" | "right";
}

const FeatureBanner = ({ image, type, position }: FeatureBannerProps) => {
  const url = `/Resources/${image}.png`;

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
    Highlights: (
      <>
        <h1 className={styles.featureTitle}>Better habits</h1>
        <h2>
          Store all your highlights in your pocket and access from anywhere. No
          more scrolling social media feeds at any free moment. Scroll with
          intention.
        </h2>
      </>
    ),
    Share: (
      <>
        <h1 className={styles.featureTitle}>Sharing made easy</h1>
        <h2>
          Break free from limitations of a single platform and share your Kindle
          highlights anywhere. KTON allows you to effortlessly export your
          highlights in multiple formats, enabling you to integrate them into
          your preferred workflows and engage with them on your terms
        </h2>
      </>
    ),
    Library: (
      <>
        <h1 className={styles.featureTitle}>Quick Search</h1>
        <h2>
          Stay on top of your digital library, quickly sort, filter and search
          through all your highlights and books.
          {/* <p>Finding your highlights made easy, happy reading with KTON!</p> */}
        </h2>
      </>
    ),
  };

  return (
    <div className={styles.featureBanner}>
      <div
        className={`${styles.featureBanner_width} ${styles[type]} ${styles[position]}`}
      >
        <div className={styles.featureBanner_left}>
          <img src={url} alt={image} />
        </div>
        <div className={styles.featureBanner_right}>{description[image]}</div>
      </div>
    </div>
  );
};

export default FeatureBanner;
