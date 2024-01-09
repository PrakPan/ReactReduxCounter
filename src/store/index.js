import {configureStore, createSlice } from '@reduxjs/toolkit';
import counterSlice from './counter';
import privacySlice from './privacy';




const counterStore = configureStore({reducer : {
   counter : counterSlice.reducer,
   privacy : privacySlice.reducer
}});



export default counterStore;


// const INITIAL_VALUE={
//   counter : 0,
//   privacy: false
// }
// const storeReducer =(currState = INITIAL_VALUE,action)=>{
//   if(action.type === "INCREMENT")
//    return {...currState,counter : currState.counter + 1};
//   else if(action.type === "DECREMENT")
//    return {...currState,counter : currState.counter - 1};
//   else if(action.type === "INPUT_ADD"){
//     return {...currState,counter : currState.counter + Number(action.payload.number)};
//   }else if(action.type === "INPUT_SUB"){
//     return {...currState,counter : currState.counter - Number(action.payload.number)};
//   }else if(action.type === "PRIVACY_TOGGLE"){
//     return {...currState,privacy : !currState.privacy};
//   }
//   return currState;
// }