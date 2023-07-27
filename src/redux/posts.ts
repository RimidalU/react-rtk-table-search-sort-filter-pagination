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
			state.totalCount = state.filteredPosts.length;
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
			state.totalCount = state.filteredPosts.length;
		},
		sortAsc: (state, { payload }) => {
			const field: keyof Post = payload.toLowerCase();
			const sortAsc = state.filteredPosts?.sort((a, b) => {
				if (a[field] > b[field]) {
					return 1;
				}
				if (a[field] < b[field]) {
					return -1;
				}
				return 0;
			});
			state.fields[field] = "asc";
			state.filteredPosts = sortAsc;
		},
		sortDesc: (state, { payload }) => {
			const field: keyof Post = payload.toLowerCase();
			const sortAsc = state.filteredPosts?.sort((a, b) => {
				if (a[field] > b[field]) {
					return -1;
				}
				if (a[field] < b[field]) {
					return 1;
				}
				return 0;
			});
			state.fields[field] = "desc";
			state.filteredPosts = sortAsc;
		},
		setPageNumber: (state, { payload }) => {
			const page: number = payload;
			state.currentPage = page;
		},
	},
});

export const { getAllPosts, setAllPosts, searchPosts, sortAsc, sortDesc, setPageNumber } =
	postsSlice.actions;

export default postsSlice.reducer;
