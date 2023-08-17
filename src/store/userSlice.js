import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    increase(state, action) {
      state.age += action.payload;
    },
    changeName(state) {
      state.name = "park";
    },
  },
});

export let { changeName, increase } = user.actions; //state 변경함수들 남음

export default user;
