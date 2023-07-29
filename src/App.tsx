import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "./redux/store";

import { getAllPosts, searchPosts } from "./redux/posts";
import PaginationBlock from "./components/PaginationBlock";
import PostsTable from "./components/PostsTable";

import SearchImg from "/search.svg";

function App() {
	const [searchText, setSearchText] = useState("");

	const { displayedPosts, loading } = useSelector((store: RootState) => store.posts);
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
			<article className="max-w-[1077px] min-h-[700px] mx-auto flex flex-col relative">
				<form className="pb-4">
					<label htmlFor="search" className="mb-2 text-sm font-medium sr-only">
						Search
					</label>
					<div className="relative max-w-[631px]">
						<div className="absolute inset-y-0 right-7 flex items-center pointer-events-none">
						<img className="w-6 h-6" src={SearchImg} alt="Search Img" />
						</div>
						<input
							type="search"
							name="search"
							id="search"
							placeholder="Поиск"
							value={searchText}
							onChange={(e) => handleSearch(e)}
						/>
					</div>
				</form>
				<PostsTable posts={displayedPosts} />
				{loading && <h2>Loading...</h2>}
				<PaginationBlock />
			</article>
		</main>
	);
}

export default App;
