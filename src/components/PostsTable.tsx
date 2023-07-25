import { Post } from "../types";

type Props = {
	posts: Post[];
};

const PostsTable = ({ posts }: Props) => {
	posts;
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Заголовок</th>
					<th>Описание</th>
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
