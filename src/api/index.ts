import { Post } from "./../types";

export const getPosts = async (): Promise<Post[]> => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		if (!response.ok) {
			throw new Error(`HTTP Response Code: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};
