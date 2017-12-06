export default class UsersApi {

  static signUpUser(newUser) {
    const userObj = { user: newUser }
    return fetch("http://localhost:5000/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userObj)
    }).then(res => res.json());
  }

  static loginUser(params) {
    return fetch("http://localhost:5000/user_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }  

  static getThisUser(jwt) {
    return fetch("http://localhost:5000/users/current", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    }).then(res => res.json());
  }
}