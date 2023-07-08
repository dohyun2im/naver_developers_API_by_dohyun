import { createSlice } from "@reduxjs/toolkit";
import dayjs from 'dayjs';

export interface ListData {
  period: string;
  ratio: number;
  group: string;
}

interface NaverState {
  startDate: string;
  endDate: string;
  timeUnit: 'date' | 'week' | 'month';
  category: string;
  keyword: string;
  device: '' | 'mo' | 'pc';
  gender: '' | 'm' | 'f';
  age: string[];
  list: ListData[];
}

const initialState: NaverState = {
  startDate: dayjs('2023-01-01').format('YYYY-MM-DD'),
  endDate: dayjs().format('YYYY-MM-DD'),
  timeUnit: 'week',
  category: '50000000',
  keyword: '정장',
  device: '',
  gender: '',
  age: [],
  list: [],
};

export const naverSlice = createSlice({
  name: "naver",
  initialState,
  reducers: {
    setStart(state, action) {
      state.startDate = action.payload;
    },
    setEnd(state, action) {
      state.endDate = action.payload;
    },
    setTimeUnit(state, action) {
      state.timeUnit = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setDevice(state, action) {
      state.device = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setList(state, action) {
      state.list = action.payload;
    },
  },
});

export const {
  setStart,
  setEnd,
  setTimeUnit,
  setCategory,
  setKeyword,
  setDevice,
  setGender,
  setAge,
  setList 
} = naverSlice.actions;

export default naverSlice.reducer;
