type JWTToken = string;

export const token = (): JWTToken | null => {
  return localStorage.getItem('ps_auth');
};

export const destroyToken = (): boolean => {
  localStorage.removeItem('ps_auth');
  return false;
}

export const saveToken = (token: JWTToken): boolean => {
  localStorage.setItem('ps_auth', token);
  return true;
} 