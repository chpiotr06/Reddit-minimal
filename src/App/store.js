import { configureStore } from "@reduxjs/toolkit";
import wallReducer from '../Components/Wall/wallSlice'

export default configureStore({
  reducer: {
    wall: wallReducer
  }
})