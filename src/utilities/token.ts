export const jwt = (): string | null => {
  return localStorage.getItem('jwt');
};
