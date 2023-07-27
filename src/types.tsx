export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type SortType = "asc" | "desc";

export type InitialState = {
	posts: Post[];
	fields: {
		userId: SortType;
		id: SortType;
		title: SortType;
		body: SortType;
	};
	filteredPosts: Post[];
	totalCount: number;
	perPage: number;
	currentPage: number;
	loading: boolean;
};

export type PostsResponse = Post[];
