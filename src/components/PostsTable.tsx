import { useDispatch } from "react-redux";
import { Post } from "../types";
import { sortAsc } from "../redux/posts";

type Props = {
	posts: Post[];
};

const PostsTable = ({ posts }: Props) => {
	const dispatch = useDispatch();

	const handleSortAsc = (field: keyof Post) => {
		dispatch(sortAsc(field));
	};

	return (
		<table>
			<thead>
				<tr>
					<th onClick={() => handleSortAsc("id")}>ID</th>
					<th onClick={() => handleSortAsc("title")}>Заголовок</th>
					<th onClick={() => handleSortAsc("body")}>Описание</th>
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
