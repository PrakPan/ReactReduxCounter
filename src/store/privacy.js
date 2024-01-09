import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name:"privacy",
  initialState:{privacy:false},
  reducers :{
    privacy_toggle : (state)=>{
      state.privacy = !state.privacy;
    }
  }
});
export default privacySlice;

export const privacyAction = privacySlice.actions;