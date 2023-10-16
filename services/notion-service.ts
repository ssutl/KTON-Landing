import { NotionToMarkdown } from "notion-to-md";
import { Client } from "@notionhq/client";
import { FeatureReleaseItem } from "../@types/schema";

export default class NotionService {
	client: Client;
	n2m: NotionToMarkdown;

	constructor() {
		this.client = new Client({ auth: process.env.NOTION_SECRET });
		this.n2m = new NotionToMarkdown({ notionClient: this.client });
	}

	async getFeatureReleaseItems(): Promise<FeatureReleaseItem[] | undefined> {
		const database_id = process.env.NOTION_DATABASE_ID || "";

		const response = await this.client.databases.query({
			database_id,
			filter: {
				property: "Publish",

				checkbox: {
					equals: true,
				},
			},

			sorts: [
				{
					property: "Date",
					direction: "descending",
				},
			],
		});

		const items = response.results.map((res) => {
			return NotionService.pageToFeatureReleaseItem(res);
		});

		return items;
	}

	private static pageToFeatureReleaseItem(page: any): FeatureReleaseItem {
		let cover = page.cover;

		if (!cover) {
			cover = "";
		}

		switch (cover.type) {
			case "file":
				cover = page.cover.file.url;
				break;
			case "external":
				cover = page.cover.external.url;
				break;
			default:
				cover = "";
		}

		return {
			id: page.id,
			title: page.properties.Name.title[0].plain_text,
			description: page.properties.Description.rich_text[0].plain_text,
			tags: page.properties.Tags.multi_select,
			date: page.properties.Date.date.start,
			cover,
		};
	}
}
