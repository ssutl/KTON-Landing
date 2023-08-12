export type Tag = {
	color: string;
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
