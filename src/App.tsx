import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";

import PostsTable from "./components/PostsTable";
import { getAllPosts } from "./redux/posts";

function App() {
	const { posts, loading } = useSelector((store: RootState) => store.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	return (
		<main>
			<PostsTable posts={posts} />
			{loading && <h2>Loading...</h2>}
		</main>
	);
}

export default App;
