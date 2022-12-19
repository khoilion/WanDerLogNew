import { createSlice } from "@reduxjs/toolkit";
// import {Dimensions} from "react-native";

const initialState = {
  userInfo: null,
  isLogin: false,
};

const Reducer = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});
const { actions, reducer } = Reducer;
export const { setUserInfo, setIsLogin } = actions;
export default reducer;
