import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "./redux/store";

import { getAllPosts, searchPosts } from "./redux/posts";
import PaginationBlock from "./components/PaginationBlock";
import PostsTable from "./components/PostsTable";

function App() {
	const [searchText, setSearchText] = useState("");

	const { displayedPosts, loading, totalCount } = useSelector((store: RootState) => store.posts);
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
			<PostsTable posts={displayedPosts} />
			{loading && <h2>Loading...</h2>}
			<PaginationBlock />
		</main>
	);
}

export default App;
