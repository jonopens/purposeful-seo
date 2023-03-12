export type User = {
  firstName: string | null,
  lastName: string | null,
  email: string | null,
}

export interface Auth {
  user: User,
  login: Function,
  logout: Function,
}