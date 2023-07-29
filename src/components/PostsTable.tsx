import { useDispatch, useSelector } from "react-redux";

import { sortAsc, sortDesc } from "../redux/posts";
import { RootState } from "../redux/store";
import { Post } from "../types";

import ArrowImg from "/arrow.svg";

type Props = {
	posts: Post[];
};

const PostsTable = ({ posts }: Props) => {
	const { fields } = useSelector((store: RootState) => store.posts);

	const dispatch = useDispatch();

	const handleSort = (field: keyof Post) => {
		const sortType = fields[field];
		if (sortType === "desc") {
			dispatch(sortAsc(field));
		}
		if (sortType === "asc") {
			dispatch(sortDesc(field));
		}
	};

	return (
		<table className="min-w-full mb-14">
			<thead>
				<tr>
					<th className="px-6" onClick={() => handleSort("id")}>
						<button
							type="button"
							className="inline-flex items-center font-semibold gap-x-2 sm:gap-x-8 p-1"
							aria-expanded="false"
						>
							<span className="text-inherit relative">ID</span>
							<img
								className={`sortPic ${fields["id"] === "desc" && "rotate-180"}`}
								src={ArrowImg}
								alt="Arrow Img"
							/>
						</button>
					</th>
					<th onClick={() => handleSort("title")}>
						<button
							type="button"
							className="inline-flex items-center h-16 font-semibold gap-x-2 sm:gap-x-8 p-1"
							aria-expanded="false"
						>
							<span className="text-inherit relative">Заголовок</span>
							<img
								className={`sortPic ${fields["title"] === "desc" && "rotate-180"}`}
								src={ArrowImg}
								alt="Arrow Img"
							/>
						</button>
					</th>
					<th onClick={() => handleSort("body")}>
						<button
							type="button"
							className="inline-flex items-center h-16 font-semibold gap-x-2 sm:gap-x-8 p-1"
							aria-expanded="false"
						>
							<span className="text-inherit relative">Описание</span>
							<img
								className={`sortPic ${fields["body"] === "desc" && "rotate-180"}`}
								src={ArrowImg}
								alt="Arrow Img"
							/>
						</button>
					</th>
				</tr>
			</thead>
			<tbody>
				{posts &&
					posts.map((post) => (
						<tr key={post.id}>
							<td className=" text-center">{post.id}</td>
							<td>{post.title}</td>
							<td>{post.body}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default PostsTable;
