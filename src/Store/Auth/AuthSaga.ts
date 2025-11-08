
import { takeEvery, putResolve } from "redux-saga/effects";
import LoginAPI from "../../apis/loginAPI";

function* fetchUser(action:any): Generator<any, void, any> {
  // ... your user API call
console.log(action);
  try {
    const userData:any = yield LoginAPI(action.payload.url,action.payload.userInput);
    console.log(userData);
    yield putResolve({type:"Auth/fetchUserSucess", payload:userData.data});
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga(): Generator<any, void, any> {
  yield takeEvery("Auth/fetchUser", fetchUser);
}
