import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect, useState } from "react";

import PostsTable from "./components/PostsTable";
import { getAllPosts, searchPosts } from "./redux/posts";

function App() {
	const [searchText, setSearchText] = useState("");

	const { filteredPosts, loading } = useSelector((store: RootState) => store.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(searchPosts(e.currentTarget.value));
		setSearchText(e.currentTarget.value);
	};

	return (
		<main>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Поиск"
				value={searchText}
				onChange={(e) => handleSearch(e)}
			/>
			<PostsTable posts={filteredPosts} />
			{loading && <h2>Loading...</h2>}
		</main>
	);
}

export default App;
