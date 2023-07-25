import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";

import { getAllPosts } from "./redux/posts";

function App() {
	const { posts, loading } = useSelector((store: RootState) => store.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	return (
		<>
			<h1 className="text-3xl font-bold underline">react-rtk-table-search-sort-filter-pagination</h1>
			<h2>{posts.length}</h2>
			{loading && <h2>Loading...</h2>}
		</>
	);
}

export default App;
