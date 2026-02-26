import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Site } from '../types';
import SitesApi from '../services/sites-api';

export const createSite = createAsyncThunk(
  'sites/createSite',
  async (params: Partial<Site> & { name?: string; url?: string }) => {
    return await SitesApi.createSite(params);
  }
);

export const destroySite = createAsyncThunk(
  'sites/destroySite',
  async (id: number) => {
    const res = await SitesApi.removeSite(id);
    return (res as { id: number }).id;
  }
);

const sitesSlice = createSlice({
  name: 'sites',
  initialState: [] as Site[],
  reducers: {
    setSites(_, action: { payload: Site[] }) {
      return action.payload;
    },
    addSite(state, action: { payload: Site }) {
      state.push(action.payload);
    },
    removeSite(state, action: { payload: number }) {
      return state.filter((s) => s.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSite.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(destroySite.fulfilled, (state, action) => {
      return state.filter((s) => s.id !== action.payload);
    });
  },
});

export const { setSites, addSite, removeSite } = sitesSlice.actions;
export default sitesSlice.reducer;
