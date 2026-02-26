import { createSlice } from '@reduxjs/toolkit';
import type { LastMessage } from '../types';

const messageSlice = createSlice({
  name: 'message',
  initialState: {} as LastMessage,
  reducers: {
    setLastMessage(state, action: { payload: LastMessage }) {
      return action.payload;
    },
    resetMessage() {
      return {};
    },
  },
});

export const { setLastMessage, resetMessage } = messageSlice.actions;
export default messageSlice.reducer;
