import { createSlice } from "@reduxjs/toolkit";

import { InitialState } from "./../types";

const initialState: InitialState = {
	posts: [],
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		getAllPosts: () => {},
		setAllPosts: (state, { payload }) => {
			state.posts.push(...payload);
		},
	},
});

export const { getAllPosts, setAllPosts } = postsSlice.actions;

export default postsSlice.reducer;
