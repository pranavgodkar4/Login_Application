import { fork,join } from "redux-saga/effects";
import userSaga from "./Auth/AuthSaga";

export default function* rootSaga() {
  try {
    const accessTask = yield fork(userSaga);
    yield join(accessTask);
  } catch (error) {
    console.log(error);
  }
}