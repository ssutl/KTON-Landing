import convertDateFunc from "@/Helpers/ConvertDate";
import { FeatureReleaseItem } from "../../@types/schema";
import styles from "../styles/FeatureReleaseItem.module.scss";
import colorConvert from "@/Helpers/NotionColourConverter";

interface FeatureReleaseItemProps {
	data: FeatureReleaseItem;
}

const FeatureReleaseItem = ({ data }: FeatureReleaseItemProps) => {
	return (
		<div className={styles.container}>
			{data.cover !== "" && (
				<div className={styles.image}>
					<img src={data.cover} alt={data.title} />
				</div>
			)}
			<h1 id={styles.title}>{data.title}</h1>
			{data.tags.length > 0 && (
				<div className={styles.tagBanner}>
					{data.tags.map((tag, index) => (
						<p key={index} className={styles.tag} style={{ backgroundColor: colorConvert(tag.color) }}>
							{tag.name}
						</p>
					))}
				</div>
			)}
			<h3 id={styles.date}>{convertDateFunc(data.date)}</h3>
			<h2 id={styles.description}>{data.description}</h2>
		</div>
	);
};
export default FeatureReleaseItem;
