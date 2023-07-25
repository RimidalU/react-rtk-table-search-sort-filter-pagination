import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts";

export const store = configureStore({
	devTools: true,
	reducer: {
		posts,
	},
});
