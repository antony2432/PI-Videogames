import { configureStore } from '@reduxjs/toolkit'
import videogamesReducer from './slices/videoGamesSlice'

export const store = configureStore({
  reducer: {
    videogames: videogamesReducer
  }
})
