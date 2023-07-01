import { usernameQueryScheme } from ".";
import { IGetPosts, PostsResponse } from "@/services";
import { getRandomProvider } from "@/utils";
import { withExeptionFilter } from "@/utils/withExceptionFilter";
import { HttpStatusCode } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";

async function getPosts(
	req: NextApiRequest,
	res: NextApiResponse<PostsResponse>,
) {
	const query = usernameQueryScheme.safeParse(req.query);
	const cursor = req.query.cursor as string;

	const randomPostsProvider = await getRandomProvider<IGetPosts>("Posts");
	const randomLoadMoreProvider = await getRandomProvider<IGetPosts>(
		"load_more",
	);

	if (!query.success) {
		throw new ApiError(
			HttpStatusCode.BadRequest,
			query.error.errors[0].message,
		);
	}

	if (query.data.username === "favicon.ico") {
		return res.end();
	}

	if (cursor) {
		const posts = await randomLoadMoreProvider.getPosts({
			cursor,
			username: query.data.username,
		});
		return res.json(posts);
	}

	const posts = await randomPostsProvider.getPosts({
		username: query.data.username,
	});
	res.json(posts);
}

export default async function apiHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	await withExeptionFilter(req, res)(getPosts);
}
