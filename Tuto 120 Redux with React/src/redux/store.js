import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counter"

export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})