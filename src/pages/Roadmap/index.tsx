import util from "util";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import { InferGetServerSidePropsType } from "next";
import NotionService from "../../../services/notion-service";
import axios from "axios";
import styles from "../../styles/Roadmap.module.scss";
import RoadmapItem from "@/Components/RoadmapItem";

export const getServerSideProps = async () => {
  const notionService = new NotionService();
  const roadMapItems = await notionService.getRoadmapItems();

  return {
    props: {
      roadMapItems,
    },
  };
};

const Roadmap = ({
  roadMapItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(
    util.inspect(
      { roadMapItems },
      { showHidden: false, depth: null, colors: true }
    )
  );
  return (
    <>
      <Head>
        <title>KTON</title>
      </Head>

      <div className={styles.roadMapPage}>
        <div className={styles.roadMapPage_Width}>
          {roadMapItems.length > 0 ? (
            roadMapItems.map((roadMapItem, index) => (
              <RoadmapItem data={roadMapItem} key={index} />
            ))
          ) : (
            <h1>No updates yet</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
