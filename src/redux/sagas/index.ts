import { takeEvery, put, call } from "redux-saga/effects";
import { getAllPosts, setAllPosts } from "../posts";
import { getPosts } from "../../api";
import { PostsResponse } from "../../types";

export function* handleAllPosts() {
	const posts: PostsResponse = yield call(getPosts);
	yield put(setAllPosts(posts));
}

export function* watchClickSaga() {
	yield takeEvery(getAllPosts, handleAllPosts);
}

export default function* rootSaga() {
	yield watchClickSaga();
}
