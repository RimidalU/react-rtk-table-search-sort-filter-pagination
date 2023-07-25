import { createSlice } from "@reduxjs/toolkit";

import { InitialState } from "./../types";

const initialState: InitialState = {
	posts: [],
	filteredPosts: [],
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
		},
	},
});

export const { getAllPosts, setAllPosts, searchPosts } = postsSlice.actions;

export default postsSlice.reducer;
