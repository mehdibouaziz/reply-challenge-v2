import { configureStore } from "@reduxjs/toolkit";
import lightReducer from '../slices/lightsSlice'

export default configureStore({
    reducer: {
        lights: lightReducer
    }
  })
