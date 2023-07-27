import { useDispatch, useSelector } from "react-redux";

import { sortAsc, sortDesc } from "../redux/posts";
import { RootState } from "../redux/store";
import { Post } from "../types";

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
		<table>
			<thead>
				<tr>
					<th onClick={() => handleSort("id")}>ID</th>
					<th onClick={() => handleSort("title")}>Заголовок</th>
					<th onClick={() => handleSort("body")}>Описание</th>
				</tr>
			</thead>
			<tbody>
				{posts &&
					posts.map((post) => (
						<tr key={post.id}>
							<td>{post.id}</td>
							<td>{post.title}</td>
							<td>{post.body}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default PostsTable;
