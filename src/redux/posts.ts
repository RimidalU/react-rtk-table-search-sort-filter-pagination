import { createSlice } from "@reduxjs/toolkit";

import { InitialState, Post } from "./../types";

const initialState: InitialState = {
	posts: [],
	fields: {
		userId: "asc",
		id: "asc",
		title: "asc",
		body: "asc",
	},
	filteredPosts: [],
	displayedPosts: [],
	totalCount: 0,
	perPage: 10,
	currentPage: 1,
	loading: false,
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		getAllPosts: (state) => {
			state.loading = true;
		},
		setAllPosts: (state, { payload }) => {
			state.posts = payload;
			state.filteredPosts = payload;
			state.displayedPosts = payload.slice(0, state.perPage);
			state.totalCount = state.filteredPosts.length;
			document.location = document.location.pathname + `#/page/1`;
			state.loading = false;
		},
		searchPosts: (state, { payload }) => {
			const value = payload.toLowerCase();

			const filteredPosts = state.posts.filter((post) => {
				return (
					post.body.toLowerCase().includes(value) ||
					post.title.toLowerCase().includes(value) ||
					post.id.toString().includes(value)
				);
			});
			state.filteredPosts = filteredPosts;
			state.displayedPosts = filteredPosts.slice(0, state.perPage);
			state.totalCount = state.filteredPosts.length;
			state.currentPage = 1;
			document.location = document.location.pathname + `#/page/1`;
		},
		sortAsc: (state, { payload }) => {
			const field: keyof Post = payload.toLowerCase();
			const sortAsc = state.displayedPosts?.sort((a, b) => {
				if (a[field] > b[field]) {
					return 1;
				}
				if (a[field] < b[field]) {
					return -1;
				}
				return 0;
			});

			const keys = Object.keys(state.fields) as Array<keyof InitialState["fields"]>;

			keys.forEach((key) => {
				state.fields[key] = "asc";
			});
			state.fields[field] = "asc";
			state.displayedPosts = sortAsc.slice(0, state.perPage);
		},
		sortDesc: (state, { payload }) => {
			const field: keyof Post = payload.toLowerCase();
			const sortDesc = state.displayedPosts?.sort((a, b) => {
				if (a[field] > b[field]) {
					return -1;
				}
				if (a[field] < b[field]) {
					return 1;
				}
				return 0;
			});

			const keys = Object.keys(state.fields) as Array<keyof InitialState["fields"]>;

			keys.forEach((key) => {
				key === field ? (state.fields[key] = "desc") : (state.fields[key] = "asc");
			});

			state.displayedPosts = sortDesc.slice(0, state.perPage);
		},
		setPageNumber: (state, { payload }) => {
			const page: number = payload;
			const displayedPosts = state.filteredPosts.slice(10 * (page - 1), state.perPage + 10 * (page - 1));
			document.location = document.location.pathname + `#/page/${page}`;
			state.currentPage = page;
			state.displayedPosts = displayedPosts;
		},
	},
});

export const { getAllPosts, setAllPosts, searchPosts, sortAsc, sortDesc, setPageNumber } =
	postsSlice.actions;

export default postsSlice.reducer;
