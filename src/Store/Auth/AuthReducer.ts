import {} from "react-redux";
import{createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated:false,
    userData:{}
}
const AuthSlice = createSlice({
    name:'Auth',
    initialState:initialState,
    reducers:{
        setAuth:(state,action) => {
            state.isAuthenticated = action.payload.isAuth;
        },
        fetchUser:(state) =>{
            console.log("call fetchUser")
            return{
                ...state
            }
        },
        fetchUserSucess: (state,action) =>
        {
            console.log(action.payload.user);
            localStorage.setItem("token",action.payload?.token);
            return{
                ...state,
                userData:action.payload.user,
                isAuthenticated:action.payload.user?true:false
            }
        },
        logout: (state) => {
            return {
                ...state,
                isAuthenticated:false,
                userData:{}
            }
        } 

}
});

export default AuthSlice.reducer;
export const {setAuth,fetchUser,fetchUserSucess,logout} = AuthSlice.actions;
