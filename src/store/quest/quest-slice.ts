import {createSlice} from '@reduxjs/toolkit';
import {QuestData} from '../../types/state';
import {fetchQuest} from './api-actions';
import {NameSpace} from '../../const';

const initialState: QuestData = {
  quest: null,
  isQuestLoading: false,
};

export const questSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuest.pending, (state) => {
        state.isQuestLoading = true;
      })
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.isQuestLoading = false;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.isQuestLoading = false;
      });
  }
});
