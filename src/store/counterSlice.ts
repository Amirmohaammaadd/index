import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// ------------- way One to export -------------

type CounterStateType = {
  value: number;
};

const counterInitialState: CounterStateType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// ------------- way second to export -------------

type UserData = {
  name: string;
};

const initialState: UserData = {
  name: "",
};

const userSlice = createSlice({
  name: "userData",
  initialState, // initialState : initialState
  reducers: {
    setUserData: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

// -------------------------------------------

type BooleanData = {
  value: boolean;
};

const booleanInitialData: BooleanData = {
  value: false,
};

export const booleanData = createSlice({
  name: "booleanData",
  initialState: booleanInitialData,
  reducers: {
    changeBool: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeBool } = booleanData.actions;
