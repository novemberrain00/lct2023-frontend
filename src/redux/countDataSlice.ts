import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface countDataState {
  industry: number,
  subindustry: number,
  employees_number: number,
  square: number,
  builds_square: number,
  place: string,
  hardware: number,
  calculationsType: number,
  globalHardwareSum: number,
}

const initialState: countDataState = {
    industry: 1,
    subindustry: 0,
    employees_number: 0,
    square: 0,
    builds_square: 0,
    place: 'Выберете на карте',
    hardware: 0,
    calculationsType: 1,
    globalHardwareSum: 0
}

export const CountDataSlice = createSlice({
  name: 'authTokenSlice',
  initialState,
  reducers: {
    setIndustry: (state, action: PayloadAction<number>) => {
      state.industry = action.payload;
    },
    setSubindustry: (state, action: PayloadAction<number>) => {
        state.subindustry = action.payload;
    },
    setEmployeesNum: (state, action: PayloadAction<number>) => {
        state.employees_number = action.payload;
    },
    setSquare: (state, action: PayloadAction<number>) => {
        state.square = action.payload;
    },
    setBuildsSquare: (state, action: PayloadAction<number>) => {
        state.builds_square = action.payload;
    },
    setPlace: (state, action: PayloadAction<string>) => {
        state.place = action.payload;
    },
    setGlobalHardware: (state, action: PayloadAction<number>) => {
      state.hardware = action.payload;
    },
    setCalculationsType: (state, action: PayloadAction<number>) => {
      state.calculationsType = action.payload;
    },
    setGlobalHardwareSum: (state, action: PayloadAction<number>) => {
      state.globalHardwareSum = action.payload;
    },
  },
})

export const {
    setIndustry, 
    setSubindustry, 
    setEmployeesNum, 
    setSquare, 
    setBuildsSquare, 
    setPlace,
    setGlobalHardware,
    setCalculationsType,
    setGlobalHardwareSum,
} = CountDataSlice.actions;
export default CountDataSlice.reducer;