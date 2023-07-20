import {createSlice} from '@reduxjs/toolkit';
import {QuestsData} from '../../types/state';
import {fetchQuests} from './api-actions';
import {NameSpace} from '../../const';

const initialState: QuestsData = {
  quests: [],
  isQuestsLoading: false,
};

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.isQuestsLoading = false;
      });
  }
});
