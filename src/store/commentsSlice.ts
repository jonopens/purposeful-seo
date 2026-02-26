import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Comment } from '../types';
import CommentsApi from '../services/comments-api';

interface CommentParams {
  id: number;
  user_id?: number;
  page_id?: number;
  message?: string;
  visibility?: string;
}

export const createComment = createAsyncThunk(
  'comments/createComment',
  async (params: Partial<CommentParams>) => {
    return await CommentsApi.createComment(params);
  }
);

export const updateComment = createAsyncThunk(
  'comments/updateComment',
  async (params: CommentParams) => {
    return await CommentsApi.updateComment(params);
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [] as Comment[],
  reducers: {
    setComments(_, action: { payload: Comment[] }) {
      return action.payload;
    },
    addComment(state, action: { payload: Comment }) {
      state.push(action.payload);
    },
    editComment(state, action: { payload: Comment }) {
      const idx = state.findIndex((c) => c.id === action.payload.id);
      if (idx >= 0) state[idx] = { ...state[idx], ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      const idx = state.findIndex((c) => c.id === action.payload.id);
      if (idx >= 0) state[idx] = { ...state[idx], ...action.payload };
    });
  },
});

export const { setComments, addComment, editComment } = commentsSlice.actions;
export default commentsSlice.reducer;
