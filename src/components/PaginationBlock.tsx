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
			<button key={index}>
				<li
					className={`${currentPage === index + 1 && "text-green-500"} `}
					onClick={() => setCurrentPage(index + 1)}
				>
					{index + 1}
				</li>
			</button>
		);
	});

	const setCurrentPage = (page: number) => {
		dispatch(setPageNumber(page < 1 ? 1 : page));
	};

	return (
		<section className=" w-full flex justify-between px-3 sm:px-6 absolute bottom-0">
			<button disabled={currentPage <= 1 && true} onClick={() => setCurrentPage(currentPage - 1)}>
				Назад
			</button>
			<ul className="flex gap-2 sm:gap-4">{getPaginationLinks}</ul>
			<button disabled={currentPage >= pageCount && true} onClick={() => setCurrentPage(currentPage + 1)}>
				Далее
			</button>
		</section>
	);
};

export default PaginationBlock;
