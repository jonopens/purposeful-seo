export default class UsersApi {

  static createOrFetchUser(params) {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}