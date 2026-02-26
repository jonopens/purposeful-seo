import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import UsersApi from '../services/users-api';
import PagesApi from '../services/pages-api';
import authReducer from './authSlice';
import sitesReducer from './sitesSlice';
import pagesReducer from './pagesSlice';
import insightsReducer from './insightsSlice';
import commentsReducer from './commentsSlice';
import messageReducer from './messageSlice';
import { setCurrentUser, userLoaded, loginSuccess, logOut } from './authSlice';
import { setSites } from './sitesSlice';
import { setPages, scrapePage, removePage } from './pagesSlice';
import { setInsights, addInsights, removeInsightsForPage } from './insightsSlice';
import { setComments } from './commentsSlice';
import { setLastMessage, resetMessage } from './messageSlice';
import type { User, Page, Insight } from '../types';

export { resetMessage };
export type { Page };

export { createComment } from './commentsSlice';
export { createPage, fetchPage } from './pagesSlice';
export { editInsight } from './insightsSlice';
export { createSite, destroySite } from './sitesSlice';

export const getCurrentUser = createAsyncThunk(
  'app/getCurrentUser',
  async (token: string | null, { dispatch }) => {
    if (!token) return;
    const user = await UsersApi.getThisUser(token) as User & { sites?: unknown[]; pages?: unknown[]; comments?: unknown[]; insights?: unknown[] };
    const { sites = [], pages = [], comments = [], insights = [] } = user;
    dispatch(setCurrentUser(user));
    dispatch(setSites(sites as User['sites']));
    dispatch(setPages(pages as Page[]));
    dispatch(setComments(comments as User['comments']));
    dispatch(setInsights(insights as User['insights']));
    dispatch(userLoaded());
  }
);

export const loginUser = createAsyncThunk(
  'app/loginUser',
  async (params: { email: string; password: string }, { dispatch }) => {
    const res = await UsersApi.loginUser(params);
    if (res.jwt) localStorage.setItem('jwt', res.jwt);
    dispatch(loginSuccess());
  }
);

export const signUpUser = createAsyncThunk(
  'app/signUpUser',
  async (params: { username: string; email: string; password: string }, { dispatch }) => {
    const res = await UsersApi.signUpUser(params);
    dispatch(setLastMessage({
      msg: res.msg,
      status: res.status,
      isPositive: res.status === 200,
    }));
  }
);

export const logOutUser = () => (dispatch: (a: ReturnType<typeof logOut>) => void) => {
  dispatch(logOut());
};

export const startPageScraper = createAsyncThunk(
  'app/startPageScraper',
  async (pageId: number, { dispatch }) => {
    const page = await PagesApi.crawlPage(pageId) as Page & { insights?: Insight[] };
    dispatch(scrapePage(page));
    if (page.insights?.length) dispatch(addInsights(page.insights));
  }
);

export const destroyPageAndCleanup = createAsyncThunk(
  'app/destroyPage',
  async (id: number, { dispatch }) => {
    const res = await PagesApi.removePage(id);
    const deletedId = (res as { id: number }).id ?? id;
    dispatch(removePage(deletedId));
    dispatch(removeInsightsForPage(deletedId));
  }
);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sites: sitesReducer,
    pages: pagesReducer,
    insights: insightsReducer,
    comments: commentsReducer,
    message: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
