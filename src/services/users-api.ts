import type { User } from '../types';

interface LoginParams {
  email: string;
  password: string;
}

interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

export default class UsersApi {
  static signUpUser(newUser: SignUpParams): Promise<{ msg?: string; status?: number; user?: User }> {
    const userObj = { user: newUser };
    return fetch('http://localhost:5000/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userObj),
    }).then((res) => res.json());
  }

  static loginUser(params: LoginParams): Promise<{ jwt?: string; error?: string }> {
    return fetch('http://localhost:5000/user_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }

  static getThisUser(jwtToken: string): Promise<User> {
    return fetch('http://localhost:5000/users/current', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((res) => res.json());
  }
}
