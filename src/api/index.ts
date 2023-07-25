export const getPosts = async () => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		if (!response.ok) {
			return new Error(`HTTP Response Code: ${response.status}`);
		}
		return await response.json()+1;
	} catch (error) {
		console.error(error);
	}
};
