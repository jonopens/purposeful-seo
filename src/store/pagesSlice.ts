import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Page, Insight } from '../types';
import PagesApi from '../services/pages-api';

export const createPage = createAsyncThunk(
  'pages/createPage',
  async (params: Partial<Page>) => {
    return await PagesApi.addPage(params);
  }
);

export const destroyPage = createAsyncThunk(
  'pages/destroyPage',
  async (id: number) => {
    const res = await PagesApi.removePage(id);
    return (res as { id: number }).id;
  }
);

export const fetchPage = createAsyncThunk(
  'pages/fetchPage',
  async (id: number) => {
    return await PagesApi.getPage(id);
  }
);

interface PageWithInsights extends Page {
  insights?: Insight[];
}

const pagesSlice = createSlice({
  name: 'pages',
  initialState: [] as PageWithInsights[],
  reducers: {
    setPages(_, action: { payload: PageWithInsights[] }) {
      return action.payload;
    },
    addPage(state, action: { payload: PageWithInsights }) {
      state.push(action.payload);
    },
    removePage(state, action: { payload: number }) {
      return state.filter((p) => p.id !== action.payload);
    },
    getPageDetails(state, action: { payload: PageWithInsights }) {
      const idx = state.findIndex((p) => p.id === action.payload.id);
      if (idx >= 0) {
        state[idx] = { ...state[idx], ...action.payload, insights: action.payload.insights ?? [] };
      }
    },
    scrapePage(state, action: { payload: PageWithInsights & { insights?: Insight[] } }) {
      const idx = state.findIndex((p) => p.id === action.payload.id);
      if (idx >= 0) {
        state[idx] = { ...state[idx], ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPage.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(destroyPage.fulfilled, (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    });
    builder.addCase(fetchPage.fulfilled, (state, action) => {
      const idx = state.findIndex((p) => p.id === action.payload.id);
      if (idx >= 0) {
        state[idx] = { ...state[idx], ...action.payload, insights: action.payload.insights ?? [] };
      } else {
        state.push(action.payload);
      }
    });
  },
});

export const { setPages, addPage, removePage, getPageDetails, scrapePage } = pagesSlice.actions;
export default pagesSlice.reducer;
