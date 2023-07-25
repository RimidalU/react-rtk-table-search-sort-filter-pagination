import { createSlice } from "@reduxjs/toolkit";

import { InitialState } from "./../types";

const initialState: InitialState = {
	posts: [],
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
			state.loading = false;
		},
	},
});

export const { getAllPosts, setAllPosts } = postsSlice.actions;

export default postsSlice.reducer;
