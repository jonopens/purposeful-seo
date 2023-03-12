import { atom } from 'jotai';

type AsyncRequestStatus = 'inactive' | 'loading' | 'success' | 'failure';
type ThemeValue = 'light' | 'dark';

const asyncRequestStatus = atom<AsyncRequestStatus>('inactive');
const auth = atom<boolean>(false);
const theme = atom<ThemeValue>('light');

export { asyncRequestStatus, auth, theme };