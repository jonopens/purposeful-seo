export interface User {
  username?: string;
  password_digest?: string;
  email?: string;
  id?: number;
  sites?: Site[];
  pages?: Page[];
  comments?: Comment[];
  insights?: Insight[];
}

export interface Site {
  id: number;
  name?: string;
  url?: string;
  [key: string]: unknown;
}

export interface Page {
  id: number;
  site_id?: number;
  title?: string;
  body_text?: string;
  insights?: Insight[];
  [key: string]: unknown;
}

export interface Insight {
  id: number;
  page_id?: number;
  content?: string;
  [key: string]: unknown;
}

export interface Comment {
  id: number;
  page_id?: number;
  content?: string;
  [key: string]: unknown;
}

export interface LastMessage {
  msg?: string;
  status?: number;
  isPositive?: boolean;
}

export interface RootState {
  loggedIn: boolean;
  loading: boolean;
  loadedSites: boolean;
  lastMessage: LastMessage;
  user: User;
  sites: Site[];
  pages: Page[];
  insights: Insight[];
  comments: Comment[];
}
