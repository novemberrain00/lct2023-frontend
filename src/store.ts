import { configureStore } from '@reduxjs/toolkit'
import AuthTokenSlice from './redux/authTokenSlice';

export const store = configureStore({
  reducer: {
    authTokenReducer: AuthTokenSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch