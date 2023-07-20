import {DEFAULT_LEVEL, DEFAULT_TYPE, Level, NameSpace, Type} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  level: DEFAULT_LEVEL,
  type: DEFAULT_TYPE,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<Level>) => {
      state.level = action.payload;
    },
    setType: (state, action: PayloadAction<Type>) => {
      state.type = action.payload;
    }
  },
});

export const {setLevel, setType} = appSlice.actions;
