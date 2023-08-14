import { colorKeys } from "@/Helpers/NotionColourConverter";

export type Tag = {
  color: colorKeys;
  id: string;
  name: string;
};

export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  date: string;
  cover: string;
};
