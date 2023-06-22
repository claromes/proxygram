import type { IGetPost, Post } from "@/services";
import { getRandomProvider } from "@/utils";
import { withExeptionFilter } from "@/utils/withExceptionFilter";
import type { NextApiRequest, NextApiResponse } from "next";

async function getPost(req: NextApiRequest, res: NextApiResponse<Post>) {
	const shortcode = req.query.shortcode as string;
	const randomProvider = await getRandomProvider<IGetPost>("Post");

	const post = await randomProvider.getPost(shortcode);
	return res.json(post);
}

export default async function apiHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	await withExeptionFilter(req, res)(getPost);
}
