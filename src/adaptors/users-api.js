export default class UsersApi {
  static fetchUser() {
    return fetch(
      "http://localhost:3000/api/v1/users"
    ).then(res => res.json());
  }

  static createUser(params) {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}