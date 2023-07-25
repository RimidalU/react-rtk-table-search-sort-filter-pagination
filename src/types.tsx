export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type InitialState = {
	posts: Post[];
	loading: boolean;
};

export type PostsResponse = Post[];