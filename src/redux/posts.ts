import { createSlice } from "@reduxjs/toolkit";

import { InitialState } from "./../types";

const initialState: InitialState = {
	posts: [],
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
});

export default postsSlice.reducer;
