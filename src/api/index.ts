import { Post } from "./../types";

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const getPosts = async (): Promise<Post[]> => {
	try {
		const response = await fetch(`${baseUrl}posts`);
		if (!response.ok) {
			throw new Error(`HTTP Response Code: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};
