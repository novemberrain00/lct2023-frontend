import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface AuthTokenState {
  token: string
}

const initialState: AuthTokenState = {
  token: '',
}

export const AuthTokenSlice = createSlice({
  name: 'authTokenSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }
  },
})

export const {setToken} = AuthTokenSlice.actions
export default AuthTokenSlice.reducer