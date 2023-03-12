type BaseFetchInit = {
  'Content-Type': string,
  Accept: string,
  Authorization: string,
}

export const isValid = (url: string): boolean => {
  // return bool based on fetch.ok
  return true;
};

export const createFetchInit = (token: string): BaseFetchInit | boolean => {
  if (!token) return false;

  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }
}
