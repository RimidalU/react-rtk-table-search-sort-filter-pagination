export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type InitialState = {
	posts: Post[];
};

export type PostsResponse = Post[];