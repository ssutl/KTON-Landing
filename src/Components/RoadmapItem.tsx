import convertDateFunc from "@/Helpers/ConvertDate";
import { RoadmapItem } from "../../@types/schema";
import styles from "../styles/RoadMapItem.module.scss";
import colorConvert from "@/Helpers/NotionColourConverter";

interface RoadmapItemProps {
  data: RoadmapItem;
}

const RoadmapItem = ({ data }: RoadmapItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.cover} alt={data.title} />
      </div>
      {data.tags.length > 0 && (
        <div className={styles.tagBanner}>
          {data.tags.map((tag, index) => (
            <p
              key={index}
              className={styles.tag}
              style={{ backgroundColor: colorConvert(tag.color) }}
            >
              {tag.name}
            </p>
          ))}
        </div>
      )}
      <h3 id={styles.date}>{convertDateFunc(data.date)}</h3>
      <h1 id={styles.title}>{data.title}</h1>
      <p id={styles.description}>{data.description}</p>
    </div>
  );
};
export default RoadmapItem;
