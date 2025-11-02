
import { takeEvery, put, putResolve } from "redux-saga/effects";
import LoginAPI from "../../apis/loginAPI";
import { fetchUserSucess } from "./AuthReducer";

function* fetchUser(action:any) {
  // ... your user API call
console.log(action);
  try {
    const userData = yield LoginAPI(action.payload.url,action.payload.userInput);
    console.log(userData);
    yield putResolve({type:"Auth/fetchUserSucess", payload:userData.data});
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery("Auth/fetchUser", fetchUser);
}