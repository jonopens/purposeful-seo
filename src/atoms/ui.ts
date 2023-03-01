import { atom } from 'jotai';

type AsyncRequestStatus = 'inactive' | 'loading' | 'success' | 'failure';
type ThemeValue = 'light' | 'dark';

const asyncRequestStatusAtom = atom<AsyncRequestStatus>('inactive');

const authenticatedAtom = atom<boolean>(false);

const themeAtom = atom<ThemeValue>('light');