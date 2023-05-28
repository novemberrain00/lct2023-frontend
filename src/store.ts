import {configureStore} from '@reduxjs/toolkit'
import AuthTokenSlice from './redux/authTokenSlice';
import CountDataSlice from './redux/countDataSlice';

export const store = configureStore({
  reducer: {
    authTokenReducer: AuthTokenSlice,
    countDataSlice: CountDataSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch