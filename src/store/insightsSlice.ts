import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Insight } from '../types';
import InsightsApi from '../services/insights-api';

export const editInsight = createAsyncThunk(
  'insights/editInsight',
  async (params: Partial<Insight> & { id: number }) => {
    return await InsightsApi.updateInsight(params);
  }
);

const insightsSlice = createSlice({
  name: 'insights',
  initialState: [] as Insight[],
  reducers: {
    setInsights(_, action: { payload: Insight[] }) {
      return action.payload;
    },
    removeInsightsForPage(state, action: { payload: number }) {
      return state.filter((i) => i.page_id !== action.payload);
    },
    updateInsight(state, action: { payload: Insight }) {
      const idx = state.findIndex((i) => i.id === action.payload.id);
      if (idx >= 0) state[idx] = { ...state[idx], ...action.payload };
    },
    addInsights(state, action: { payload: Insight[] }) {
      state.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editInsight.fulfilled, (state, action) => {
      const idx = state.findIndex((i) => i.id === action.payload.id);
      if (idx >= 0) state[idx] = { ...state[idx], ...action.payload };
    });
    builder.addCase(editInsight.rejected, () => {});
  },
});

export const { setInsights, removeInsightsForPage, updateInsight, addInsights } = insightsSlice.actions;
export default insightsSlice.reducer;
