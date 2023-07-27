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
	loading: boolean;
};

export type PostsResponse = Post[];
