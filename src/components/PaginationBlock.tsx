import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setPageNumber } from "../redux/posts";

const PaginationBlock = () => {
	const { currentPage, perPage, totalCount } = useSelector((store: RootState) => store.posts);

	const pages = Math.round(totalCount / perPage);
	const pageCount = pages ? pages : 1;

	const dispatch = useDispatch();

	const getPaginationLinks = Array.from({ length: pageCount }, (_, index) => {
		return (
			<a href="#" key={index}>
				<li
					className={`${currentPage === index + 1 && "text-green-500"}`}
					onClick={() => setCurrentPage(index + 1)}
				>
					{index + 1}
				</li>
			</a>
		);
	});

	const setCurrentPage = (page: number) => {
		dispatch(setPageNumber(page < 1 ? 1 : page));
	};

	return (
		<section className="flex gap-2">
			<button disabled={currentPage <= 1 && true} onClick={() => setCurrentPage(currentPage - 1)}>
				Prev
			</button>
			<ul className="flex gap-1">{getPaginationLinks}</ul>
			<button disabled={currentPage >= pageCount && true} onClick={() => setCurrentPage(currentPage + 1)}>
				Next
			</button>
		</section>
	);
};

export default PaginationBlock;